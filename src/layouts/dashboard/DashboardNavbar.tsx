import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const drawerWidth = 200;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DashboardNavbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{height:'100%',backgroundColor:'#f5f5f5'}}>
      <Toolbar />
      <Divider />
      <List>
         
         <ListItem disablePadding sx={{backgroundColor:'#bdbdbd',color:'black',marginTop:'5px'}}>
           <ListItemButton component="a" href="/dashboard/books">
              <ListItemIcon>
                <LibraryBooksIcon sx={{color:'black', fontSize:'20px'}}/>
              </ListItemIcon>
             <ListItemText primary="Books" />
           </ListItemButton>
         </ListItem>
         <ListItem disablePadding sx={{backgroundColor:'#bdbdbd',color:'black',marginTop:'5px'}}>
           <ListItemButton component="a" href="/dashboard/payment">
              <ListItemIcon>
                <AddShoppingCartIcon sx={{color:'black', fontSize:'20px'}}/>
              </ListItemIcon>
             <ListItemText primary="Orders" />
           </ListItemButton>
         </ListItem>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:'#9e9e9e'}} 
      >
        <Toolbar sx={{display:'flex' , justifyContent:'space-between'}}>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          <Box sx={{display:'flex', alignItems:'flex-end'}} >
            <Typography variant="h5" sx={{fontSize:'18px',color:'black',fontWeight:'bold'}} noWrap component="div">
                BookShop Dashboard
            </Typography>
          </Box>
          </Box>
          <Box sx={{display:'flex'}}>
            <Box>
                <Typography sx={{fontSize:'13px',color:'black',fontWeight:'bold'}}>Admin</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } ,backgroundColor:'gray'}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor:'gray'
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor:'gray'
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
      </Box>
    </Box>
  );
}
