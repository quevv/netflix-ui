import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsersLikedMovies } from '../stores';
import styled from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export const MyList = () => {
    const movies = useSelector((state) => state.netflix.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [email, setEmail] = useState(undefined);

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate('/login');
    });

    useEffect(() => {
        if (email) {
            dispatch(getUsersLikedMovies(email));
        }
    }, [email])
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
            <Navbar isScrolled={isScrolled} />
            <div className="content flex column">
                <h1>My list</h1>
                <div className="grid flex">
                    {movies?.map((movie, index) => {
                        return <Card movieData={movie} key={movie.id} isliked={true} />
                    })}
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
        margin-left: 3rem;
    }
    .grid {
        flex-wrap: wrap;
        gap: 1rem;
    }
`;