import React from "react";


const MoviesList = (props) => {
    console.log(props);



    const renderMovies = (movies) => (
        movies ? 
        movies.map((item,i) => (
            <div key ={i}> {item.id}. {item.name}</div>
        )):
        null
    )


    return (
        <div>
            {renderMovies(props.data.movies)}
        </div>
    );
}

export default MoviesList;