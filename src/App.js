import React, { useState } from 'react';
import { Container, Typography, Button, Dialog, DialogActions, DialogContent, Grid, DialogTitle } from '@mui/material';
import MovieHolder from './component/MovieHolder';
import SearchComponent from './component/SearchComponent';
import Loader from './component/Loader';
import ErrorMessage from './component/ErrorMessage';
import { fetchMoviesByTitle, fetchMovieDetails } from './API/GetAxios';
import AboutDeveloper from './component/AboutDeveloper';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [year, setYear] = useState('');
  const [plot, setPlot] = useState('short');
  const [openModal, setOpenModal] = useState(false);

  const fetchMovies = async (term, year, plot) => {
    try {
      setLoading(true);
      const data = await fetchMoviesByTitle(term, year);

      if (data.Response === "True") {
        const moviesWithPlots = await Promise.all(
          data.Search.map(async (movie) => {
            return await fetchMovieDetails(movie.imdbID, plot);
          })
        );
        setMovies(moviesWithPlots);
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchTerm && year) {
      setOpenModal(true); 
    } else {
      fetchMovies(searchTerm, year, plot);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false); 
  };

  return (
    <Container>
    <Typography 
  variant="h3" 
  gutterBottom 
  align="center" 
  sx={{ 
    color: '#1870cc', 
    fontWeight: 'bold', 
    marginBottom: '30px',
    textTransform: 'uppercase',
    marginTop:'40px' 
  }}
>
  Movie Voyage
</Typography>

      <SearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        year={year}
        setYear={setYear}
        plot={plot}
        setPlot={setPlot}
        handleSearch={handleSearch}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={6} key={movie.imdbID}>
            <MovieHolder movie={movie} />
          </Grid>
        ))}
      </Grid>

   
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <Typography variant="body1">The movie title is required when searching by year.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <AboutDeveloper />
    </Container>
    
  );
}
