import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faDollarSign,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus, faDollarSign, faEdit, faTrash);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
