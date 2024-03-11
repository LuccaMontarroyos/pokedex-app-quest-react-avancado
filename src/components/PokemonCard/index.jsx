import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import { Header } from '../Header/Header'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import { createCard, getAbilitiesDescription } from '../../services/FetchPokemon'

export const PokemonCard = () => {

    const [pokemon, setPokemon] = useState({
        abilities: '',
        description: ''
    })

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const pokemonAbilities = await createCard(id)

            const abilitiesLinks = await pokemonAbilities.abilities.map((link) => {
                return link.ability.url
            })
            const abilitiesDescription = await Promise.all(abilitiesLinks.map((api) => getAbilitiesDescription(api)))

            setPokemon({ abilities: pokemonAbilities, description: abilitiesDescription })
            
        }
        fetchData()
    }, [])

    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <Header>Pokemon details</Header>
            {pokemon.abilities && pokemon.description && <Card theme={theme}>
                <h1>{pokemon.abilities.name}</h1>
                <img src={pokemon.abilities.sprites.front_default} alt={`${pokemon.abilities.name}´s image`} />
                <Atributes>
                    <Abilities>
                        <h2>Abilities</h2>
                        <ul>
                            {
                                pokemon.description.map((ability, index) => {
                                    return (
                                        <li key={index}>
                                            <h3>{ability.name}</h3>
                                            <p>{ability.effect_entries[0].effect}</p>                                            
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Abilities>
                    <Moves>
                        <h2>Moves</h2>
                        <ul>
                            {
                                pokemon.abilities.moves.map((number, index) => {
                                    return (
                                        <li key={index} >{number.move.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </Moves>
                    <Types>
                        <h2>{pokemon.abilities.types.length > 1 ? 'Types' : 'Type'}</h2>
                        <ul>  {
                                pokemon.abilities.types.map((type, index) => {
                                    return (
                                        <li key={index}>{type.type.name}</li>
                                    )
                                })
                                }
                        </ul>
                    </Types>
                </Atributes>
            </Card>}
        </div>


    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 50px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};

    img{
        width: 30%;
    }
    
    h1 {
        font-size: 50px;
    }
    
    @media(max-width: 769px){
        h1 {
            font-size: 40px;
        }
    }

    @media(max-width: 376px){
        h1 {
            font-size: 30px;
        }
    }
`
const Atributes = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    h2 {
        padding-bottom: 5px
    }

    ul{
        padding: 15px;
        border: 1px solid ${theme=> theme.color};
        border-radius: 15px;
    }

    @media(max-width: 769px){
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding-bottom: 60px;
    }

    @media(max-width: 376px){
        flex-direction: column;
        align-items: center;
        gap: 50px;
        width: 350px;
        font-size: 8px;

        
    }
`

const Moves = styled.div`
    text-align: center;
    padding: 50px 0 ;
    ul {
        display: flex;
        flex-wrap: wrap;
        width: 450px;
        gap: 15px;
        font-size: 12px;
        
    }

    

    @media(max-width:769px){
        display: flex;
        flex-direction: column;
        align-items: center;
        ul {
            padding: 15px;
            width: 55%;
        }
        
    }

    @media(max-width: 376px){
        ul {
            font-size: 8px;
        }
    }
`

const Abilities = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 60%;
        gap: 20px;
    }
    li {
        width: 50%;
    }

    @media(max-width: 769px){
        h2 {
            text-align: center;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 25px;
            align-items: center;
            justify-content: center;
        }       
    }

    @media(max-width: 376px){
        ul {
            
        }
    }
`

const Types = styled.div`
    text-align: center;
    padding-bottom: 20px;
    ul {
        display: flex;
        gap: 10px;
    }

    @media(max-width: 769px){
        h2 {
           text-align: center;
        }
        ul {
            display: flex;
            justify-content: center;
            align-items:center;    
        }
    }
`