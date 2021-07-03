import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faDollarSign,
  faEdit,
  faTrash,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus, faDollarSign, faEdit, faTrash, faCoins);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
