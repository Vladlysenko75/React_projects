import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";

export const Episodes = () => {
    let [episodes, setEpisodes] = useState([])

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
