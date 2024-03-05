const mongoose = require('mongoose');
const Movie = require('./model/movies');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/Movie-dataset')

async function performAggregations() {
    try {
        // 1. Average runtime by genre
        const averageRuntimeByGenre = await Movie.aggregate([
            {
                $group: {
                    _id: '$genres',
                    averageRuntime: { $avg: '$runtime' }
                }
            }
        ]);
        console.log('Average runtime by genre:', averageRuntimeByGenre.slice(0, 5));

        // 2. here is second Movies released after a specific date

        const filterDate = new Date('1900-01-01');
        const moviesReleasedAfter1900 = await Movie.aggregate([
            {
                $match: {
                    released: { $gte: filterDate }
                }
            }
        ]);
        console.log('Movies released after 1900:', moviesReleasedAfter1900.slice(0, 1));

        // 3. Count of movies released in the USA
        const moviesInUSA = await Movie.aggregate([
            {
                $match: {
                    country: 'USA'
                }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 }
                }
            }
        ]);
        if (moviesInUSA.length > 0) {
            console.log('Number of movies released in the USA:', moviesInUSA[0].count);
        } else {
            console.log('No movies released in the USA.');
        }

        // 4. Top 5 movies with the highest box office earnings
        const topMoviesByBoxOffice = await Movie.aggregate([
            {
                $sort: { boxOffice: -1 }
            },
            {
                $limit: 5
            }
        ]);
        console.log('Top 5 movies by box office earnings:', topMoviesByBoxOffice);

        // 5. Group movies by release year and count
        const moviesByReleaseYear = await Movie.aggregate([
            {
                $group: {
                    _id: { $year: '$released' },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        console.log('Movies count by release year:', moviesByReleaseYear);

        // 6. Total box office earnings for each genre
        const totalBoxOfficeByGenre = await Movie.aggregate([
            {
                $group: {
                    _id: '$genres',
                    totalBoxOffice: { $sum: '$boxOffice' }
                }
            }
        ]);
        console.log('Total box office earnings by genre:', totalBoxOfficeByGenre.slice(0, 5));

        // 7. Average rating for movies with a specific genre
        const averageRatingByGenre = await Movie.aggregate([
            {
                $match: {
                    genres: 'Action'
                }
            },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: '$rating' }
                }
            }
        ]);
        console.log('Average rating for Action movies:', averageRatingByGenre);

        // 8. Movies with the highest ratings
        const topRatedMovies = await Movie.aggregate([
            {
                $sort: { rating: -1 }
            },
            {
                $limit: 5
            }
        ]);
        console.log('Top 5 movies by rating:', topRatedMovies);

        // 9. Group movies by decade and count
        const moviesByDecade = await Movie.aggregate([
            {
                $group: {
                    _id: { $subtract: [{ $year: '$released' }, { $mod: [{ $year: '$released' }, 10] }] },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        console.log('Movies count by decade:', moviesByDecade);

        // 10. Total number of movies
        const totalNumberOfMovies = await Movie.aggregate([
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 }
                }
            }
        ]);
        console.log('Total number of movies:', totalNumberOfMovies[0].count);

        // 11. Movies with a specific actor
        const moviesWithActor = await Movie.aggregate([
            {
                $match: {
                    cast: 'Tom Hanks'
                }
            }
        ]);
        console.log('Movies with Tom Hanks:', moviesWithActor.slice(0, 5));

        // 12. Group movies by language and count
        const moviesByLanguage = await Movie.aggregate([
            {
                $group: {
                    _id: '$language',
                    count: { $sum: 1 }
                }
            }
        ]);
        console.log('Movies count by language:', moviesByLanguage);

        // 13. Total box office earnings for movies released in the last 5 years
        const totalBoxOfficeLast5Years = await Movie.aggregate([
            {
                $match: {
                    released: { $gte: new Date().setFullYear(new Date().getFullYear() - 5) }
                }
            },
            {
                $group: {
                    _id: null,
                    totalBoxOffice: { $sum: '$boxOffice' }
                }
            }
        ]);
        console.log('Total box office earnings for movies released in the last 5 years:', totalBoxOfficeLast5Years);

        // 14. Average runtime for movies with a specific director
        const averageRuntimeByDirector = await Movie.aggregate([
            {
                $match: {
                    director: 'Christopher Nolan'
                }
            },
            {
                $group: {
                    _id: null,
                    averageRuntime: { $avg: '$runtime' }
                }
            }
        ]);
        console.log('Average runtime for Christopher Nolan movies:', averageRuntimeByDirector);

        // 15. Movies released in the last 10 years with a rating above 8
        const highRatedMoviesLast10Years = await Movie.aggregate([
            {
                $match: {
                    released: { $gte: new Date().setFullYear(new Date().getFullYear() - 10) },
                    rating: { $gt: 8 }
                }
            }
        ]);
        console.log('High-rated movies released in the last 10 years:', highRatedMoviesLast10Years.slice(0, 5));

        // 16. Movies involving Charles Chaplin (as actor or director)
        const moviesWithCharlesChaplin = await Movie.aggregate([
            {
                $match: {
                    $or: [
                        { cast: 'Charles Chaplin' }
                    ]
                }
            }
        ]);
        console.log('Movies involving Charles Chaplin:', moviesWithCharlesChaplin.slice(0, 1));

    } catch (error) {
        console.error('Error performing aggregation:', error);
    } finally {
        // Close the connection when done
        mongoose.connection.close();
    }
}

// Call the function to perform aggregations
performAggregations();
