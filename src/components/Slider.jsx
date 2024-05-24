import React from 'react'
import CardSlider from './CardSlider'

const Slider = ({ movies }) => {
    const getMoviesInRange = (from, to) => {
        return movies.slice(from, to);
    }
    return (
        <div>
            <CardSlider title="Trending Now" data={getMoviesInRange(0, 10)} />
            <CardSlider title="New Releases" data={getMoviesInRange(10, 20)} />
            <CardSlider title="You May Like" data={getMoviesInRange(20, 30)} />
            <CardSlider title="Trending Now" data={getMoviesInRange(30, 40)} />
            <CardSlider title="Trending Now" data={getMoviesInRange(40, 50)} />
            <CardSlider title="Trending Now" data={getMoviesInRange(50, 60)} />
        </div>
    )
}

export default Slider