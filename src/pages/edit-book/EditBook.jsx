import React,{useState} from 'react'
import Box from '@mui/material/Box';
import axios from "axios";
import { useLocation } from 'react-router';
import LinearProgress from '@mui/material/LinearProgress';
import { useMutation } from '@tanstack/react-query';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Publish,
  } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  import "./editBook.css";

const EditBook = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[3];
  console.log(id,'id book');


  // const navigate = useNavigate();

  const [file, setFile] = useState("");
  const [title, setTitle] = useState("")
  const [quantity, setQuantity] = useState()
  const [description, setDescription] = useState("")


  const [product, setProduct] = React.useState({})

  React.useEffect(()=>{
    async function getProduct(){
        try{
            const resp = await axios.get(`http://localhost:5000/book/${id}`)
            console.log(resp,'single book');
            
            setProduct(resp.data)
        }catch(err){}
    };
    getProduct();
},[id]) 


   const token = useSelector(state => state.user.currentUser.token)
   console.log(token,'token');
   

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("quantity", quantity);
    // formData.append("description", description);
  
    
    async function handleSubmit(e){
      e.preventDefault()
      const editBook = {
          title,
          description,
          quantity,
      };
     
      try {
         await axios.patch(`http://localhost:5000/book/${product._id}`,editBook ,{
          headers: ({
            Authorization: `Bearer ${token}`
        })
         })
          window.location.replace("/dashboard/books")
      } catch (error) {
          console.log(error);
      }
      axios.patch(`http://localhost:5000/book/${product._id}`, editBook,{
        headers: ({
          Authorization: `Bearer ${token}`
      })
       })
  }
  


  //   const mutation = useMutation( formData =>{
  //     return axios.patch(`http://localhost:5000/book/${product._id}`, formData,{
  //       headers: ({
  //           Authorization: `Bearer ${token}`
  //       })
  //     })
  //   })



  // if(mutation.isLoading){
  //   return(
  //     <Box sx={{ width: '100%' }}>
  //      <LinearProgress />
  //   </Box>
  //   )
  // }

  // if(mutation.isError){
  //   return(
  //     <h2>error</h2>
  //   )
  // }
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Book</h1>
        <Link to="/dashboard/addbook">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
    
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={product.picture}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Title</span>
              <span className="userShowUserTitle">{product.title}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Description</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{product.description}</span>
            </div>
           
            <span className="userShowTitle">Quantity</span>
            <div className="userShowInfo">
             
              <span className="userShowInfoTitle">{product.quantity}</span>
            </div>
          
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="animal kingdom"
                  className="userUpdateInput"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="adventure .."
                  className="userUpdateInput"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
             
              <div className="userUpdateItem">
                <label>Quantity</label>
                <input
                  type="number"
                  placeholder="7"
                  className="userUpdateInput"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
        
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={product.picture}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" 
                  />
              </div>
              <button className="userUpdateButton" type='submit'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditBook