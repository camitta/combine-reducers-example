import React from 'react';
import {connect} from 'react-redux'
import {getKittens} from './reducers/kittenReducer'

class Kittens extends React.Component {
  componentDidMount() {
    this.props.getKittens()
  }

  render() {
    const {kittens} = this.props
    return <div>
      <div>
        <h2> Kittens </h2> 
      </div>
      {kittens.map(
            (kitten) => {
              return <div key={kitten.id}>
                <div className='column'>
                  <div className='center'>
                    <h1>{kitten.name}</h1>
                    <img src={kitten.imageSrc}></img>
                  </div>
                  <div className='center'>
                    My favorite food is: {kitten.favoriteFood}
                  </div>
                  <div className='center'>
                    My favorite toy is: <img src={kitten.favoriteToy}></img>
                  </div>
                  </div>
                </div>
              }
            )
          }
    </div>
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    kittens: state.kittenState.kittens
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKittens: () => dispatch(getKittens())
  }
}

export const ConnectedKittens = connect(mapStateToProps, mapDispatchToProps) (Kittens)