/* eslint-disable */

import React, { useRef, useState } from 'react';


import {  useSelector } from 'react-redux';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText,Box } from '@mui/material';



// component
import Iconify from './Iconify';

// ----------------------------------------------------------------------

export default function UserMoreMenu({row}) {


  const token = useSelector(state => state.user.currentUser.token)


  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleDelete(e){
    e.preventDefault()
     await axios.delete(`http://localhost:5000/book/${row._id}`,
    {
      headers: ({
          Authorization: `Bearer ${token}`
      })
    }
    )

  } 


  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick={handleDelete}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>

          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }}/>
        </MenuItem>
      </Menu>
    </>
  );
}
