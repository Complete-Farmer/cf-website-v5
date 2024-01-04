import jsonp from "jsonp";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IFields {
  email: string;
  firstname?: string;
  tags: string;
}
export const onMailChimpSubmit = (fields: IFields) => {
  const { email, firstname, tags } = fields;

  const url =
    "https://completefarmer.us4.list-manage.com/subscribe/post?u=d9d1e9683abc0d8614a94ae3b&amp;id=062b1734e2&amp;v_id=6858&amp;f_id=00f903ebf0";

  let _d = `${url}&EMAIL=${email}&tags=${tags}`;
  if (firstname) {
    _d = _d.concat(`&FNAME=${firstname}`);
  }

  jsonp(_d, { param: "c" }, () => {
    console.log("Data Added in the Mailchimp");
  });
};
