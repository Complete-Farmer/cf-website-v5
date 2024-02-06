import ClipLoader from "react-spinners/ClipLoader";

interface IProps {
  loading?: boolean;
  color?: string;
}

const SpinnerLoader = ({ loading = true, color = "#ffffff" }: IProps) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      size={35}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default SpinnerLoader;
