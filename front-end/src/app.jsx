import React,{useState,useEffect} from 'react'; 
import Axios from 'axios';  
import './app.css'; 

export function App() { 

  return (  
    <>    
      <div className='container'> 
           <div className='row'>  
              <div className='col'>
                    <div className='form-container mt-3'>
                      <div className="form-group mt-3">
                        <label htmlFor="name">Name:</label> 
                        <input type="text" name='name' className='form-control w-50' />
                      </div>  
                      <div className="form-group mt-3">
                        <label htmlFor="course">Course:</label>
                        <input type="text" name='course' className='form-control w-50'  />  
                      </div>
                    </div>  
                  <button className='btn btn-primary'>Submit</button>     
              </div>
              <div className='col'>
                <div className="table-container mt-3">      
                    <table className='table table-striped'>         
                      <thead class="thead-light">
                        <tr>
                          <td>S.no</td>   
                          <td>Name</td>   
                          <td>Course</td> 
                          <td>Delete</td> 
                          <td>Edit</td>   
                        </tr>
                      </thead>
                      <tbody> 
                          
                      </tbody>  
                    </table>
                </div>
              </div>
           </div>
      </div>
    </>
  )
}
