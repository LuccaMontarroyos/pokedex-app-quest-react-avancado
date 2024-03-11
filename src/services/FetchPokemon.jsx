export const createList = async (array) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${array}`)
    return await response.json()
}

export const getAtributes = async (pokemon) => {
    const response = await fetch(pokemon)
    return await response.json()
}

export const createCard = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json()
}

export const getAbilitiesDescription = async (api) => {
    const response = await fetch(api)
    return await response.json()
}