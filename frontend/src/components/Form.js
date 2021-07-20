import { Component } from "react";
import http from "../http-common";

export default class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      debit: false,
      total: 0,
      change: 0,
      description: "",
      store: "",
      user: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      change: document.getElementById("change").value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    http
      .post('/transactions', this.state)
      .then((res) => {
        console.log("posted", this.state);
        window.location.href = "/transactions";
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} action="/transactions" method="get">
          <div id="creditOrDebit" className="mb-3 mt-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="debit"
                id="credit"
                value="false"
                onChange={this.handleChange}
                required
              />
              <label className="form-check-label h5" htmlFor="Credit">
                Credit
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="debit"
                id="debit"
                value="true"
                onChange={this.handleChange}
                required
              />
              <label className="form-check-label h5" htmlFor="Credit">
                Debit
              </label>
            </div>
          </div>
          <div id="totalAndChange">
            <label htmlFor="total" className="form-label h3">
              Total
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                name="total"
                id="total"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                name="change"
                id="change"
                value={
                  this.state.debit === "true"
                    ? (Math.ceil(this.state.total) - this.state.total).toFixed(
                        2
                      )
                    : (this.state.total - Math.floor(this.state.total)).toFixed(
                        2
                      )
                }
                placeholder="0"
                disabled
              />
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Store</span>
            <input
              className="form-control"
              id="store"
              name="store"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Purchase description</span>
            <textarea
              className="form-control"
              id="description"
              name="description"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">User</span>

            <input
              className="form-control"
              id="user"
              name="user"
              onChange={this.handleChange}
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
