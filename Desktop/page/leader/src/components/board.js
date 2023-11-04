import React, { useState, useEffect } from 'react'; // Import useEffect here
import Profiles from './profiles';
import { Leaderboard } from './database';
import Loading from './Loading'; // Make sure this component exists and is exported properly

export default function Board() {
    const [period, setPeriod] = useState(7);
    const [isLoading, setIsLoading] = useState(true); // You can use this to control the display of the loader

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const handleClick = (e) => {
    const selectedPeriod = parseInt(e.target.dataset.id, 10);
    console.log(`Period selected: ${selectedPeriod} days`);
    setPeriod(selectedPeriod);
};

    return (
        <div className="board">


            <h1 className='leaderboard'>Leaderboard of the Week</h1>
            <div className="duration">
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='0'>All-Time</button>

                {/* <button onClick={handleClick} data-id='30'>30 Days</button> */}
            </div>
            {isLoading ? (
            <div className="loader-container loader-background">
                <Loading type="spin" color="skyblue" />
                <Loading type="spinningBubbles" color="blue" />
            </div>
            ) : (
            <Profiles Leaderboard={between(Leaderboard, period)} />
            )}
        </div> // This closing tag was moved down to encompass the conditional rendering
    );
}


function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}
