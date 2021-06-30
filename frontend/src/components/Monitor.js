import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Monitor = () => {
  return (
    <div class="container">
      <div class="row mb-3">
        <div class="col-12 col-sm-4 text-center">
          <FontAwesomeIcon icon="plus" size="5x" color="green" />
          <h3>
            <u>Credits</u>
          </h3>
          <h4>$ 2000</h4>
        </div>
        <div class="col-12 col-sm-4 text-center">
          <FontAwesomeIcon icon="minus" size="5x" color="red" />
          <h3>
            <u>Debits</u>
          </h3>
          <h4>$ 50</h4>
        </div>
        <div class="col-12 col-sm-4 text-center">
          <FontAwesomeIcon icon="dollar-sign" size="5x" color="green" />
          <h3>
            <u>Balance</u>
          </h3>
          <h4>$ 1950</h4>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
