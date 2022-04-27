import React from "react"
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import User from "./img/logo-usuario.svg"

const GlobalStyle=createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  background-color:black;
  color:#fff;


}

`




const Container = styled.div`
width:100%;
height:8vh;

display:flex;
justify-content:space-around;
align-items:center;
`
const Menu = styled.ul`

display:flex;
width:25vw;
justify-content:space-between;
list-style:none;
align-items:center;
`
const Alinhamento = styled.div`

width:95%;
display:flex;
justify-content:space-between;

`
const Btn = styled.button`
background-color:red;
width:12vw;
height:4vh;
color:#fff;
`

const Input = styled.input`
background-color:#2C2C2C;
height:4vh;
width:30vw;
`

const Img = styled.img`
width:2.5vw;
`

const Box = styled.div`

width:47vw;
display:flex;
justify-content:space-between;
`

const Todo = styled.li`
color:red;
`


class App extends React.Component {
    render() {
        return (
          <Router>
            <GlobalStyle/>
            <Container>
            
              <Alinhamento>
                <Menu>
                <Todo>TODOFLIX</Todo>
                <Link to="/">inicio</Link>
                <li>categorias</li>
                </Menu>
                
             <Box>
                 <Btn>Adicionar Filmes</Btn>
                 <Input placeholder="🔍 pesquisar"/>
                 <Img src={User} alt="logo"/> 
             </Box>
             </Alinhamento>
            </Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>


          </Router>

        )
    }


}
export default App

