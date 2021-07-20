import { Component } from "react";
import http from '../http-common'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    http.get(`/totals`).then((res) => {
      const data = res.data;
      this.setState({
        credits: data.credits,
        debits: data.debits,
        change: data.change.toFixed(2),
        date: data.date,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-3 text-center">
            <FontAwesomeIcon icon="plus" size="5x" color="green" />
            <h3>
              <u>Credits</u>
            </h3>
            <h4>$ {this.state.credits}</h4>
          </div>
          <div className="col-12 col-sm-3 text-center">
            <FontAwesomeIcon icon="minus" size="5x" color="red" />
            <h3>
              <u>Debits</u>
            </h3>
            <h4>$ {this.state.debits}</h4>
          </div>
          <div className="col-12 col-sm-3 text-center">
            <FontAwesomeIcon icon="dollar-sign" size="5x" color="green" />
            <h3>
              <u>Balance</u>
            </h3>
            <h4>$ {this.state.credits - this.state.debits}</h4>
          </div>
          <div className="col-12 col-sm-3 text-center">
            <FontAwesomeIcon icon="coins" size="5x" color="orange" />
            <h3>
              <u>Change</u>
            </h3>
            <h4>$ {this.state.change}</h4>
          </div>
        </div>
      </div>
    );
  }
}
