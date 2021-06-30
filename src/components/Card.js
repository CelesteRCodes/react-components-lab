import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledCard>
            <img
            src="https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f"
            alt='product'></img>

            <footer>
                <h4>product name</h4>
                <p>$1,500.00</p>
                
            </footer>
        </StyledCard>
    )
}

const StyledCard = styled.article`
 width:90vw;
 max-width:300px;
 background: var(--white);
 border-radius: 0.25rem;
 img{
     width: 100%;
     border-top-left-radius: 0.25rem;
     border-top-right-radius: 0.25rem;
 }
 
 footer{
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 2rem;
    h4{
        text-transform: capitalize;
        color: red;
        &::before{
            content:'Name: ';
            color: purple;
        }
    }
    h4:hover{
        color: purple;
    }
    p{
        color: var(--primary);
        font-weight: 700;
  }
  &:hover{
      background:red;
  }
 }
 
 transition: all 0.5s ease-in-out;

 &:hover{
     box-shadow: 0 3px 3px #222;
     cursor: pointer;
 }
 @media (min-width:768px){
     max-width: 600px;
 }
`

export default Card
