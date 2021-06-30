import React from 'react'
import styled, { css } from 'styled-components/macro'

const Button = styled.button.attrs((props) =>{
    return {type:props.type || 'button'}
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({type})=>{
      return type ==='submit' && css`
      display:block;
      width:100%;
      margin-top:1rem;
      border-radius:0.25rem;``
  }}
`

const Form = () => {
    return (
        <div>
            <h1>Hey Beautiful</h1>
            <Button>Click Me</Button>
            <form 
            css={`
            width:300px; 
            background:#fff; 
            padding:2rem; 
            margin-top:1rem;`}>
                <h2>Form</h2>
                <input type="text"></input>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Form
