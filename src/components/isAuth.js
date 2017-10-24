import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (this.props.authenticated.authenticated !== true) {
        this.context.router.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (this.props.authenticated.authenticated !== true) {
        this.context.router.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.users };
  }

  return connect(mapStateToProps)(Authentication);
}
