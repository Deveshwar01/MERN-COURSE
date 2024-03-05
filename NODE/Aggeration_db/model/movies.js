const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  genres: {
    type: [String],
    required: true
  },
  runtime: {
    type: Number,
    required: true
  },
  cast: [
    {
      type: String,
      required: true
    }
    // Add more fields if needed
  ],
  num_mflix_comments: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  fullplot: {
    type: String,
    required: true
  },
  countries: {
    type: [String],
    required: true
  },
  released: {
    type: Date,
    required: true
  },
  directors: [
    {
      type: String,
      required: true
    }
    // Add more fields if needed
  ],
  rated: {
    type: String,
    required: true
  },
  awards: {
    lastupdated: {
      type: Date,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
    // Add more fields if needed
  },
  imdb: {
    type: {
      type: String,
      required: true
    }
    // Add more fields if needed
  },
  tomatoes: {
    // Add fields specific to the 'tomatoes' object
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
