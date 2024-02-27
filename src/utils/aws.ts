import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  AWS_POOL_ID,
  AWS_REGION,
  AWS_DOCUMENT_REPORT_BUCKETS,
} from "./constants";

const identityPoolId = `${AWS_REGION}:${AWS_POOL_ID}`;

const getAwsClient = () => {
  return new S3Client({
    region: AWS_REGION,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region: AWS_REGION },
      identityPoolId,
    }),
  });
};

export const getReportFilesFromAwsS3 = async () => {
  const bucketNames = AWS_DOCUMENT_REPORT_BUCKETS.split(",");

  const data = {
    "Impact Reports": [],
    "Vivid Vision Reports": [],
    "White Papers": [],
  };

  for (const b of bucketNames) {
    const command = new ListObjectsV2Command({ Bucket: b });
    const client = getAwsClient();
    const res = await client.send(command);
    const result = res.Contents.map((item) => ({
      name: item.Key.split(".pdf")[0],
      uid: item.ETag,
    }));
    if (b.includes("hite")) data["White Papers"] = result;
    if (b.includes("mpact")) data["Impact Reports"] = result;
    if (b.includes("vision")) data["Vivid Vision Reports"] = result;
  }

  return data;
};

export const getSignedAwsDownloadableFileUrl = async (
  key: string,
  bucketName: string
) => {
  const client = getAwsClient();
  const command2 = new GetObjectCommand({
    Bucket: bucketName,
    Key: key,
  });

  return await getSignedUrl(client, command2, { expiresIn: 3600 });
};
