import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          <div id={"post-" + post.id} className="col post">
            <p>{post.id}</p>
            <h6>{post.text}</h6>
          </div>
        ))}
      </div>
    );
  }
}
