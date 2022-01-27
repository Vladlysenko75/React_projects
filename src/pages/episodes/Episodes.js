import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import {useParams, Link} from "react-router-dom";

import {Episode} from "./Episode";
import './Episodes.css'

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    let [currentPage, setPage] = useState(2)
    let {pageNumber} = useParams();

    console.log('page number', pageNumber)
    const counterPlus = (page) => {
        setPage(page + 1)
        if (page >= 3) {
            setPage(1)
        }
    }

    const counterMinus = (page) => {
        setPage(page - 1)
        if (page <= 1) {
            setPage(3)
        }
    }
    console.log(currentPage)
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
                <button onClick={() => counterPlus(currentPage)}>
                    <Link to={`/page/${currentPage.toString()}`}>Forward</Link>
                </button>
                <button onClick={() => counterMinus(pageNumber)}>
                    <Link to={`/page/${currentPage.toString()}`}>Backward</Link>
                </button>
            </div>
        </div>
    );
};
