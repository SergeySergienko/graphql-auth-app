import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/currentUser";

class Header extends Component {
  render() {
    console.log(this.props.data);
    return <h3>Header</h3>;
  }
}

export default graphql(query)(Header);
