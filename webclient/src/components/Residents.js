// import React, { Component } from 'react';
// import '../css/App.css';
// import Header from './Header';
// import ReactTable from "react-table";  
// import "react-table/react-table.css";  

// export default class Residents extends Component {
//     render() {

//         const data = [{  
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{  
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{  
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{  
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{  
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'
//             },{     
//             ID: 43432523,  
//             name: 'Kevin', 
//             last: 'Rodas',
//             year: '1999'

            
 
//         }]  
//         const columns = [{  
//             Header: 'Resident ID',  
//             accessor: 'ID'  
//             },{  
//             Header: 'Name',  
//             accessor: 'name'  
//             },{  
//             Header: 'Last Name',  
//             accessor: 'last'  
//             },{   
//             Header: 'Year',  
//             accessor: 'year'  
//         }] 

//         return (

//             <div>
//                 <Header/>
//                 <h1>Residents Page</h1>

//                 <ReactTable  
//                     data={data}  
//                     columns={columns}  
//                     defaultPageSize = {20}  
//                     // pageSizeOptions = {[2,4, 6]}  
//                 />  
//             </div>   
//         )
//     }
// }

import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];

const TableEditablePage = props => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Table Editable
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default TableEditablePage;