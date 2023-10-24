import React from "react";
import { useParams } from "react-router-dom";
import { lists } from "../components/Blogs";
import { useNavigate } from 'react-router-dom'


const BlodDetails = () => {
    const navigate=useNavigate();
  const { id } = useParams();
  const list = lists.find((each) => each.id === parseInt(id));
  console.log(list,id)
  return (
    <div>
      <center>
      <div className="mt-[50px]">
      <img src={list.image} alt="" className="w-[500px] rounded-2xl h-[300px]" />
      <h1>{list.title}</h1>
      <h3>{list.description}</h3>
      <button className="bg-blue-500 rounded-md mb-[50px]" onClick={()=>navigate('/')}>Home</button>
      </div>
      </center>
    </div>
  );
};

export default BlodDetails;
