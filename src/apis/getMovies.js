import axios from "axios";

const getMovies = async (value) => {
    const search = value || 'indian'
    try {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&page=1`)
        if (res.status !== 200) {
            throw new Error(res.statusText)
        }

        return res.data.Search

    } catch (error) {
        console.log(error);

    }

}

export default getMovies;