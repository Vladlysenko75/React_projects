import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import {useParams, Link} from "react-router-dom";

import {Episode} from "./Episode";
import './Episodes.css'

export const Episodes = () => {
    let {pageNumber} = useParams();
    const [episodes, setEpisodes] = useState([])

    function getPage(current, i) {
        let next = +current + i;
        if (next > 3) {
            return 1
        }
        if (next < 1) {
            return 3
        }
        return next
    }

    useEffect(() => {
        episodeService.episodesPage(pageNumber).then(value => setEpisodes(value.results))
    }, [pageNumber])

    console.log(episodes)

    return (
        <div className={'episodesFlex'}>
            <div className="episodesInfo">
                <h1>Rick and Morty episodes!</h1>
            </div>
            <div className="episodes">
                {episodes.map(oneEpisode => <Episode key={oneEpisode.id} oneEpisode={oneEpisode}/>)}
            </div>
            <div className="navigation">
                <button>
                    <Link to={`/page/${getPage(pageNumber, 1).toString()}`}>Forward</Link>
                </button>
                <button>
                    <Link to={`/page/${getPage(pageNumber, -1).toString()}`}>Backward</Link>
                </button>
            </div>
        </div>
    );
};
