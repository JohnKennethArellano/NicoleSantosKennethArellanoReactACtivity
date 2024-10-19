
import React from 'react';
import { TextField, Button, Select, MenuItem, Box } from '@mui/material';

const SearchComponent = ({ searchTerm, setSearchTerm, year, setYear, plot, setPlot, handleSearch }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <TextField
        fullWidth
        label="Movie Title"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ backgroundColor: '#ffffff', borderRadius: 1, mr: 2 }} 
      />
      <TextField
        fullWidth
        label="Year"
        variant="outlined"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        sx={{ backgroundColor: '#ffffff', borderRadius: 1, mr: 2 }} 
      />
      <Select
        value={plot}
        onChange={(e) => setPlot(e.target.value)}
        displayEmpty
        sx={{ backgroundColor: '#ffffff', borderRadius: 1, mr: 2 }} 
      >
        <MenuItem value="short">Short Plot</MenuItem>
        <MenuItem value="full">Full Plot</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={handleSearch}  sx={{ padding: "1rem 2rem"}}>
        Search
      </Button>
    </Box>
  );
};

export default SearchComponent;
