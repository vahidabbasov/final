import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Index.scss'

function Index() {
    let {id} = useParams()
    let [service, setService] = useState([])
    function getData(){
        axios.get(`http://localhost:8080/api/services/${id}`).then((res) => {
          setService(res.data);
        });
    }
let navigate = useNavigate()
    useEffect(()=>{
        getData()
    },[])

    console.log(service);
  return (
    <div className="detailsContainer">
      <div className="card">
        <img src={`${service.img}`} alt="" />
        <h3>
          <b>{"Name:"} </b> {service.name}
        </h3>
        <p>
          <b>{"Price"}</b> {service.price}
        </p>
        <p>
          <b>{"Description"}</b> {service.description}
        </p>
      </div>
      <div className="btns">
        <button onClick={()=>{
            navigate('/')
        }}>GO BACK</button>
        <button onClick={()=>{
            if(window.confirm('Are you sure?')){
                
axios.delete(`http://localhost:8080/api/services/${service._id}`).then((res)=>{getData()
navigate("/");})
            }
            
        }}>DELETE</button>
      </div>
    </div>
  );
}

export default Index