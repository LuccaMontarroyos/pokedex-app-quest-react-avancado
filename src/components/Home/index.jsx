import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import { Link } from "react-router-dom"
import { Header } from "../Header/Header"
import { createList, getAtributes } from "../../services/FetchPokemon"


const PokemonsList = (props) => {
    return (
        <ul>
            {
                props.pokemons.map((pokemon, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/pokemon/${pokemon.id}`}>
                                <div>
                                    <img src="src/assets/pokebola.png"/>
                                    <img src={pokemon.sprites.front_default} alt={`${pokemon.name}´s image`} />
                                </div>
                                <h3 style={{color:props.style}}>{pokemon.name}</h3>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const Home = () => {
    const [list, setList] = useState({
        pokemons: []
    })
    const [pokemonsArray, setPokemonsArray] = useState(0)
    
    useEffect(() => {
        const fetchData = async () => {
            const pokemonsList = await createList(pokemonsArray)
            const pokemonsInfos = await pokemonsList.results.map((info) => {
                return info.url
            })
            const pokemons = await Promise.all((pokemonsInfos.map((url) => getAtributes(url))))

            setList({
                pokemons: pokemons
            })
            setPokemonsArray(pokemonsArray+10)
        }
        fetchData()
    }, [])

    const { theme } = useContext(ThemeContext)


    const loadMore = () => {
        
        const fetchData = async () => {
            const pokemonsList = await createList(pokemonsArray)
            const pokemonsInfos = await pokemonsList.results.map((info) => {
                return info.url
            })
            const newPokemons = await Promise.all((pokemonsInfos.map((url) => getAtributes(url))))
            setList({
                pokemons:  [...list.pokemons, ...newPokemons] 
            })
            setPokemonsArray(pokemonsArray+10)
        }
        fetchData()
        
    }

    return (
        <main>
            <Header src={'src/assets/logo.png'}>Home</Header>
                <Container theme={theme}>
                    <PokemonsList style={theme.color} pokemons={list.pokemons} />
                    <button theme={theme} onClick={()=> loadMore()}>Carregar mais...</button>
                </Container>
        </main>
    )

}

export { Home }


const Container = styled.div`
    display: flex;
    flex-direction:column;
    padding-top: 50px;
    align-items: center;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};

    ul {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
        padding-top: 40px
        align-items: center;
        justify-content: center;
    }

    li {
        text-align: center;
        font-size: 24px;
        padding: 30px 100px; 
        border-radius: 50%;
        display: flex;
        align-self: center;
    }

    div {
        position: relative;
    }

    img {
       width: 200px;
       align-self: center;
    }

    img:first-child {
        max-width: 400px;
        transform:translateY(30px);
        transform: translateX(-10px);
        bottom: 5px;
        position: absolute;

    }

    img:first-child:hover {
        display:none;
    }

    img:nth-child(2) {
        align-self: center;
        top: 30px;
        width: 175px;
    }
    
    button {
        width:25%;
        align-self:center;
        margin: 20px;
        padding: 5px;
        font-size: 24px;
        border-radius: 20px;
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.color};
    }

    button:hover {
        cursor: pointer;
    }

    @media(max-width: 376px) {
        button {
            font-size: 10px;
        }
    }

`


