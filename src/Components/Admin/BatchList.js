// import './BatchList.css'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import Form from "./Components/Admin/Form";

function BasicExample() {
  return (
    <div className="divcontainer">
         <div className='container1'>
        <Navbar bg="light" expand="lg">
      
      <div><img src="Assets\Images\imagesAdmin\logo1.png" alt="logo1" /></div>
      <div><input type="text" placeholder='Search Mentor/Employee' name="" id="" /></div>
      <div>
      <Popup trigger={<button> +New Batch </button>} 
     position="right center">
       <div className="form">
            <form action="">
            <h4>Add new batch</h4><hr />
            <div>
                <p>Batch Name</p>
                <input type="text" />
            </div>

            <div>
                <p>Mentor Name</p>
                <input type="text" />
            </div>

            <div>
                <p>Technologies</p>
                <input type="text" />
            </div>

            <div>
                <p>Start Date</p>
                <input type="date" name="" id="" />
            </div>

            <div>
                <p>End Date</p>
                <input type="date" name="" id="" />
            </div>
            <hr />
            <div>
                <button>create</button>
            </div>

            


        </form>
        </div>
    </Popup>
      </div>

      
    </Navbar>
    </div>
    <div className='container2'>
        <Navbar bg="light" expand="lg">
      <Container>
      <div className="aside">
                <div>
                    <img src="Assets\Images\imagesAdmin\group1.png"  alt="logo-batch" />
                        <p>Batch</p> 
                    </div>
                    <div>
                        <img src="Assets\Images\imagesAdmin\team4.png" alt="logo-mentor" />
                        <p>Mentor</p>
                    </div>
                    <div>
                        <img src="Assets\Images\imagesAdmin\add-user (2).png" alt="logo-request" />
                        <p>Request</p>
                    </div>
            </div>
    </Container>
    </Navbar>
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
        <th ><input type="checkbox" name="" id="" /></th>
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
          <td><input type="checkbox" name="" id="" /></td>
        <td>01</td>
        <td>#154234653</td>
        <td>abcd</td>
        <td>Chandan</td>
        <td>React Angular <br />
          d Java+SpringBoot <br />
          d Node & Express JS
        </td>
         <td><input type="date" name="" id="" /></td>
        <td><input type="date" name="" id="" /></td>
        </tr>
        
      </tbody>
    </Table>
   
    </div>
   
    
    
  );
}

export default BasicExample;