const { moviesMock } = require('../utils/mocks/movies')

class movieService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock)
        return movies || []
    }

    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0])
        return movie || {}
    }

    async createdMovie() {
        const createdMovieId = await Promise.resolve(moviesMock[0].id)
        return createdMovieId
    }

    async updatedMovie() {
        const updatedMovieId = await Promise.resolve(moviesMock[0].id)
        return updatedMovieId
    }

    async deletedMovie() {
        const deletedMovieId = await Promise.resolve(moviesMock[0].id)
        return deletedMovieId
    }

    async patchedMovie() {
        const patchedMovieId = await Promise.resolve(moviesMock[0].id)
        return patchedMovieId
    }
}

module.exports = movieService