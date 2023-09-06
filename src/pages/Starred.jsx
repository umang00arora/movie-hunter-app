import { useQuery } from "react-query";
import { useStarredShows } from "../lib/useStarredShows"
import ShowGrid from "../components/ShowGrid";

const Starred = () => {
  const [starredShowId]=useStarredShows();

  const getShowByID=async(id)=>{
    const url=`https://www.omdbapi.com/?i=${id}&apikey=414c1ee2`;
    const response= await fetch(url);
    const body= await response.json();
    //console.log(body)
    return body;
  }

  const getPromises =async(sIds)=>{
    const apiRequestPromises=sIds.map(showId=>getShowByID(showId))
   // console.log(apiRequestPromises)
    const result=await Promise.all(apiRequestPromises);
    //console.log(result)
    return result;
  }

  const{data:starredShows,error:starredShowsError}=useQuery({
    queryKey: ['starred', starredShowId],
    queryFn: ()=> getPromises(starredShowId),
    refetchOnWindowFocus: false
  })

  //console.log(starredShows)

  if(starredShows?.length===0){
    return <div>No Movie Starred</div>
  }
  if(starredShows?.length>0){
    return <ShowGrid shows={starredShows}/>
  }
  if(starredShowsError){
    return <div>Error Occured : {starredShowsError.message}</div>
  }

  return (
    <div>
      Loading Starred Movies
    </div>
  )
}

export default Starred
