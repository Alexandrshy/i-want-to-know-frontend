// @flow

import React, { PureComponent } from "react";
import { IntlProvider } from "react-intl";
import { Route, Switch } from "react-router-dom";
import type { Location } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import FaqPage from "../../pages/FaqPage";
import ContactPage from "../../pages/ContactPage";
import BookPage from "../../pages/BookPage";
import AddBookPage from "../../pages/AddBookPage";
import BooksPanelContainer from "../../containers/BooksPanelContainer";
import NotFound from "../../pages/NotFound";
import messages from "../../constants/messages";
import "./App.css";

type Props = {
  lang: string,
  location: Location,
  onSetFilter: Function
};

class App extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.onSetFilter(this.props.location.search);
  }

  componentDidUpdate() {
    if (this.props.location.pathname === "/") {
      this.props.onSetFilter(this.props.location.search);
    }
  }

  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="app-content">
          <div className="app-content-wrapper">
            <Header />
            <main className="app-main app-container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/faq" component={FaqPage} />
                <Route path="/contacts" component={ContactPage} />
                <Route path="/book/:book" component={BookPage} />
                <Route path="/addBook" component={AddBookPage} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
