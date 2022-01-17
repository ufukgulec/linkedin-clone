import React, { Component } from 'react'

export default class NavbarSearch extends Component {
    render() {
        return (
            <form className="d-flex">
                <input
                  className="form-control me-2 search-input"
                  type="search"
                  placeholder="Arama Yap"
                  aria-label="Search"
                />
              </form>
        )
    }
}
