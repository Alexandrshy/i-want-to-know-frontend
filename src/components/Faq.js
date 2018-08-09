// @flow

import React from "react";
import LinkMain from "./LinkMain";
import { FormattedMessage } from "react-intl";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="app-faq">
      <LinkMain />
      <h1 className="app-faq-title">
        <FormattedMessage id="app-footer-link-2" />
      </h1>
      <ul className="app-faq-list">
        <li className="app-faq-item">
          <p className="app-faq-question">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have?
          </p>
          <p className="app-faq-answer">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.{" "}
          </p>
        </li>
        <li className="app-faq-item">
          <p className="app-faq-question">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form?
          </p>
          <p className="app-faq-answer">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.{" "}
          </p>
        </li>
        <li className="app-faq-item">
          <p className="app-faq-question">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form?
          </p>
          <p className="app-faq-answer">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.{" "}
          </p>
        </li>
        <li className="app-faq-item">
          <p className="app-faq-question">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form?
          </p>
          <p className="app-faq-answer">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Faq;
