/* eslint-disable */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel,Box,Button } from '@mui/material';

// component

// ----------------------------------------------------------------------

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const {isFetching} = useSelector(state => state.user)



  function handleClick(e){
    e.preventDefault()
    login(dispatch,{email,password})
    navigate('/dashboard/books', { replace: true });
    
}


  return (
      <Box component="form" sx={{marginTop:'100px',padding:'10px 100px'}} >
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <Button variant="contained"  onClick={handleClick}>
          Login
        </Button>
      </Box>
  );
}
