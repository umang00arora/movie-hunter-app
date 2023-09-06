import { Link, useParams } from "react-router-dom"
import styled from 'styled-components'
import { TextCenter } from "./common/TextCenter";
import {
    useQuery
  } from 'react-query'
import ShowMainData from "./ShowMainData";
import ShowDetails from "./ShowDetails";
import Cast from "./Cast";
const Show = () => {
  const {showId}=useParams();
  const getShow=async(id)=>{
    const url=`https://www.omdbapi.com/?i=${id}&apikey=414c1ee2`;
    const response= await fetch(url);
    const body= await response.json();
    console.log(body)
    return body;
  }
  const {data: showData, error: showError}= useQuery({queryKey: ['show', showId], queryFn: ()=>getShow(showId)})
  if(showError){
    return <TextCenter>We have error</TextCenter>
  }
  if(showData){
    return <ShowPageWrapper>
      <BackHomeWrapper>
      <Link to='/'>GO to Home Page</Link>
      </BackHomeWrapper>
      <ShowMainData Title={showData.Title} image={showData.Poster} Rated={showData.Rated} Plot={showData.Plot} genre={showData.Genre} rating={showData.imdbRating}/>
      <InfoBlock>
      <h2>Details</h2>
      <ShowDetails released={showData.Released} runtime={showData.Runtime} director={showData.Director} writer={showData.Writer} awards={showData.Awards} boxOffice={showData.BoxOffice}/>
      <div>
        <Cast  actors={showData.Actors}/>
      </div>
      </InfoBlock>
    </ShowPageWrapper>

  }
  return (
    <TextCenter>
      Loading Movie Details
    </TextCenter>
  )
}

export default Show


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
