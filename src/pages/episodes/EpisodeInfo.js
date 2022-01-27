import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {EpisodeHeroes} from "./EpisodeHeroes";
import {episodeService} from "../../services/episode.service";

export const EpisodeInfo = () => {
    const {state} = useLocation()
    const {id} = useParams()
    const [episodeState, setEpisodeState] = useState(state)

    const [charactersInfo, setCharactersInfo] = useState([])

    useEffect(() => {
        if (!episodeState) {
            return episodeService.episode(id).then(episode => setEpisodeState(episode)).catch(() => setEpisodeState({name: 'Episode Not Found'}))
        }
        const characters = episodeState.characters;
        if (characters) {
            let ids = characters.map(one => one.slice(42)).join()
            episodeService.episodeCharacters(ids).then(value => setCharactersInfo(value))
        }
    }, [episodeState, id])

    return episodeState && (
        <>
            <div className="episodesInfo">
                <div className="currentEpisode">
                    <div><h1>{episodeState.name}</h1></div>
                    <div>Episode: {episodeState.episode}</div>
                    <div>Air date: {episodeState.air_date}</div>
                </div>
            </div>
            <div className="characters">
                {charactersInfo.map(character => <EpisodeHeroes key={character.id} character={character}/>)}
            </div>

        </>
    );
};
