import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {EpisodeHeroes} from "./EpisodeHeroes";
import {episodeService} from "../../services/episode.service";

export const EpisodeInfo = () => {
    const {state} = useLocation()
    const [charactersInfo, setCharactersInfo] = useState([])
    const {name, episode, air_date} = state;
    console.log(state)

    let arr = []
    const characters = state.characters;
    characters.map(one => arr.push(one.slice(42)))
    let charactersList = arr.join()
    console.log(charactersList)

    useEffect(() => {
        if (state) {
            episodeService.episodeCharacters(charactersList).then(value => setCharactersInfo(value))
            return
        }
        console.log('fff')
    }, [charactersList, state])


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
            <div className="characters">
                {charactersInfo.map(character => <EpisodeHeroes key={character.id} character={character}/>)}
            </div>

        </>
    );
};
