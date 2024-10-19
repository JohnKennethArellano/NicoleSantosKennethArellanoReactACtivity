import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import kenneth from '../images/kenneth.png'; 
import nicole from '../images/nic.png';

const developers = [
  {
    name: 'John Kenneth Arellano',
    email: 'arellano.johnkenneth.r@gmail.com',
    phone: '09519077637',
    image: kenneth, 
  },
  {
    name: 'Nicole Santos',
    email: 'santosnicolesalamat@gmail.com',
    phone: '09502542168',
    image: nicole, 
  },
];

const AboutDeveloper = () => {
  return (
    <Box sx={{ padding: '20px', borderRadius: '8px', marginTop: 5 }}>
      <Typography gutterBottom sx={{ color: '#1871cd', fontSize: "1.8rem", textAlign: 'center', fontWeight: 'bold' }}>
        Developers
      </Typography>
      <Grid container spacing={4}>
        {developers.map((developer, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                borderRadius: '12px', 
                height: '200px', 
                transition: '0.3s', 
                '&:hover': { transform: 'scale(1.02)'},
                boxShadow: 'none',
              }} 
            >
              <CardMedia
                component="img"
                sx={{ 
                  width: '150px', 
                  height: '100%', 
                  borderRadius: '12px 0 0 12px', 
                  objectFit: 'cover' 
                }} 
                image={developer.image}
                alt={`${developer.name}'s picture`}
              />
              <CardContent sx={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#001851', textAlign: 'left' }}>{developer.name}</Typography>
                <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left' }}> {developer.email}</Typography>
                <Typography variant="body1" sx={{ textAlign: 'left' }}>{developer.phone}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutDeveloper;
