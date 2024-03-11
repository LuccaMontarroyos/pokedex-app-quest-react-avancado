import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/ThemeContext/ThemeContext"
import styled from "styled-components"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <Container style={{color: theme.backgroundColor}}>
            <Text>THEME</Text>
            <div>
                <Button style={{color:theme.backgroundColor}} onClick={() => setTheme(themes.dark)}>
                    DARK
                </Button>
                <span>  |  </span>
                <Button style={{color:theme.backgroundColor}} onClick={() => setTheme(themes.light)}>
                    LIGHT
                </Button>
            </div>
        </Container>
    )
}


const Button = styled.button`
    border: none;
    background: none;
    font-size: 17px;
    color: #ffffff;
    cursor: pointer;
    font-weight: 800;
    button:hover {
        font-size: 30px;
    }
    
    @media(max-width:376px){
        font-size: 12px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    @media(max-width: 340px){
        div {
            display: flex;
        }
    }

    @media(max-width:376px){
        font-size: 12px;
        div{
            display: flex;
        }
    }
    
`

const Text = styled.p`
    align-self: center;
`
