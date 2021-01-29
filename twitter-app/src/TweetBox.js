import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import './tweetBox.css';
import db from './firebase';
function TweetBox() {
    const [tweetmessage, setTweetmessage] = useState("");
    const [tweetimage, setTweetimage] = useState("");
    const sendTweet = e => {

        db.collection("posts").add({
            displayName: "someone",
            username: "sdsdsd",
            verified: true,
            text: tweetmessage,
            image: tweetimage,
            avatar: "https://lh3.googleusercontent.com/XejZgR3wP1KTrB0824Ah7OMjGMPjyTMSN0zbzw-m4NJ5jvHlwyh5p13AUyrp5qDy26qscAJh8ep8RNF4F2Kqkw=s544"
        });
        setTweetmessage("");
        setTweetimage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://lh3.googleusercontent.com/XejZgR3wP1KTrB0824Ah7OMjGMPjyTMSN0zbzw-m4NJ5jvHlwyh5p13AUyrp5qDy26qscAJh8ep8RNF4F2Kqkw=s544"></Avatar>
                    <input onChange={(e) => setTweetmessage(e.target.value)} value={tweetmessage} placeholder="what's happening?" type="text" />
                </div>
                <input onChange={(e) => setTweetimage(e.target.value)} value={tweetimage}
                    className="tweetBox_imageInput" type="text" placeholder="optional: Enter image URL" />
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
