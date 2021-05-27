import React from 'react'

export default function PodcastListItem({ podcast }) {
    return (
        <div>
            {podcast.title}
            <iframe src={podcast.episode.spotify_link} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    );
}