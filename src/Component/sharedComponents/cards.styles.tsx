import styled  from "styled-components";


export const Card = styled.div`
 
width: 200px;
height: 100px;
background-color: cadetblue;
border-radius: 1rem;
margin-top: 5rem;
margin: 2rem;
background-image: linear-gradient(to right , #DAE9FC,  #65A5F2   );
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
padding: 1rem 1rem;

&:hover  {
    background-image: linear-gradient(to left , #DAE9FC,  #65A5F2 );  
}

`

export const planetCard = styled(Card)`
 background-image: linear-gradient(to right , #DAE9FC,  #FEE5DD   );

`

export const starCard = styled(Card)`
 background-image: linear-gradient(to right , #DAE9FC,  #FDFCD8  );

`


export const Section = styled.div`

padding-top: 4rem ;

`



export const Container = styled.div`

padding-top: 2rem ;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 3rem 3rem;


`

export const Title = styled.h1`

font-size: 3rem;
letter-spacing: 0.5rem;
text-align: center;
justify-content: center;
align-items: center;
display: flex;

` 

export const link = styled.p`

text-decoration: none;
letter-spacing: 0.5rem;
margin-top: 3rem;
cursor: pointer;
` 