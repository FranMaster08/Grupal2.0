import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getListProps: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001")
      .then((reponse) => {
        return reponse.json();
      })
      .then((post) => {
        console.log(post);
        // this.setState({ post: post.data })
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <React.Fragment>
        <section>{this.getListProps}</section>
      </React.Fragment>
    );
  }
}

export default Post;
