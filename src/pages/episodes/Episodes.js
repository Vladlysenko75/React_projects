import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import {useParams} from "react-router-dom";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    let params = useParams();
    console.log(params)

    useEffect( () => {
        episodeService.episodesPage(1).then(value => setEpisodes(value))
    },[])
    console.log(episodes)
    return (
        <div>
            fdgfdf
            <div>
                rabotai
            </div>
        </div>
    );
};
