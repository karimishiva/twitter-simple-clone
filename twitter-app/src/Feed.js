import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import './feed.css';
import Image from './pexels-bianca-gonçalves-1752804.jpg';
import db from './firebase';
function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot =>
            setPosts(snapshot.docs.map(doc => doc.data())
            ))
    }, []);
    return (
        <div className="feed">
            {/* header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/* tweetBox */}
            <TweetBox />
            {/* post */}

            {posts.map(post => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar} />
            ))}
        </div>
    )
}

export default Feed;
