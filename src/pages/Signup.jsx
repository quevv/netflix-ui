import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    })

    const handleSignIn = async () => {
        try {
            const { email, password } = formValue;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch (err) {
            console.log(err);
        };
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return <Container>
        <BackgroundImage />

        <div className="content">
            <Header login />
            <div className='body flex column a-center j-center'>
                <div className="text flex column">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h6>
                        Ready to watch? Enter your email to create or restart membership
                    </h6>
                </div>
                <div className="form">
                    <input
                        type='email'
                        value={formValue.email}
                        onChange={(e) =>
                            setFormValue({
                                ...formValue,
                                [e.target.name]: e.target.value,
                            })
                        }
                        placeholder='Email' name='email' />
                    {showPassword &&
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={formValue.password}
                            onChange={(e) =>
                                setFormValue({
                                    ...formValue,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    }
                    {!showPassword && <button onClick={() => setShowPassword(true)}>Get Started</button>}
                </div>
                <button onClick={handleSignIn}>Sign Up</button>
            </div>
        </div>
    </Container>

}

const Container = styled.div`
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        backgound-color: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        gid-template-rows: 15vh 85vh;
    }
    .body {
        gap: 1rem;
        
        .text{
            text-align: center;
            font-size: 2rem;
            h1 {
                padding: 0 25rem;
            }
        }

        .form {
            display: grid;
            grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
            width: 60%;
            input {
                color: black;
                border: 1px solid black;
                padding: 1.5rem;
                font-size: 1.2rem;
                &:focus {
                    outline: none;
                }
            }
            button {
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
            }
        }
        
        button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
        }

    }
`;