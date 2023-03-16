import React from 'react';
import { Component } from 'react';
import Error from '../Error/Error';

class ErrorBoundary extends Component<{ children: React.ReactNode }, { error: boolean }> {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.state.error) {
      return <Error />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
