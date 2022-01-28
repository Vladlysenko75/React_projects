import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import {Episode} from "./Episode";
import './Episodes.css'

export const Episodes = () => {
    let {pageNumber} = useParams();
    const [episodes, setEpisodes] = useState([])
    const [pages, setPages] = useState(1)

    function episodesJSON(episode) {
        setEpisodes(episode.results)
        setPages(episode.info.pages)
    }

    function getPage(current, i) {
        let next = +current + i;
        if (next > pages) {
            return 1
        }
        if (next < 1) {
            return pages
        }
        return next
    }

    useEffect(() => {
        episodeService.episodesPage(pageNumber).then(value => episodesJSON(value))
    }, [pageNumber])

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
