import React, { Component } from 'react'
import homeIcon from "images/icons/Home.svg";
import networkIcon from "images/icons/Network.svg";
import jobsIcon from "images/icons/JobAd.svg";
import messageIcon from "images/icons/Message.svg";
import notificationIcon from "images/icons/Notification.svg";
import personIcon from "images/icons/person.png";
import businessIcon from "images/icons/Business.svg";

export default class NavbarLinks extends Component {
    render() {
        return (
            <ul className="navbar-nav mb-2 mb-lg-0 pt-2 text-center">
                <li className="nav-item">
                  <a
                    className="nav-link active d-grid"
                    aria-current="page"
                    href="#"
                  >
                    <img
                      src={homeIcon}
                      className=" mx-auto d-block"
                      alt="asd"
                      width="24"
                      height="24"
                    />
                    Anasayfa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-grid" aria-current="page" href="#">
                    <img
                      src={networkIcon}
                      className=" mx-auto d-block"
                      alt="asd"
                      width="24"
                      height="24"
                    />
                    Ağım
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-grid" aria-current="page" href="#">
                    <img
                      src={jobsIcon}
                      className=" mx-auto d-block"
                      alt="asd"
                      width="24"
                      height="24"
                    />
                    İş İlanları
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-grid" aria-current="page" href="#">
                    <img
                      src={messageIcon}
                      className=" mx-auto d-block"
                      alt="asd"
                      width="24"
                      height="24"
                    />
                    Mesajlaşma
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-grid" aria-current="page" href="#">
                    <img
                      src={notificationIcon}
                      className=" mx-auto d-block"
                      alt="asd"
                      width="24"
                      height="24"
                    />
                    Bildirimler
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-grid" aria-current="page" href="#">
                    <img
                      src={personIcon}
                      className=" mx-auto d-block"
                      alt="asd"
                      width="24"
                      height="24"
                    />
                    Ben
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-grid" aria-current="page" href="#">
                    <img
                      src={businessIcon}
                      className=" mx-auto d-block"
                      alt="asd"
                      width="24"
                      height="24"
                    />
                    İş
                  </a>
                </li>
                <li className="nav-item navber-text">
                  <a className="nav-link d-grid" aria-current="page" href="#">
                    Premium’u 1 Ay Ücretsiz Deneyin
                  </a>
                </li>
              </ul>
        )
    }
}
