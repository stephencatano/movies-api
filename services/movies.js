const MongoLib = require('../lib/mongo')

class movieService {
    constructor() {
        this.collection = 'movies'
        this.mongDB = new MongoLib()
    }

    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags} }
        const movies = await this.mongDB.getAll(this.collection, query)
        return movies || []
    }

    async getMovie({ movieId }) {
        const movie = await this.mongDB.get(this.collection, movieId)
        return movie || {}
    }

    async createdMovie({ movie }) {
        const createdMovieId = this.mongDB.create(this.collection, movie)
        return createdMovieId
    }

    async updatedMovie({ movieId, movie } = {}) {
        const updatedMovieId = await this.mongDB.update(this.collection, movieId, movie)
        return updatedMovieId
    }

    async deletedMovie() {
        const deletedMovieId = await this.mongDB.delete(this.collection, movieId)
        return deletedMovieId
    }

    // async patchedMovie() {
    //     const patchedMovieId = await this.mongDB.patch(this.collection, movieId, movie)
    //     return patchedMovieId
    // }
}

module.exports = movieService