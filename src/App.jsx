import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import DataTable from './components/Table/data_table';

const list1 =[
  { id: 1, Name: "aaaaa", Age: 12 , mob:22222, gender: "m"},
  { id: 2, Name: "bbbbb", Age: 13 , mob:22222, gender: "m"},
  { id: 3, Name: "ccccc", Age: 33 , mob:22222, gender: "f"},
  { id: 4, Name: "ddddd", Age: 18 , mob:22222, gender: "m"},
  { id: 5, Name: "kkkkk", Age: 15 , mob:22222, gender: "f"},
]

const list2 =[
  { id: 6, Name: "yyyyy", Age: 21 , mob:21122, gender: "f"},
  { id: 7, Name: "tttt", Age: 55 , mob:3434, gender: "f"},
]

const list3 =[
  { id: 8, Name: "zzzz", Age: 22 , mob:23421, gender: "m"},
  { id: 9, Name: "xxxx", Age: 33 , mob:11223, gender: "m"},
  { id: 10, Name: "jkjkjk", Age: 43 , mob:55667, gender: "f"}
]



const colNames = ['Id', 'Name', 'Age', 'Mob', 'Gender']

function App() {
  const [rowData, setRowData] = useState([]);
  const [columnData, setColumnData] = useState([]);

  const handleClearClick=(e)=>{
    setColumnData([]);
    setRowData([]);
  }

  const handleId1Click=()=>{
    setColumnData(colNames);
    setRowData(list1);
  }
  
  const handleId2Click=()=>{
    setColumnData(colNames);
    setRowData(list2);
  }

  const handleId3Click=()=>{
    setColumnData(colNames);
    setRowData(list3);
  }
  let renderComponent  = <div>
                        <div style={{marginTop: '20px', marginLeft: '20px'}} class="btn-group ">
                          <Button  variant="outline-secondary" onClick={handleId3Click}>1</Button>
                          <Button variant="outline-secondary"  onClick={handleId2Click}className="mx-2">2</Button>
                          <Button variant="outline-secondary" onClick={handleId1Click} >3</Button>
                        </div>
                        <DataTable list={rowData} colNames={columnData} />
                        <Button variant="outline-primary" className="mx-4"onClick={handleClearClick}> clear </Button>
                        </div>;

     return <React.Fragment>
       {renderComponent}
     </React.Fragment>
   }
   
 
  export default App;