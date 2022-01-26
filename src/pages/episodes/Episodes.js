import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import {useParams} from "react-router-dom";
import {Episode} from "./Episode";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    let {pageNumber} = useParams();
    console.log(pageNumber)

    useEffect( () => {
        episodeService.episodesPage(pageNumber).then(value => setEpisodes(value.results))
    },[pageNumber])
    console.log(episodes)
    return (
        <div>
            {episodes.map(oneEpisode => <Episode key={oneEpisode.id} oneEpisode={oneEpisode}/>)}
        </div>
    );
};
