// @flow

import React from "react";
import LinkMain from "./LinkMain";
import { FormattedMessage } from "react-intl";
import "./About.css";

const About = () => {
  return (
    <div className="app-about">
      <LinkMain />
      <h1 className="app-about-title">
        <FormattedMessage id="app-footer-link-1" />
      </h1>
      <div className="app-about-text">
        <p>
          Sed sem odio, fringilla sed lectus in, viverra aliquam metus. Sed et
          turpis tortor. Maecenas rhoncus ex quis suscipit interdum. Sed eu
          nulla eros. Donec sed pharetra lectus. Etiam sollicitudin neque
          sapien, nec semper diam euismod molestie. Pellentesque vitae eleifend
          lacus. Suspendisse arcu eros, malesuada eget dictum eu, commodo non
          risus. Aenean sagittis nibh aliquet gravida pulvinar.
        </p>
        <p>
          Sed sit amet nunc et est finibus ultrices eget a elit. Sed nunc dolor,
          elementum et faucibus non, pellentesque quis nisi. Nullam posuere
          massa vitae porta venenatis. Curabitur malesuada turpis ac eleifend
          semper. In lacinia ex a leo auctor lacinia. Praesent sit amet felis
          quam. Aenean fringilla ex lectus, eget vulputate sapien imperdiet a.{" "}
        </p>
        <p>
          Sed gravida leo ullamcorper enim bibendum efficitur. Nam volutpat
          mollis mi, nec lobortis magna vulputate sit amet. Suspendisse at
          libero vehicula, posuere eros in, gravida mauris. Curabitur et
          eleifend nulla. Morbi condimentum vulputate porttitor. Phasellus
          lobortis, velit congue molestie tincidunt, massa lacus pharetra nulla,
          quis tristique nulla arcu vel ipsum.
        </p>
      </div>
    </div>
  );
};

export default About;
