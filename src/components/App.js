// @flow

import React from "react";
import { IntlProvider } from "react-intl";

import Header from "./Header";
import Footer from "./Footer";

import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FaqPage from "../pages/FaqPage";
import ContactPage from "../pages/ContactPage";
import BooksPanelContainer from "../containers/BooksPanelContainer";
import Book from "../pages/BookPages";
import NotFound from "../pages/NotFound";

import messages from "../constants/messages";

type Props = {
  lang: string
};

const App = ({ lang }: Props) => {
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div>
        <Header />
        <main className="app-main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/contacts" component={ContactPage} />
            {/*
            <Route path="/book/:filter/:book" component={Book} /> */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
