import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
import './widjets.css';
function Widjest() {
    return (
        <div className="widjets">
            <div className="widjets_input">
                <SearchIcon className="widjets_searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widjets_widjetContainer">
                <h2>what's happening</h2>
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
            </div>
        </div>
    )
}

export default Widjest;
