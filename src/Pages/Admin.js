import { Outlet, Link } from "react-router-dom";

function Admin() {
  return (
    <div className="container">
      <div className="header">
        <img src="Assets\Images\imagesAdmin\logo1.png" alt="logo1" />
        <div className="header1">
          <input type="text" placeholder="Search Mentor/Employee" />
          <button>Logout</button>
        </div>
      </div>
      <div
        className=".home"
        style={{ diplay: "flex", position: "relative", left: "11vw" }}
      >
        // Home{" "}
        <img
          src="Assets\Images\imagesAdmin\rtarrow.png"
          style={{ height: "9px" }}
          alt="cursor"
        />{" "}
        Batch //{" "}
      </div>
      <div className="aside">
        <div>
          <nav>
            <ul>
              <li>
                <img
                  src="Assets\Images\imagesAdmin\group1.png"
                  alt="logo-batch"
                />
                <Link to="/">Batch</Link>
              </li>

              <li>
                <img
                  src="Assets\Images\imagesAdmin\team4.png"
                  alt="logo-mentor"
                />
                <Link to="/blogs">Mentor</Link>
              </li>
              <li>
                <img
                  src="Assets\Images\imagesAdmin\add-user (2).png"
                  alt="logo-request"
                />
                <Link to="/contact">Request</Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </div>
      </div>
      <div className="footer">
        <div className="batchlist">Batch List </div>
        <div className="footerinputbtn">
          <input type="text" />
          <button>+New Batch</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>No.</th>
              <th>Batch ID</th>
              <th>Batch Name</th>
              <th>Mentor Name</th>
              <th>Technologies</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>01</td>
              <td>#154234653</td>
              <td>abcd</td>
              <td>Chandan</td>
              <td>
                React Angular <br />
                Java+SpringBoot <br />
                Node & Express JS
              </td>
              <td>
                <input type="date" name="" id="" />
              </td>
              <td>
                <input type="date" name="" id="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}



export default Admin;

