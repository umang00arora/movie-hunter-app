import { useStarredShows } from "../lib/useStarredShows";
import ShowCard from "./ShowCard"
import { FlexGrid } from './common/FlexGrid'
import NotFoundImg from '../lib/notFound.png'


const ShowGrid = ({shows}) => {
  //const[pageNo,setPageNo]=useState(1);
  const [starredShow,dispatchStarred]=useStarredShows()
  const onStarMeClick =showID =>{
    const isStarred=starredShow.includes(showID);
    if(isStarred){
      dispatchStarred({ type: 'UNSTAR' , showID})
    }else{
      dispatchStarred({type: 'STAR' , showID})
    }
  }

  return (
    <FlexGrid>
      {shows.map((val)=>(<ShowCard key={val.imdbID} name={val.Title} image={val.Poster?val.Poster:NotFoundImg} id={val.imdbID} year={val.Year} onStarMeClick={onStarMeClick} isStarred={starredShow.includes(val.imdbID)}/>))}
    </FlexGrid>
  )
}

export default ShowGrid
