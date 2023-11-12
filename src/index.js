import pokemonsArry from './data/pokemon.js'
import { filter } from './filters.js'
const pokemonContainer = document.querySelector('#pokemones-container')
const buttonFilterZ_A = document.querySelector('.FiltradoDeZ-A')
const buttonFilterA_Z = document.querySelector('.FiltradoDeA-Z')

const input = document.querySelector('.InputBusqueda')
const lookFor = document.querySelector('.LupaBuscador')

/// botones de filtrado

//filtrar A_Z
function buttonFilterA_Zp() {
  const pokemonsOrderUp = filter.A_Z(pokemonsArry)
  creacionDeTarjeta(pokemonsOrderUp)
}
// filtrado Z_A
function buttonFilterZ_Ap() {
  const pokemonsOrderFalling = filter.Z_A(pokemonsArry)
  creacionDeTarjeta(pokemonsOrderFalling)
}

buttonFilterA_Z.addEventListener('click', buttonFilterA_Zp)
buttonFilterZ_A.addEventListener('click', buttonFilterZ_Ap)

const creacionDeTarjeta = (pokemons) => {
  pokemonContainer.innerHTML = ''
  pokemons.map((pokemon) => {
    const cardPokemon = document.createElement('article')
    const spanDeCardPokemonParaHover = document.createElement('span')
    const headerPokemonCard = document.createElement('header')
    const footerPokemonCard = document.createElement('footer')
    const figurePokemonCard = document.createElement('figure')
    const imgPokemonCard = document.createElement('img')
    const namePokemonCard = document.createElement('h2')
    const descriptionPokemonCard = document.createElement('p')
    const typePokemonCard = document.createElement('div')

    // imagenes de los pokemon
    imgPokemonCard.setAttribute('src', pokemon.img)
    imgPokemonCard.setAttribute('alt', pokemon.name)

    //agregando el nombre del pokemon
    namePokemonCard.textContent = pokemon.name

    // agregando el numero del pokemon
    descriptionPokemonCard.textContent = pokemon.num

    // tomado el tipo de pokemon
    pokemon.type.map((type) => {
      typePokemonCard.innerHTML += `
      <span class="${
        type === 'Fire'
          ? 'type-fire'
          : type === 'Flying'
          ? 'type-Flying'
          : type === 'Grass'
          ? 'type-Grass'
          : type === 'Poison'
          ? 'type-Poison'
          : type === 'Water'
          ? 'type-Water'
          : type === 'Bug'
          ? 'type-Bug'
          : type === 'Electric'
          ? 'type-Electric'
          : type === 'Normal'
          ? 'type-Normal'
          : type === 'Ground'
          ? 'type-Ground'
          : type === 'Rock'
          ? 'type-Rock'
          : type === 'Dragon'
          ? 'type-Dragon'
          : type === 'Psychic'
          ? 'type-Psychic'
          : type === 'Fighting'
          ? 'type-Fighting'
          : type === 'Ghost'
          ? 'type-Ghost'
          : type === 'Ice'
          ? 'type-Ice'
          : ''
      }">${type}</span>`

      if (type === 'Fire') {
        cardPokemon.classList.add('typePokemosFire')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsFireHover')
      }

      if (type === 'Grass') {
        cardPokemon.classList.add('typePokemosGrass')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsGrassHover')
      }

      if (type === 'Poison') {
        cardPokemon.classList.add('typePokemosPoison')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsPoisonHover')
      }

      if (type === 'Water') {
        cardPokemon.classList.add('typePokemosWater')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsWaterHover')
      }

      if (type === 'Dragon') {
        cardPokemon.classList.add('typePokemosDragon')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsDragonHover')
      }
      if (type === 'Bug') {
        cardPokemon.classList.add('typePokemosBug')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsBugHover')
      }

      if (type === 'Electric') {
        cardPokemon.classList.add('typePokemosElectric')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsElectricHover')
      }

      if (type === 'Normal') {
        cardPokemon.classList.add('typePokemosNormal')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsNormalHover')
      }
      if (type === 'Ground') {
        cardPokemon.classList.add('typePokemosGround')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsGroundHover')
      }
      if (type === 'Rock') {
        cardPokemon.classList.add('typePokemosRock')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsRockHover')
      }
      if (type === 'Psychic') {
        cardPokemon.classList.add('typePokemosPsychic')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsPsychicHover')
      }
      if (type === 'Ghost') {
        cardPokemon.classList.add('typePokemosGhost')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsGhostHover')
      }
      if (type === 'Ice') {
        cardPokemon.classList.add('typePokemosIce')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsIceHover')
      }
      if (type === 'Fighting') {
        cardPokemon.classList.add('typePokemosFighting')
        spanDeCardPokemonParaHover.classList.add('hoverPokemonsFightingHover')
      }
    })

    //clases de las cartas
    cardPokemon.classList.add('card-container')

    // clases de span para hover
    spanDeCardPokemonParaHover.classList.add('spanCartd')

    // agregando figure al header
    figurePokemonCard.appendChild(imgPokemonCard)
    headerPokemonCard.appendChild(figurePokemonCard)

    // agregando contenido del footer
    footerPokemonCard.appendChild(namePokemonCard)
    footerPokemonCard.appendChild(descriptionPokemonCard)
    footerPokemonCard.appendChild(typePokemonCard)

    // incorporando los pokemon a las cartas
    cardPokemon.appendChild(spanDeCardPokemonParaHover)
    cardPokemon.appendChild(headerPokemonCard)
    cardPokemon.appendChild(footerPokemonCard)
    pokemonContainer.appendChild(cardPokemon)
  })
}

const inputValue = function () {
  const p = filter.searcher(pokemonsArry, input)
  creacionDeTarjeta(p)
}
lookFor.addEventListener('click', inputValue)


const seeTheCards = () => {
  creacionDeTarjeta(pokemonsArry)
  
 
}

seeTheCards()
//pokemonsArry.filter((nameFilterPokemons)=> nameFilterPokemons.name === input.value)
