
export const filter = {
  A_Z(pokemons) {
   const filterA_Z =  pokemons.sort((a, b) => a.name.localeCompare(b.name))
   
   return filterA_Z
    
  },
  Z_A(pokemons) {
    const filterZ_A = pokemons.sort((a, b)=>  b.name.localeCompare(a.name))
    return filterZ_A
  },
  searcherButton(){
    const searcherButtonNormal = searcherPokemonTypeNormal.filter((TypePokemonsNormal)=> TypePokemonsNormal.type === '')
  }
  ,searcher(pokemonsArry, input){
  const searcherPokemos =  pokemonsArry.filter((nameFilterPokemons)=> nameFilterPokemons.name === input.value)
   return  searcherPokemos
  }
}
