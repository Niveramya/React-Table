import React from "react";
import { Table } from "react-bootstrap";

function DataTable( { list, colNames, width ='auto',height ='auto'})
{
    return (  
        <div style={{marginTop: '20px',marginLeft: '100px',marginBottom :'20px',width: '50%',boxShadow: '3px 6px 3px #ccc' }}>
         {list.length > 0 ? (
             <Table striped bordered hover responsive="lg"  cellSpacing="0" 
             style={{ width: '100%', height: 'height', padding: '5px 10px'}}>
            <thead>
                <tr>
                    {colNames.map((headerItem, index) => (
                        <th key={index}>
                            {headerItem.toUpperCase()}
                        </th>
                    ))}
                </tr>
            </thead>
                <tbody>
                {Object.values(list).
	                map((obj,index) => (
                            <tr key={index}> {
				                Object.values(obj).map((value, index2) => 
                    					(<td key={index2}>{value}
                        					</td>
                        				))}
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            
         ):(<Table>
             <thead><tr> {colNames.map((headerItem, index) => (
                        <th key={index}>
                            {headerItem.toUpperCase()}
                        </th>
                    ))}</tr></thead>
             <tbody><tr></tr></tbody>
         </Table>)}
        </div>
     ) 
}
export default DataTable;