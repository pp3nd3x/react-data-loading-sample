import React, { Fragment } from 'react';
import { getUserInfo } from './api';

const getInfo = () => {
  const promises = [];
  promises.push(getUserInfo());
  promises.push(getUserInfo());
  promises.push(getUserInfo());
  promises.push(getUserInfo());
  return Promise.all(promises);
};

class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
      status: 'none',
      value: null
    };
  }

  handlePromise(prom) {
    this.setState({
      status: 'pending'
    });

    prom.then(
      res => {
        if (!this.unmounted) {
          this.setState({
            status: 'resolved',
            value: res
          });
        }
      },
      err => {
        if (!this.unmounted) {
          this.setState({
            status: 'rejected',
            value: err
          });
        }
      }
    );
  }

  componentWillMount() {
    if (this.props.promise) {
      this.handlePromise(this.props.promise);
    }
  }

  render() {
    const { props, state } = this;

    switch (state.status) {
      case 'none':
        if (props.before) {
          return props.before(this.handlePromise.bind(this));
        }
        break;
      case 'pending':
        if (props.pending) {
          return props.pending;
        }
        break;
      case 'resolved':
        if (props.then) {
          return props.then(state.value);
        }
        break;
      case 'rejected':
        if (props.catch) {
          return props.catch(state.value);
        }
        break;
    }

    return null;
  }
}

const DataLoaderHoC = props => {
  // return React.createElement(props.component, {
  //   ...this.props,
  //   initialData: this.state.initialData
  // });
  const prom = getInfo();
  const ExampleWithAsync = props => (
    <Async promise={prom} then={val => <div>{val}</div>} />
  );
  return ExampleWithAsync;
};

export default DataLoaderHoC;
