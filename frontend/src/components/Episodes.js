const Episodes = (props) => {
    // debugger 
    return (
        <div>
            {props.episodes && props.episodes.map(episode => 
                <div key={episode.id}>
                    <h3>{episode.name}</h3>
                    <iframe src={episode.spotify_link} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>     
            )}     
        </div>
    )     
}
        
export default Episodes