import styled from 'styled-components'

const ShowDetails = ({released,runtime,director,writer,awards,boxOffice}) => {
  return (
    <DetailsWrapper>
       <p><b>Released :</b> {released}</p>
       <p><b>Runtime :</b> {runtime}</p>
       <p><b>Director : </b>{director}</p>
       <p><b>Writer :</b> {writer}</p>
       <p><b>Awards :</b> {awards}</p>
       <p><b>Box-Office :</b> {boxOffice}</p>
    </DetailsWrapper>
  )
}

export default ShowDetails

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;