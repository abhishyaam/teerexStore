import React, { Component } from 'react';

export class TeeRexErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //call log service
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1>Something Went Wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default TeeRexErrorBoundary;
