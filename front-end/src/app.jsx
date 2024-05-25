import React,{useState,useEffect} from 'react'; 
import Axios from 'axios';  
import './app.css'; 

export function App() { 
  const [data,setData] = useState({
    name: "",
    course: ""
  });   
  const [tableData,setTableData] = useState([]);  

  useEffect(() => {
    Axios.get("http://localhost:3000/stephen").    
    then((res) => setTableData(res.data))   
    .catch((err) => console.log("Error fecthing data",err));  
  },[tableData])  

  const handleChange = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const newData = {...data,id: tableData.length + 1}; 
    Axios.post('http://localhost:3000/stephen',newData)
    .then((res) => setTableData([...tableData,res.data]))   
    .catch((err) => console.log("Error" , err));   
    setData({
      name : "",
      course : ""
    }) 
  }   

  return (  
    <>    
      <div className='container'> 
           <div className='row'>  
              <form onSubmit={handleSubmit}>
                <div className='col'>
                      <div className='form-container mt-3'>
                        <div className="form-group mt-3">
                          <label htmlFor="name">Name:</label> 
                          <input type="text" name='name' value={data.name} className='form-control w-50' onChange={handleChange} />
                        </div>  
                        <div className="form-group mt-3">
                          <label htmlFor="course">Course:</label>
                          <input type="text" name='course' value={data.course} className='form-control w-50' onChange={handleChange} />  
                        </div>
                      </div>  
                    <button  className='btn btn-primary'>Submit</button>     
                </div>
              </form>
              <div className='col'>
                <div className="table-container mt-3">      
                    <table className='table table-striped'>         
                      <thead class="thead-light">
                        <tr>
                          <td>S.no</td>   
                          <td>Name</td>   
                          <td>Course</td> 
                        </tr>
                      </thead>
                      <tbody> 
                          {tableData?.map((item,index) => {
                            return (
                              <tr key={index}>    
                                <td>{item.id}</td>  
                                <td>{item.name}</td> 
                                <td>{item.course}</td> 
                              </tr>
                            )
                          })}
                      </tbody>  
                    </table>
                </div>
              </div>
           </div>
      </div>
    </>
  )
}
