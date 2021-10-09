import React, { useState, useEffect } from 'react'
import youtube from '../supports/youtube'

export default function Stats(props) {

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async (videoID) => {
            try {
                const response = await youtube.get("/videos", { params: {id: videoID} });
                console.log(response.data);
                setData(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData(props.videoID)
    }, [props.videoID])

    




    return (
        <div className="stats"> 
            <h1>Statistics</h1>
            {
                data["items"] !== undefined && data.items.map((item, index) => (
                    <p key={index}>
                        <span>Title:</span> {item.snippet.title} <br/>
                        <span>Published at:</span> {item.snippet.publishedAt} <br/>
                        <span>Channel title:</span> {item.snippet.channelTitle} <br/>
                        <span>Duration:</span> {item.contentDetails.duration} <br/>
                        <span>View count:</span> {item.statistics.viewCount} <br/>
                        <span>Like count:</span> {item.statistics.likeCount} <br/>
                        <span>Comment count:</span> {item.statistics.commentCount} <br/>
                        <span>Dislike count:</span> {item.statistics.dislikeCount} <br/>
                        <span>Favorite count:</span> {item.statistics.favoriteCount} <br/>
                        <span>Tags:</span> {
                            item.snippet['tags'] !== undefined && item.snippet.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))
                        }
                        <a href={`https://www.youtube.com/watch?v=${props.videoID}`} target="_blank" rel="noreferrer">Click here to watch the video</a>
                    </p>
                ))
            }
        </div>
    )
}
