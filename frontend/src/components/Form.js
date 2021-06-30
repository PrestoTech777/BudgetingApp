const Form = () => {
  return (
    <div class="container">
      <form>
        <div id="creditOrDebit" class="mb-3 mt-3">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="credDeb"
              id="credit"
              value="false"
            />
            <label class="form-check-label" for="Credit">
              Credit
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="credDeb"
              id="debit"
              value="true"
            />
            <label class="form-check-label" for="Credit">
              Debit
            </label>
          </div>
        </div>
        <div id="totalAndChange">
          <label for="total" class="form-label">
            Total
          </label>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" name="total" id="total" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">$ 0.</span>
            <input
              type="text"
              class="form-control"
              name="change"
              id="change"
              placeholder="Change { total.ceiling - total }"
              disabled
            />
          </div>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Store</span>
          <input class="form-control" id="store" name="store" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Purchase description</span>
          <textarea
            class="form-control"
            id="description"
            name="description"
          ></textarea>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">User</span>
          <input class="form-control" id="user" name="user" disabled />
        </div>
      </form>
    </div>
  );
};

export default Form;
