import React from 'react';

import Contacts from './components/Contacts';
import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Loading from './components/Loading';

import getContacts from './services/index';
import { handleInputChange, SortArr } from './utils/index';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      dataOrig: [],
      loading: true,
      searchBy: 'name',
      orderBy: 'down',
    };
  }

  async componentDidMount() {
    const data = await getContacts();
    const { orderBy, searchBy } = this.state;
    this.setState({
      data: SortArr(data, orderBy, searchBy),
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
  handleByOrder = (filter) => {
    const ordBy = this.state.orderBy === 'up' ? 'down' : 'up';
    const { data } = this.state;
    this.setState({
      searchBy: filter,
      orderBy: ordBy,
      data: SortArr(data, ordBy, filter),
    });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters
          data={this.state.data}
          dataOrig={this.state.dataOrig}
          handleChange={this.handleChange}
          handleByOrder={this.handleByOrder}
          searchBy={this.state.searchBy}
          direction={this.state.orderBy}
        />

        {this.state.loading ? <Loading status={this.state.loading} /> : null}

        <Contacts data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
