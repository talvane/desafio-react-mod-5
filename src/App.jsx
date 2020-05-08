import React from 'react';

import Contacts from './components/Contacts';
import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Loading from './components/Loading';

import getContacts from './services/index';
import { handleInputChange } from './utils/index';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataOrig: [],
      loading: true,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await getContacts();
    this.setState({
      data: data,
      dataOrig: data,
      loading: false,
    });
  }

  handleChange(inputChange) {
    const dataFilter = handleInputChange(
      this.state.data,
      inputChange,
      this.state.dataOrig
    );

    this.setState({
      data: dataFilter,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          data={this.state.data}
          dataOrig={this.state.dataOrig}
          handleChange={(value) => this.handleChange(value)}
        />
        {this.state.loading ? <Loading status={this.state.loading} /> : null}
        <Contacts data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
