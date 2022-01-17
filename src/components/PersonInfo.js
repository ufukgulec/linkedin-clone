import React, { Component } from "react";
import PremiumIcon from "images/icons/Premium.png";
import SaveIcon from "images/icons/Save.png";
export default class PersonInfo extends Component {
  render() {
    return (
      <div className="section">
        <div className="card pt-3">
          <img
            src="https://avatars.githubusercontent.com/u/51711890?v=4"
            className="rounded mx-auto d-block "
            width="68px"
            height="68px"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-center fw-bold">Orhan Ufuk Güleç</h5>
            <p className="card-text text-center">
              Web Fronted Developer Intern
            </p>
          </div>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="text-muted">Bağlantı</div>
                <p className="m-0 fw-bold">İletişim ağınızı büyütün</p>
              </div>
              <span className="badge">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="text-muted">Profilinizi kimler görüntüledi</div>
              </div>
              <span className="badge">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="text-muted">Özel araç ve içgörülere erişin</div>
                <p className=" fs-6 m-0 fw-bold">
                  <img
                    src={PremiumIcon}
                    alt="Premium"
                    width="16px"
                    height="16px"
                  />
                  Premium’u 1 Ay Ücretsiz Deneyin
                </p>
              </div>
              <span className="badge">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <p className="m-0">
                  <img src={SaveIcon} alt="save" width="16px" height="16px" />
                  Öğelerim
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
