import ClipLoader from "react-spinners/ClipLoader";

interface IProps {
  loading?: boolean;
  color?: string;
  size?: number;
}

const SpinnerLoader = ({
  size = 35,
  loading = true,
  color = "#ffffff",
}: IProps) => {
  return (
    <ClipLoader
      size={size}
      color={color}
      loading={loading}
      aria-label="Loading Spinner"
    />
  );
};

export default SpinnerLoader;
