import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  :root{
  --primary: teal;
  --mainBorder:  1px solid red;
  --white: #ffff;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f4f8;
}

.button {
  background: #645cff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;

}
`

export default GlobalStyles;