import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/transactions">
          <Table />
        </Route>
        <Route path="/add">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
