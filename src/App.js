import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Container, Box, CircularProgress } from '@mui/material';
import './App.css';
import Footer from './navbar/Footer';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/message');
        setMessage(response.data.message);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My React App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Typography variant="h4" component="p">
              {message}
            </Typography>
          )}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
