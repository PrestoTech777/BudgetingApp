import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Table = () => {
  return (
    <div class="container">
      <div class="row">
        <table class="table table-dark table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Credit or Debit</th>
              <th scope="col">Total</th>
              <th scope="col">Change</th>
              <th scope="col">Store</th>
              <th scope="col">User</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">6/22/21</th>
              <td>Debit</td>
              <td>$7.50</td>
              <td>$0.50</td>
              <td>Walmart</td>
              <td>Caleb</td>
              <td>
                <a href="#">
                  <FontAwesomeIcon icon="edit" color="orange" />
                  <i class="fas fa-edit"></i>
                </a>
              </td>
              <td>
                <a href="#">
                  <FontAwesomeIcon icon="trash" color="red" />
                  <i class="fas fa-trash"></i>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">6/22/21</th>
              <td>Debit</td>
              <td>$7.50</td>
              <td>$0.50</td>
              <td>Walmart</td>
              <td>Caleb</td>
              <td>
                <a href="#">
                  <FontAwesomeIcon icon="edit" color="orange" />
                </a>
              </td>
              <td>
                <a href="#">
                  <FontAwesomeIcon icon="trash" color="red" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
