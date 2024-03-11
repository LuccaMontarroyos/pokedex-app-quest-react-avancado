import { Link } from "react-router-dom"
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton"
import styled from "styled-components"

export const Header = (props) => {
    return (
        <Container>
                {props.src ? <Img src={props.src} alt="logo image" /> : <Link style={{color: '#fff'}} to={'/'}><h2 className="comeback">Home</h2></Link>}            
                <h2 id="home">{props.children}</h2>
                <ThemeTogglerButton />
            </Container>
    )
}

const Container = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #FC1A18;
color: #ffffff;
padding: 20px;
    

    #home {
        padding-right: 40px;
    }

    .comeback {
        padding-right: 75px;
    }

    
    @media(max-width: 769px) {
        img {
            margin-right: 70px;
        }
    }

    @media(max-width:376px) {
        justify-content: space-between;

        #home {
            padding-right: 0;
            text-align: center;
        }

        .comeback{
            padding-right: 0;
        }
        img {
            margin-right: 0px;
            width:25%;
        }
    }

`


const Img = styled.img`
    width: 10%
`

