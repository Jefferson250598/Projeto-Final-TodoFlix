import React from "react"
import styled from "styled-components"
import Carousel from "nuka-carousel"

const Img = styled.img`
width:30vw;
`
const BoxInicio = styled.div`
font-size:1.5vw;
display:flex;
width:70%;
justify-content:space-between;
`

const BoxTexto = styled.div`

width:35vw;
height:30vh;
display:flex;
flex-direction:column;
justify-content:space-around;

`

const Container = styled.div`
margin-left:2.9vw;
margin-top:10vh;


`
const ImgCarousel = styled.img`
width:20vw;
`

 const Card = styled.div`
 width:20vw;
 font-size:1vw;
 margin-top:5vh;
 `




export default class Home extends React.Component {




    state = {
        filmes: [
            {
                nome: "Gente Grande",
                imagem: "https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg",
                sinopse:"A morte do treinador de basquete da infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás..."
            },

            {
                nome: "A Procura da Felicidade",
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopauPshIRxjTvzwZdgEHU9ZK6kMUpGzkcJcYK2WWSUecjw83vRIL0gyhUnd-qeiaI4h0&usqp=CAU"
            },

            {
                nome: "Shrek",
                imagem: "https://br.web.img3.acsta.net/r_1280_720/img/67/ee/67ee51336ed446e3869da3ffeac34844.jpg"
            },
            {
                nome: "Velozes e Furioso",
                imagem: "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg"
            },
            {
                nome: "Homem Formiga",
                imagem: "https://img.elo7.com.br/product/zoom/265F120/big-poster-filme-homem-formiga-lo02-tamanho-90x60-cm-poster-cinema.jpg"
            },

        ]
    }
    render() {
        return (
            <Container>
                <BoxInicio>
                    <Img src="https://vigilianerd.com.br/wp-content/uploads/2017/01/capitao_fantastico_vigilia_nerd-1.jpg" alt="capitao" />

                    <BoxTexto>
                        <h3>Visto Recentemente</h3>
                        <h1>Capitão Fantástico</h1>
                        <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
                    </BoxTexto>


                </BoxInicio>
             <h3>Destaques</h3>
             <Carousel 
             slidesToShow={4}
             wrapAround={true}
             autoplay={false}
             adaptiveHeight={true}
             >
                 {this.state.filmes.map((item) => (
                     <Card>
                       <ImgCarousel src={item.imagem} alt="img"/>
                       <h2>{item.nome}</h2>
                       <p>{item.sinopse}</p>
                       

                     </Card>
                 ))}
             </Carousel>

            </Container>
        )
    }
}

