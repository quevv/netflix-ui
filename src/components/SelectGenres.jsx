import React from 'react'
import styled from 'styled-components'
import { fetchDataByGenre } from '../stores';
import { useDispatch } from 'react-redux';

const SelectGenres = ({ genres, type }) => {
    // console.log(type);
    const dispatch = useDispatch();
    return (
        <Select className='flex' onChange={e => {
            dispatch(fetchDataByGenre({ genre: e.target.value, type }))
        }}>
            {
                genres.map((genre) => {
                    return (
                        <option value={genre.id} key={genre.id}>
                            {genre.name}
                        </option>
                    )
                })
            }
        </Select>
    )
}

const Select = styled.select`
    margin-left: 5rem;
    cursor: pointer;
    font-size: 1.4rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
`;

export default SelectGenres