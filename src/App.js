import React from "react"
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
import Home from "./pages/Home" 
import Todos from "./pages/Todos"
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
height:5vh;
color:#fff;
cursor:pointer;
`

const Input = styled.input`
background-color:#2C2C2C;
height:4.5vh;
width:30vw;
color:#fff;
`

const Img = styled.img`
width:2vw;
`

const Box = styled.div`

width:47vw;
display:flex;
justify-content:space-between;
`

const Todo = styled.li`
color:red;
`
const BoxMenu = styled.div`
background-color:black;
position:absolute;
top:7%;
left:22vw;
`

const StyledLink = styled(Link)`
text-decoration:none;
color:#fff;
`

class App extends React.Component {

        state = {
          menuAtivo:false

        }

        menuCategorias = () =>{
        this.setState({menuAtivo:!this.state.menuAtivo})

        }

        
    render() {
        return (
          <Router>
            <GlobalStyle/>
            <Container>
            
              <Alinhamento>
                <Menu>
                <Todo>TODOFLIX</Todo>
                <StyledLink to="/">inicio</StyledLink>
                <li onClick={this.menuCategorias}>categorias</li> 
                {this.state.menuAtivo && (
                  <BoxMenu>
                  <StyledLink to="/todos">Todos</StyledLink>
                  <p>Favoritos</p>
                  <p>Já Visto</p>
                  <p>Adicionados</p>
                </BoxMenu>
                )}
                </Menu>
                
             <Box>
                 <Btn>Adicionar Filmes</Btn>
                 <Input type="text" maxlength="10" placeholder="🔍 pesquisar"/>
                 <Img src={User} alt="logo"/> 
             </Box>
             </Alinhamento>
            </Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/todos" element={<Todos/>}/>

            </Routes>


          </Router>

        )
    }


}
export default App

