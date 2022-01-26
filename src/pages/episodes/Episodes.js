import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";

export const Episodes = () => {
    let [episodes, setEpisodes] = useState([])

    useEffect( () => {
        console.log(episodeService.episodesPage(1));
    },[])

    return (
        <div>
            fdgfdf
            <div>
                rabotai
            </div>
        </div>
    );
};
