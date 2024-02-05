import Image1 from "@assets/images/about-us/core-values/image-1.webp";
import Image2 from "@assets/images/about-us/core-values/image-2.webp";
import Image3 from "@assets/images/about-us/core-values/image-3.webp";
import Image4 from "@assets/images/about-us/core-values/image-4.webp";
import Image5 from "@assets/images/about-us/core-values/image-5.webp";

const coreValues = [
  {
    slug: "innovation-and-creativity",
    title: "Innovation and creativity",
    image: Image1,
    isActive: true,
    lists: [
      {
        title: "Being data driven",
        description: `Farmers need data to make the best decisions. We live in a data-driven world. As such, we always use data to determine customer and
        business needs and develop solutions. Data should also be at the core of our reporting for past initiatives and future plans. When
        unclear on what to do, check the data.`,
      },
      {
        title: "Being curious",
        description: ` Farmers are always learning about events and happenings on their fields and seek answers to improve their farms. Farmers seek self
        improvement and learn by doing and experimentation, asking questions to explore new possibilities and solutions. Learning is a life-long
        endeavor and knowledge is power.`,
      },
      {
        title: "Inventing, Improving and simplifying",
        description: `Farmers finding new ways to innovate and improve processes and products by insightful observations and drawing inspiration from nature
        to build new tools and simple solutions to complex problems even when others think it is impossible or irrational.`,
      },
    ],
  },
  {
    slug: "excellence-and-action-bias",
    title: "Excellence and Action Bias",
    image: Image2,
    lists: [
      {
        title: "Get things done",
        description:
          "Farmers are only interested in results. They focus on the inputs and means of making sure they have the best yields. They are resourceful in getting results despite challenges and setbacks.",
      },
      {
        title: "Be excellent and hire the best",
        description:
          "Farm work can be daunting and farmers rely on experts with proven competence to work with. They mentor, coach and develop talents to become excellent. They grow talents as well as their crops.",
      },
      {
        title: "Set high Standard",
        description:
          "Farmers are continually raising the bar and driving their teams to deliver high quality products, services, and processes. Farmers ensure that defects do not get sent down to markets and that quality is maintained at every step of the process. Farmers like to be exceptional and stand out by being pioneers and pacesetters.",
      },
    ],
  },
  {
    slug: "learn-and-create",
    title: "Learn and Create",
    image: Image3,
    lists: [
      {
        title: "Think big and bold",
        description:
          "As the company continues to grow, teams should prioritize implementing ideas that are scalable and can be easily replicated.Farmers develop and operate with a scale-up mentality. Farmers understand the potential of a seed and make space available for a seed to become a tree.",
      },
      {
        title: "Fail Forward",
        description:
          "We aren’t afraid to fail, in fact it is encouraged. With failure we learn to challenge the status quo, and push onward to success.",
      },
      {
        title: "Take a step back",
        description:
          "Your first approach does not have to be your final approach. As you discover new findings and more efficient ways to achieve a goal, take a step back, reassess your initial plan, and pivot if necessary.",
      },
    ],
  },

  {
    slug: "trust-and-responsiblity",
    title: "Trust and Responsibility",
    image: Image4,
    lists: [
      {
        title: "Earning trust",
        description:
          "Farmers underpromise and overdeliver. Trust should always be earned, even in the workplace. Always communicate effectively with teammates and customers, set clear expectations on every deliverable, ask for support when needed, and deliver results while meeting deadlines. Trust allows your teammates to depend on you and vice versa.",
      },
      {
        title: "Taking responsibility",
        description:
          "Farmers show ownership by taking responsibility for the outcomes of their fields. They are not spectators. They act as champions and ensure excellence to raise the bar for others. Farmers sacrifice short term gains for long term rewards.",
      },
      {
        title: "Disagree and Commit",
        description:
          "The well being of a farm is the topmost priority for a farmer. Farmers have a backbone to commit to an action, even if their decisions, ideas and opinions aren’t agreed to. They challenge decisions, and criticize ideas to improve them. Farmers create environments in which the best ideas win, regardless of where or whom they came from.",
      },
    ],
  },
  {
    slug: "passion-and-impact",
    title: "Passion and Impact",
    image: Image5,
    lists: [
      {
        title: "Being customer Focused",
        description:
          "We exist to provide our customers with a competitive advantage and it is important to make the customers’ delight our priority. Our entire product and processes start with the customer and work backwards. We want to feed people and people are our biggest assets and impact.",
      },
      {
        title: "Farmers eat last",
        description:
          "Farmers strive to ensure that everyone is fed before serving themselves. Think long term and responsibly utilize resources to ensure that these resources will last for future generations. Farmers work to protect the environment and protect its valuable resources.",
      },
    ],
  },
];

export default coreValues;
