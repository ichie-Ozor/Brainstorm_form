import React from 'react'
import {
  CardHeader,
  Button,
  Table,
  Input,
  Card,
  CardBody,
  InputGroup
 } from 'reactstrap'
// import Table from 'react-bootstrap/Table';

const App = () => {
  return (
    <div className="container mt-4">
      <Card>
        <CardHeader className='d-flex justify-content-center align-item-center' >MOHAMMUD ABUBAKAR RM SABON GARI MARKET</CardHeader>
        <CardBody>
          <div className='d-flex justify-content-between mb-3'>
            <Button color="primary" size="lg">Add New</Button>
          </div>
            <InputGroup style={{width: ""}}>
            <Input type="text" name="search" id="search" placeholder="Search" />
            </InputGroup>
        </CardBody>
        {/* <Button size="sm">Add New</Button> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>UID</th>
              <th> Name</th>
              <th>SHOP NO</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Prise</td>
              <td>22</td>
              <td>15</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hamada</td>
              <td>107</td>
              <td>05</td>
            </tr>
            <tr>
              <td>3</td>
              <td>jihad</td>
              <td>57</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}

export default App





// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
