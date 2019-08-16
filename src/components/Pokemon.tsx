import React from 'react'
import PokemonInterface from '../interfaces/Pokemon.interface'

class Pokemon extends React.Component<PokemonInterface> {
  render() {
    const { baseExp, numberOfAbilities, name, imageUrl } = this.props
    return (
      <div>
        <img className="img-pokemon" src={imageUrl} alt={name} />
        <p>
          {name} has {numberOfAbilities} abilities and {baseExp} base experience
          points
        </p>
      </div>
    )
  }
}

export default Pokemon
