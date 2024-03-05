const mongoose = require('mongoose');
const Movie = require('./model/movies');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Movie-dataset')
async function performAggregations() {
    try {
        const averageRuntimeByGenre = await Movie.aggregate([
            {
                $group: {
                    _id: '$genres',
                    averageRuntime: { $avg: '$runtime' }
                }
            }
        ]);
        console.log('Average runtime by genre:', averageRuntimeByGenre.slice(0, 5));

        const filterDate = new Date('1900-01-01');
        const moviesReleasedAfter1900 = await Movie.aggregate([
            {
                $match: {
                    released: { $gte: filterDate }
                }
            }
        ]);

        console.log('Movies released after 1900:', moviesReleasedAfter1900.slice(0, 1));
    } catch (error) {
        console.error('Error performing aggregation:', error);
    } finally {
        // Close the connection when done
        mongoose.connection.close();
    }
}


// Call the function to perform aggregations
performAggregations();
