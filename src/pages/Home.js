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
font-size:1.2vw;

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
const Destaque = styled.h3`
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
             <Destaque>Destaques</Destaque>
             <Carousel 
             slidesToShow={4}
             wrapAround={true}
             autoplay={true}
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

