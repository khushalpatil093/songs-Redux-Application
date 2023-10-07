import { selectedsongs } from "../redux/actions/songsAction";
import songData from '../Data/songsData'
import { useDispatch} from 'react-redux';

const DisplaySongs = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <h1>List of Songs</h1>
            {
                songData.map((song, index) => (
                    <h3 onClick={() => dispatch(selectedsongs(song))} 
                    key={song.id}>{song.name}</h3>
                ))
            }
        </div>
    )
}

export default DisplaySongs;