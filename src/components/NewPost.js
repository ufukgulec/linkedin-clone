import React, { Component } from "react";
import PhotoIcon from "images/icons/Photo.png";
import VideoIcon from "images/icons/Video.png";
import CalendarIcon from "images/icons/Calendar.png";
import TextIcon from "images/icons/Text.png";

export default class NewPost extends Component {
  render() {
    return (
      <div className="col new-post-area">
        <div className="row">
          <div className="col d-flex">
            <img
              className="rounded"
              src="https://avatars.githubusercontent.com/u/51711890?v=4"
              alt="person"
              width="48px"
              height="48px"
            />
            <input
              type="text"
              className="newPost form-control"
              placeholder="Bir gönderi başlat"
            />
          </div>
        </div>
        <div className="row text-center share-options">
          <a className="col-3" href="">
            <img src={PhotoIcon} alt="" width="24px" height="24px" />
            Fotoğraf
          </a>

          <a href="" className="col-3">
            <img src={VideoIcon} alt="" width="24px" height="24px" />
            Video
          </a>
          <a href="" className="col-3 active">
            <img src={CalendarIcon} alt="" width="24px" height="24px" />
            Etkinlik
          </a>
          <a href="" className="col-3">
            <img src={TextIcon} alt="text" width="24px" height="24px" />
            Yazı Yaz
          </a>
        </div>
      </div>
    );
  }
}
