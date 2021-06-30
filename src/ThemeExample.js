import {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';

import GlobalStyles from './global-styles';


const BaseTheme = {
  color: '#222',
  background: '#fff',
}

const DarkTheme = {
  color: '#fff',
  background: '#222',
}

const Container = styled.div`
  padding: 2rem;
  color:${(props) => props.theme.color};
  background: ${(props) => props.theme.background};

`

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () =>{
    setTheme(!baseTheme)
   }

  return (
    <ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>Hello World</h1>
        <button className="button" onClick={toggleTheme}>Click</button>
      </Container>
    </ThemeProvider>

  )
}

export default App;
