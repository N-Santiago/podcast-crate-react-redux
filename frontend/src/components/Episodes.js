const Episodes = (props) => {
        
    return (
        <div>
            {props.episodes.map(episode => 
                <div key={episode.id}>
                    <iframe src={episode.spotify_link} width="800" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div> 
            )}
        </div>
    )
}
        
export default Episodes