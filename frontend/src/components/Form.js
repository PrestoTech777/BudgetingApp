import { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      debit: null,
      total: 0,
      change: 0,
      description: "",
      store: "",
      user: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form>
          <div id="creditOrDebit" className="mb-3 mt-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="debit"
                id="credit"
                value="false"
                // checked={this.state.debit}
                onChange={this.handleChange}
              />
              <label className="form-check-label h5" for="Credit">
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
                // checked={this.state.debit}
                onChange={this.handleChange}
              />
              <label className="form-check-label h5" for="Credit">
                Debit
              </label>
            </div>
          </div>
          <div id="totalAndChange">
            <label for="total" className="form-label h3">
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
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                name="change"
                id="change"
                value={(Math.ceil(this.state.total) - this.state.total).toFixed(
                  2
                )}
                disabled
                onChange={this.handleChange}
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
        </form>
      </div>
    );
  }
}
