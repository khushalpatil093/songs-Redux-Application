import { useSelector } from 'react-redux'

const SongInfo = () => {

    const selectedSongs = useSelector(state => state)

    return (
        <div>
            <h1>song List</h1>
            {
                selectedSongs && (
                    <div>
                        <p>{selectedSongs.name}</p>
                        <p>{selectedSongs.duration}</p>
                        <p>{selectedSongs.album}</p>
                        <p>{selectedSongs.artist}</p>
                    </div>
                )
            }
        </div>
    )
}

export default SongInfo;