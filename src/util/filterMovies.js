const filterMovie = (movies, input) => {
    if (!input) return movies;

    return movies.filter((movie) =>
        movie.Title.toLowerCase().includes(input.toLowerCase())
    );
};

export default filterMovie;