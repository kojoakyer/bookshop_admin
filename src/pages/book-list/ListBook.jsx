import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import { useQuery } from '@tanstack/react-query';
import { Container ,Button} from '@mui/material';
import { useSelector } from 'react-redux';
import UserMoreMenu from '../../components/UserMoreMenu';


export default function ListBook() {

  // const [books , setBooks] = React.useState([])
  const [tableData, setTableData] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:5000/book")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])
   console.log(tableData,'gid')


   const token = useSelector(state => state.user.currentUser.token)


  // React.useEffect(()=>{

  //     const getBook =  async ()=>{
  //       try{
            
  //           const res = await axios.get(`http://localhost:5000/book`)

  //           console.log(res.data,'-books data-');
            
  //           setBooks(res.data)

  //       }catch(err){
  //           console.log(err);
            
  //       }
            
  //       }
  //       getBook()
    
  // },[])

  // const fetchPost = async () => {
  //   const res = await axios.get("http://localhost:5000/book")
  //   console.log(res.data,'qdata2');
    
  //   return res.data
  // };

  // const { data, status, error } = useQuery(["getbook"], fetchPost);
  // console.log(data,'qdata');
  

  // if (status === "loading") {
  //   return(
  //     <Box sx={{ width: '100%' }}>
  //     <LinearProgress />
  //   </Box>
  //   );
  // }
  // if (status === "error") {
  //   return <div>
  //     <h1>error</h1>
  //   </div>;
  // }  

  // async function handleDelete(id){
  //   // setIsLoading(true)
  //    await axios.delete(`http://localhost:5000/book/${id}`,
  //   {
  //     headers: ({
  //         Authorization: `Bearer ${token}`
  //     })
  //   }
  //   )


  // } 

  return (
    <Box sx={{marginTop:'150px', width: '100%' }}>
      <Box sx={{dispaly:'flex',justifyContent:'flex-end',margin:'10px 0px 30px 0px'}}>
       <Link to="/dashboard/addbook">
          <button className="userAddButton">Add Book</button>
        </Link>
      </Box>
      
      <TableContainer component={Paper} sx={{padding:'0px 0px 50px 0px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell>ID</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Picture</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Actions</TableCell>

     
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.picture}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left" >
                <Box sx={{dispaly:'flex',alignItems:'center',justifyContent:'center'}}>
                <Link to={`/dashboard/editbook/${row._id}`}>
                   <Button variant='contained' size='small' sx={{width:'5px'}} className="userListEdit">Edit</Button>
                </Link>
                <UserMoreMenu row={row}/>
                </Box>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}