import React from "react";
import { type RichTextBlock } from "prismic-reactjs";
import * as pkg from "prismic-reactjs";

const { RichText, Elements } = pkg;

export const linkResolver = ({ type, uid }) => {
  // URL for a category type
  if (type === "category") {
    return `/category/${uid}`;
  }
  // URL for a product type
  if (type === "product") {
    return `/product/${uid}`;
  }
  // URL for a page type
  if (type === "page") {
    return `/${uid}`;
  }
  // Backup for all other types
  return "/";
};

// -- Function to add unique key to props
const propsWithUniqueKey = function (
  props: { href?: string; target?: string; className?: string },
  key: number | string
) {
  return Object.assign(props, { key });
};

// -- HTML Serializer
const htmlSerializer = function (
  type: string,
  element,
  content,
  children,
  key: string
) {
  let props = {};

  switch (type) {
  case Elements.heading1: // Heading 1
    return (
      <h1
        key={key}
        className="text-left my-3 font-bold leading-9 text-[26px] md:text-4xl"
      >
        {children}
      </h1>
    );
  case Elements.heading2: // Heading 2
    return (
      <h2
        key={key}
        className="text-left my-3 font-bold leading-9 text-[22px] md:text-[28px]"
      >
        {children}
      </h2>
    );
  case Elements.heading3: // Heading 3
    return (
      <h3
        key={key}
        className="text-left my-3 font-bold leading-9 text-[22px] md:text-[28px]"
      >
        {children}
      </h3>
    );
  case Elements.heading4: // Heading 4
    return (
      <h4 key={key} className="text-left my-3 font-bold leading-9 text-xl md:text-2xl">
        {children}
      </h4>
    );
  case Elements.heading5: // Heading 5
    return (
      <h5 key={key} className="text-left my-3 font-bold leading-9 text-lg md:text-xl">
        {children}
      </h5>
    );
  case Elements.heading6: // Heading 6
    return (
      <h6 key={key} className="text-left my-3 font-bold leading-9 text-base md:text-xl">
        {children}
      </h6>
    );
  case Elements.paragraph: {
    // Paragraph
    return (
      <p key={key} className="my-3 leading-9 text-sm md:text-base lg:text-lg">
        {children}
      </p>
    );
  }
  case Elements.preformatted: // Preformatted
    return React.createElement(
      "pre",
      propsWithUniqueKey({ className: "mt-3" }, key),
      children
    );
  case Elements.strong: // Strong
    return React.createElement(
      "strong",
      propsWithUniqueKey({ className: "my-3" }, key),
      children
    );
  case Elements.em: // Emphasis
    return React.createElement(
      "em",
      propsWithUniqueKey({ className: "mt-3" }, key),
      children
    );
  case Elements.listItem: // Unordered List Item
    return (
      <li key={key} className="ml-6 mt-3 list-disc text-sm md:text-base lg:text-lg">
        {children}
      </li>
    );
  case Elements.oListItem: // Ordered List Item
    return (
      <li key={key} className="ml-6 mt-3 list-disc text-sm md:text-base lg:text-lg">
        {children}
      </li>
    );
  case Elements.list: // Unordered List
    return (
      <ul key={key} className="ml-6 mt-3">
        {children}
      </ul>
    );
  case Elements.oList: // Ordered List
    return (
      <ol key={key} className="ml-6 mt-3">
        {children}
      </ol>
    );
  case Elements.image: {
    // Image
    const linkUrl = element.linkTo
      ? element.linkTo.url || linkResolver(element.linkTo)
      : null;
    const linkTarget =
        element.linkTo && element.linkTo.target
          ? { target: element.linkTo.target }
          : {};
    const linkRel = linkTarget.target ? { rel: "noopener" } : {};
    const img = React.createElement("img", {
      src: element.url,
      alt: element.alt || "",
    });
    return React.createElement(
      "p",
      propsWithUniqueKey(
        { className: [element.label || "", "block-img"].join(" ") },
        key
      ),
      linkUrl ? (
        React.createElement(
          "a",
          {
            target: "_blank",
            href: linkUrl,
            ...linkTarget,
            ...linkRel,
          },
          img
        )
      ) : (
        <img
          src={element.url}
          alt={element.alt}
          className="text-base mb-3 mt-1"
        />
      )
    );
  }
  case Elements.embed: {
    // Embed
    props = {
      "data-oembed": element.oembed.embed_url,
      "data-oembed-type": element.oembed.type,
      "data-oembed-provider": element.oembed.provider_name,
      ...(element.label ? { className: element.label } : {}),
    };
    const embedHtml = React.createElement("div", {
      dangerouslySetInnerHTML: { __html: element.oembed.html },
    });
    return React.createElement(
      "div",
      propsWithUniqueKey(props, key),
      embedHtml
    );
  }
  case Elements.hyperlink: {
    // images
    const targetAttr = element.data.target
      ? { target: element.data.target }
      : {};
    const relAttr = { rel: "noopener" };
    props = {
      href: element.data.url || linkResolver(element.data),
      ...targetAttr,
      ...relAttr,
    };

    return React.createElement(
      "a",
      propsWithUniqueKey({ target: "_blank", className: "text-grower-500", ...props }, key),
      children
    );
  }
  case Elements.label: // for labels
    props = element.data ? { className: element.data.label } : {};
    return React.createElement(
      "span",
      propsWithUniqueKey(props, key),
      children
    );
  case Elements.span: // this is for spans
    if (content) {
      return content.split("\n").reduce((acc, p) => {
        if (acc.length === 0) {
          return [p];
        }
        const brIndex = (acc.length + 1) / 2 - 1;
        const br = React.createElement("br", propsWithUniqueKey({}, brIndex));
        return acc.concat([br, p]);
      }, []);
    }
    return null;

  default:
    // null should be included
    return null;
  }
};

export default function PrismicText({ render }: { render: RichTextBlock[] }) {
  return <RichText render={render} htmlSerializer={htmlSerializer} />;
}
