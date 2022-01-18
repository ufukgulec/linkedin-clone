import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="posts">
        {this.props.posts.map((post) => (
          <div key={Math.random()} className="row single-post py-1 mt-4">
            <div className="col">
              <div className="row">
                <div className="col d-flex">
                  <img
                    src="https://avatars.githubusercontent.com/u/51711890?v=4"
                    className="rounded"
                    width="48px"
                    height="48px"
                    alt="person-img"
                  />
                  <span>
                    <p>Ufuk Güleç</p>
                    <p className="text-muted">Ufuk Güleç</p>
                    <p className="text-muted">Ufuk Güleç</p>
                  </span>
                </div>
                
              </div>
              <div className="row">
                <div className="col">
                  <p>{post.ptext}</p>
                  <a href={post.link}>{post.link}</a>
                </div>
              </div>
              <div className="row pt-3 post-img">
                <div className="col p-0">
                  <img src={post.photoUrl} alt="photo" />
                </div>
              </div>
              <div className="row">Aksiyon buttonlar</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
