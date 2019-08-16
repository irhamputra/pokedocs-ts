import React from 'react'
import Pokemon from './Pokemon'
import UserInterface from '../interfaces/User.interface'
import PokemonInterface from '../interfaces/Pokemon.interface'

interface SearchState {
  error: boolean
  pokemon: PokemonInterface
}

class Search extends React.Component<UserInterface, SearchState> {
  pokemonRef: React.RefObject<HTMLInputElement>

  constructor(props: UserInterface) {
    super(props)
    this.state = {
      pokemon: null,
      error: false,
    }
    this.pokemonRef = React.createRef()
  }

  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(res => {
      if (res.status !== 200) {
        this.setState({ error: true })
        return
      }
      res.json().then(data => {
        this.setState({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilities: data.abilities.length,
            baseExp: data.base_experience,
            imageUrl: data.sprites.front_default,
          },
        })
      })
    })
  }

  render() {
    const { name: username, numberOfPokemons } = this.props
    const { error, pokemon } = this.state

    return (
      <>
        <p>
          User {username}{' '}
          {numberOfPokemons && <span>has {numberOfPokemons} Pokemons</span>}
        </p>
        <input type="text" ref={this.pokemonRef} />
        <button className="m-button" onClick={this.onSearchClick}>
          Search
        </button>
        {error ? (
          <p>Pokemon not found</p>
        ) : (
          pokemon && (
            <Pokemon
              baseExp={pokemon.baseExp}
              imageUrl={pokemon.imageUrl}
              name={pokemon.name}
              numberOfAbilities={pokemon.numberOfAbilities}
            />
          )
        )}
      </>
    )
  }
}

export default Search
