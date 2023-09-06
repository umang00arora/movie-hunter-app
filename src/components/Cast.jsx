import styled from 'styled-components'
const Cast = ({actors}) => {
  return (
    <CastList>
       <p><b>Cast : </b>&nbsp;</p>
       <div>
       <p>{actors.split(', ').map((item,i) => <p className='cast-item' key={i}>{item}</p>)}</p>
       </div>
    </CastList>
  )
}

export default Cast

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }
  
`;