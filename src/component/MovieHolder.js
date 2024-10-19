
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, CardMedia, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const MovieHolder = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <MovieCard movie={movie} onReadMore={handleOpenModal} />

  
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="md">
        <DialogTitle>{movie.Title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="300"
            image={movie.Poster !== "N/A" ? movie.Poster : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"}
            alt={movie.Title}
          />
          <Typography variant="body2" color="text.secondary" mt={2}>
            <strong>Year:</strong> {movie.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Rated:</strong> {movie.Rated}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Runtime:</strong> {movie.Runtime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Genre:</strong> {movie.Genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Director:</strong> {movie.Director}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Actors:</strong> {movie.Actors}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Language:</strong> {movie.Language}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Plot:</strong> {movie.Plot}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MovieHolder;
