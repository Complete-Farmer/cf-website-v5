import { createRef, Component } from "react";
import Content from "./Content";

import Image1 from "@assets/images/products/buyer/sales-affiliate/onboarding-process/image-1.webp";
import Image2 from "@assets/images/products/buyer/sales-affiliate/onboarding-process/image-2.webp";
import Image3 from "@assets/images/products/buyer/sales-affiliate/onboarding-process/image-3.webp";
import Image4 from "@assets/images/products/buyer/sales-affiliate/onboarding-process/image-4.webp";

const data = [
  {
    no: "1",
    name: "Vetting Stage",
    description:
      "Once we receive your application, we check to see if you meet the requirements for our sales affiliates.",
    image: Image1.src,
  },
  {
    no: "2",
    name: "Training Stage",
    description:
      "Once successfully vetted, we provide you with training resources on sales, business development, and customer support concepts as well as a detailed guide on how the Complete Farmer platform works.",
    image: Image2.src,
  },
  {
    no: "3",
    name: "Credentialization stage",
    description:
      "After the training, you’ll take an assessment to gauge your understanding of the concepts shared with you during the training stage.",
    image: Image3.src,
  },
  {
    no: "4",
    name: "Orientation Stage",
    description:
      "After successfully completing the assessment, you become an official affiliate partner and we provide you with all the assets you need to kick things off.",
    image: Image4.src,
  },
];

class OnboardingProcess extends Component {
  inputRef = createRef();
  state = {
    vh: 0,
    slideNumber: 0,
  };
  pageSplitTimes = 1.4;
  lastScrollTop = 0;
  scrollDirectionDown = true;

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ vh: 400 });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const animationElementStart =
      document.getElementById("animation-div").scrollHeight;
    const { body, documentElement } = event.srcElement;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);

    if (scrollDistance > animationElementStart) {
      const num = Number(((scrollDistance - animationElementStart) / 1000).toFixed());
      this.setState({ slideNumber: num > 3 ? 3 : num });
      return;
    }
  };

  changeTextContentBasedOnScroll = () => {
    const { slideNumber } = this.state;
    return (
      <div id="animation-div" className="w-full">
        <Content activeIndex={slideNumber} data={data} />
      </div>
    );
  };

  render() {
    return (
      <div
        className="flex flex-row flex-nowrap"
      >
        {this.changeTextContentBasedOnScroll()}
      </div>
    );
  }
}

export default OnboardingProcess;
