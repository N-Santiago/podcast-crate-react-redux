import React from 'react'

export default function PodcastListItem({ podcast }) {
    return (
        <div>
            {podcast.title}<br />
            <img src={podcast.image} /> <br />
            {podcast.website}
        </div>
    );
}