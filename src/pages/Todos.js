import React from "react"
import styled from "styled-components"

const Title = styled.h2`
margin-left:2.5vw;
`
const Input = styled.input`
background-color:#2C2C2C;
height:4.5vh;
width:30.2vw;
color:#fff;
position:absolute;
left:62.8vw;
top:2%;

`

const Imagem = styled.img`
width:15vw;
`
 const Card = styled.div`
 width:15vw;
 font-size:1vw;
 margin-top:5vh;
 margin:2vw;
 `
const BoxMap = styled.div`
display:flex;
flex-wrap:wrap;
width:80vw;
`

export default class Todos extends React.Component {
    state = {
        filmes: [
            {
                nome: "Gente Grande",
                imagem: "https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg",
                sinopse:"A morte do treinador de basquete da infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás..."
            },

            {
                nome: "A Procura da Felicidade",
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopauPshIRxjTvzwZdgEHU9ZK6kMUpGzkcJcYK2WWSUecjw83vRIL0gyhUnd-qeiaI4h0&usqp=CAU",
                sinopse:"Chris enfrenta sérios problemas financeiros e Linda, sua esposa, decide partir. Ele agora é pai solteiro e precisa cuidar de Christopher, seu filho de 5 anos...."
            },

            {
                nome: "Shrek",
                imagem: "https://br.web.img3.acsta.net/r_1280_720/img/67/ee/67ee51336ed446e3869da3ffeac34844.jpg",
                sinopse:"Em um pântano distante vive Shrek (Mike Myers), um ogro solitário que vê, sem mais nem menos, sua vida ser invadida por uma série de personagens de contos de fada...."
            },
            {
                nome: "Velozes e Furioso",
                imagem: "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg",
                sinopse:"The Fast and the Furious é uma saga americana, criada em 2001, que se integra na categoria de filmes de ação. Esta saga concentra-se em torno de corridas de rua ilegais, assaltos e vários outros meios..."
            },
            {
                nome: "Homem Formiga",
                imagem: "https://img.elo7.com.br/product/zoom/265F120/big-poster-filme-homem-formiga-lo02-tamanho-90x60-cm-poster-cinema.jpg",
                sinopse:"Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento..."
            },

            {
                nome: "A Era do Gelo",
                imagem: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/89/10/19976795.jpg",
                sinopse:"Vinte mil anos atrás, num mundo coberto de gelo, o mamute Manfred e a preguiça Sid resgatam um bebê humano órfão..."
            },
            {
                nome: "Guardiões da Galáxia",
                imagem: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/10/03/1319636715-guardians-of-the-galaxy.jpg",
                sinopse:"O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan..."
            },
            {
                nome: "Homem de Ferro",
                imagem: "http://hqrock.files.wordpress.com/2013/02/iron-man-3-official-poster-damaged-armor-and-others-armors.jpg?w=604",
                sinopse:"O Homem de Ferro é um personagem dos quadrinhos publicados pela Marvel Comics. Sua verdadeira identidade é o empresário e bilionário Tony Stark, que usa armaduras de alta tecnologia no combate ao crime..."
            },

        ],

        buscaFilmes:[]

    }
    componentDidMount(){
        this.setState({
            buscaFilmes:this.state.filmes
        })
    }
    
    filtrarFilmes = (ev) => {
        this.setState({
            buscaFilmes:this.state.filmes
        })
        
        const filtro = this.state.filmes.filter((item) => {
            if (item.nome.toLowerCase().includes(ev.target.value.toLowerCase())){
                return true
            }
        }) 
        this.setState({
            buscaFilmes:filtro
        })
    }
  render(){
      return(
          <div>
              <Input type="text" maxlength="10" placeholder="🔍 pesquisar" onChange={this.filtrarFilmes} />
              <Title>Todos</Title>
              <BoxMap>
              {this.state.buscaFilmes.map((item) => (
                     <Card>
                       <Imagem src={item.imagem} alt="img"/>
                       <h2>{item.nome}</h2>
                       <p>{item.sinopse}</p>
                       

                     </Card>
                 ))}
              </BoxMap>
          </div>
      )
  }
  

}

