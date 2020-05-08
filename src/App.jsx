import React from 'react';

import Contacts from './components/Contacts';
import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Loading from './components/Loading';

import getContacts from './services/index';
import { handleInputChange } from './utils/index';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      dataOrig: [],
      loading: true,
      searchBy: 'name',
      orderBy: 1,
    };
  }

  async componentDidMount() {
    const data = await getContacts();
    this.setState({
      data: data,
      dataOrig: data,
      loading: false,
    });
  }

  // inputchange
  handleChange = (inputChange) => {
    const dataFilter = handleInputChange(
      this.state.data,
      inputChange,
      this.state.dataOrig,
      this.state.searchBy,
      this.state.orderBy
    );

    this.setState({
      data: dataFilter,
    });
  };

  // onClick button
  handleByOrder = (e) => {
    e.preventDefault();

    this.setState({
      searchBy: e.target.name,
      orderBy: this.state.orderBy === 1 ? 0 : 1,
    });
  };

  // onClick i
  handleDirection = (e) => {
    e.preventDefault();

    console.log(this.state.searchBy);

    this.setState({
      searchBy: e.target.name,
      orderBy: this.state.orderBy === 1 ? 0 : 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters
          data={this.state.data}
          dataOrig={this.state.dataOrig}
          handleChange={(value) => this.handleChange(value)}
          handleByOrder={(value) => this.handleByOrder(value)}
          searchBy={this.state.searchBy}
          handleDirection={(value) => this.handleDirection(value)}
          direction={this.state.orderBy}
        />

        {this.state.loading ? <Loading status={this.state.loading} /> : null}

        <Contacts data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
