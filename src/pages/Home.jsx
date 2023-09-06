import { useState } from "react"
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/ShowGrid";
import styled , {css} from 'styled-components'

const Button =styled.button`
color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  

  ${props =>
    props.primary==='primary' &&
    css`
    cursor: not-allowed;
    opacity: 0.0;
    `};

  `;
  const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  margin-top: 20px;
  `;




const Home = () => {
  
  const[apiData,setApiData]=useState([]);
  const[page,SetPage]=useState(1);
  const[searchText,setSearchText]=useState("");
  //const[s,setS]=useState("")
  
  const onSearch=async (searchString)=>{
    const url=`https://www.omdbapi.com/?s=${searchString}&apikey=414c1ee2&page=1`;
    const response= await fetch(url);
    const body= await response.json();
    setSearchText(searchString)
    setApiData(body.Search);
  }
  const handleNextClick=async()=>{
    const url=`https://www.omdbapi.com/?s=${searchText}&apikey=414c1ee2&page=${page+1}`;
    const response= await fetch(url);
    const body= await response.json();
    SetPage(page+1);
    setApiData(body.Search);
  }

  const renderAPIdata=()=>{
    if(apiData){
      return(
        <>
        <ShowGrid shows={apiData}/>
        </>
      ) 
    }
    return "No entry Found";
  }
  return (
    <div>
      <SearchForm onSearch={onSearch}/>
      <div>
        {renderAPIdata()}
        
      </div>
      <SearchButtonWrapper>
      <Button type="button" onClick={handleNextClick} primary={searchText===''?'primary':''}>Next</Button>
      </SearchButtonWrapper>
    </div>
  )
}

export default Home
