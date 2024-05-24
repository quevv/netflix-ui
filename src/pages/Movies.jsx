import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../stores';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenres from '../components/SelectGenres';

const Movies = () => {
    const navigate = useNavigate();
    const genres = useSelector((state) => state.netflix.genres)
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies)
    const dispatch = useDispatch();
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch])

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({ type: 'movies' }));
    }, [])

    // Check scroll down for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY === 0 ? false : true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectGenres genres={genres} type={'movie'} />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
            </div>
        </Container>
    )
}

const Container = styled.div`
    .data {
        margin-top: 8rem;
        .no-available {
            text-align: center;
            color: white;
            margin-top: 4rem;
        }
    }
`;


export default Movies