import { Fragment, type ReactNode } from "react";
import Fade from "react-reveal/Fade";

interface IProps extends RevealProps {
  children: ReactNode;
}

const Fading = ({ children, ...rest }: IProps) => (
  <Fade delay={500} duration={1000} distance="30px" {...rest}>
    <Fragment>{children}</Fragment>
  </Fade>
);

export default Fading;
