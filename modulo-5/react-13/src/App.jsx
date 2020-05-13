import React from "react";

import "./App.scss";
import Contacts from "./components/Contacts";
import TopBar from "./components/Topbar";
import Filters from "./components/Filters";
import { searchFilter, sortBy } from "./services/utils";
import { apiUrl } from "./services/api";

class App extends React.Component {
  state = {
    peoples: [],
    peoplesToShow: [],
    lastFilter: "id",
  };

  componentDidMount() {
    fetch(apiUrl).then(async (result) => {
      const contacts = await result.json();
      this.setState({
        peoplesApi: contacts,
        peoplesToShow: contacts,
      });
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    let query = e.target.value.trim();
    this.setState((oldState) => ({
      peoplesToShow: searchFilter(
        oldState.peoplesApi,
        query,
        oldState.lastFilter
      ),
    }));
  };

  handleFilter = (filter, desc) => {
    this.setState((oldState) => ({
      lastFilter: filter,
      peoplesToShow: sortBy(oldState.peoplesToShow, filter, desc),
    }));
  };

  render() {
    const { peoplesToShow } = this.state;
    return (
      <>
        <TopBar />
        <Filters
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
        />
        <Contacts peoples={peoplesToShow} />
      </>
    );
  }
}

export default App;
