import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary" style={{ marginTop: 'auto', top: 'auto', bottom: 0 }}>
      <Container maxWidth="md">
        <Toolbar>
          <Box width="100%" display="flex" justifyContent="center">
            <Typography variant="body1" color="inherit">
              &copy; {new Date().getFullYear()} My React App
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
