import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {EpisodeHeroes} from "./EpisodeHeroes";

export const EpisodeInfo = () => {
    const {state} = useLocation()
    const [charactersInfo, setCharactersInfo] = useState([])
    const {name, episode, air_date} = state;
    console.log(state)
    const characters = state.characters;

    let arr = []
    characters.map(one => arr.push(one.slice(42)))
    let charactersList = arr.join()
    console.log(charactersList)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${charactersList}`)
            .then(value => value.json())
            .then(character => setCharactersInfo(character))
    }, [charactersList])
    console.log('here', charactersInfo);
    return (
        <>
            <div className="episodesInfo">
                <div className="currentEpisode">
                    <div><h1>{name}</h1></div>
                    <div>Episode: {episode}</div>
                    <div>Air date: {air_date}</div>
                </div>
            </div>
            {charactersInfo.map(character => <EpisodeHeroes key={character.id} character={character}/>)}
        </>
    );
};
