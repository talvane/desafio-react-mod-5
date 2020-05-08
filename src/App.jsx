import React from 'react';

import getContacts from './services/index';

import Contacts from './components/Contacts';
import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Loading from './components/Loading';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await getContacts();
    this.setState({
      data: data,
      loading: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        {this.state.loading ? <Loading status={this.state.loading} /> : null}
        <Contacts data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
