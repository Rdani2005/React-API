import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Movies = () => {

    let [movies, setMovies] = useState([])

    const getData = async () => {
        const res = await axios.get('http://www.omdbapi.com/?s=marvel&apikey=a4d509b1')
        console.log(res.data.Search)
        setMovies(res.data.Search)
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <main className="min-vh-100 text-center">
            <h1 className="display-1 my-5">
                Marvel Movies and Series
            </h1>
            <section className="container">
                <div className="row">
                    {
                        movies.map((movie, index) => {
                            return (

                                <div className="col-lg-4 mb-4" key={index}>
                                    <div className="text-center card glass text-white" >
                                        <img src={movie.Poster} alt="Poster" className="card-img-top poster mx-auto my-3" />
                                        <h5 className="card-title">{movie.Title}</h5>
                                        <p className="card-text mb-4">
                                            Released: {movie.Year}<br />
                                        </p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </section>
        </main>
    )
}

export default Movies