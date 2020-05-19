import React, { Component } from "react";
import { number, string, bool } from "prop-types";

export default class HTML extends Component {
  stripHTMLEntities = (html) =>
    html.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");

  truncate = (html, truncate) =>
    html.length > truncate
      ? html
          .replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "")
          .substring(0, truncate)
          .concat("...")
          .trim()
      : html;

  render() {
    const {
      children,
      component: Comp = "span",
      stripHTMLEntities,
      truncate,
      className,
    } = this.props;

    const html = truncate ? this.truncate(children, truncate) : children;

    return (
      <Comp
        className={className}
        dangerouslySetInnerHTML={{
          __html: stripHTMLEntities ? this.stripHTMLEntities(html) : html,
        }}
      />
    );
  }
}

HTML.propTypes = {
  children: string.isRequired,
  component: string.isRequired,
  truncate: number,
  stripHTMLEntities: bool,
  className: string,
};
