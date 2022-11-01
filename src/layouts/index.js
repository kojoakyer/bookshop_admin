import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material

import { Box } from '@mui/system';
import DashboardNavbar from './dashboard/DashboardNavbar';

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  

  return (
    <Box sx={{display:'flex', minHeight:'100%',overflow:'hidden'}}>
      <DashboardNavbar/>
      <Box sx={{width:'100%', paddingRight:'50px'}}>
        <Outlet />
      </Box>
    </Box>
  );
}
