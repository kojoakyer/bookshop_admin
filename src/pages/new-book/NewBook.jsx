import React,{useState} from 'react'
import Box from '@mui/material/Box';
import axios from "axios";
import LinearProgress from '@mui/material/LinearProgress';
import { useMutation } from '@tanstack/react-query';

import { useSelector } from 'react-redux';
// import { userRequest } from '../../requestMethods';

import './newBook.css'

const NewBook = () => {

  const [file, setFile] = useState("");
  const [title, setTitle] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [description, setDescription] = useState("")


   const token = useSelector(state => state.user.currentUser.token)
   console.log(token,'token');
   

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("quantity", quantity);
    formData.append("description", description);


    async function handleSubmit(e){
      e.preventDefault()
      // const newBook = {
      //    file,
      //     title,
      //     description,
      //     quantity,
      // };
     
      try {
         await axios.post("http://localhost:5000/book", formData,{
          headers: ({
            Authorization: `Bearer ${token}`
        })
         })
          window.location.replace("/dashboard/books")
      } catch (error) {
          console.log(error);
      }
      axios.post("http://localhost:5000/book", formData,{
        headers: ({
          Authorization: `Bearer ${token}`
      })
       })
  }
  

    // const mutation = useMutation( formData =>{
    //   return axios.post("http://localhost:5000/book", formData,{
       
    //   })
    // })

    // const submitForm =  (e) => {
    //   e.preventDefault();
    //   mutate(formData)
    
    // }

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
    <div className="newProduct">
    <h1 className="addProductTitle">New Product</h1>
    <form className="addProductForm" onSubmit={handleSubmit}>
      <div className="addProductItem">
        <label>Picture</label>
        <input type="file" id="file"
         onChange={(e) => setFile(e.target.files[0])}
         />
         
      </div>
      <div className="addProductItem">
        <label>Title</label>
        <input type="text" placeholder="Twilight"
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="addProductItem">
        <label>Description</label>
        <input type="text" placeholder="This book  is ..." 
          onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <div className="addProductItem">
        <label>Quantity</label>
        <input type="number" placeholder="12" 
        onChange={(e) => setQuantity(e.target.value)}
         />
      </div>
     
      <button className="addProductButton" 
      type='submit'>create</button>
    </form>
  </div>
  )
}

export default NewBook