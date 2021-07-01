import { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`http://192.168.1.98:5000/api/v1/totals`).then((res) => {
      console.log(res.data);
      const data = res.data;
      this.setState({
        credits: data.credits,
        debits: data.debits,
        change: data.change,
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 col-sm-4 text-center">
            <FontAwesomeIcon icon="plus" size="5x" color="green" />
            <h3>
              <u>Credits</u>
            </h3>
            <h4>$ {this.state.credits}</h4>
          </div>
          <div className="col-12 col-sm-4 text-center">
            <FontAwesomeIcon icon="minus" size="5x" color="red" />
            <h3>
              <u>Debits</u>
            </h3>
            <h4>$ {this.state.debits}</h4>
          </div>
          <div className="col-12 col-sm-4 text-center">
            <FontAwesomeIcon icon="dollar-sign" size="5x" color="green" />
            <h3>
              <u>Balance</u>
            </h3>
            <h4>$ {this.state.credits - this.state.debits}</h4>
          </div>
        </div>
      </div>
    );
  }
}
