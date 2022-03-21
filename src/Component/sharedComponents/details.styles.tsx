import styled  from "styled-components";


export const Details = styled.div`
 
width: 600px;
height: 800px;
border-radius: 1rem;
margin-top: 5rem;
margin: 2rem;
background-image: linear-gradient(to right , #DAE9FC,  #ffffff   );
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
padding: 3rem 4rem;
word-wrap: break-word;

&:hover  {
    background-image: linear-gradient(to left , #DAE9FC,  #65A5F2 );  
}

`
export const Title = styled.h1`

font-size: 3rem;
letter-spacing: 0.5rem;
text-align: center;
justify-content: center;
align-items: center;
display: flex;

` 

export const ul = styled.ul`

list-style-type: none;

` 

export const li = styled.li`

padding: 2rem 2rem;
font-size: 2rem;

` 