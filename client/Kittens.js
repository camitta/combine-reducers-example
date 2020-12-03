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
            (pup) => {
              return <div key={pup.id}>
                <div className='column'>
                  <div className='center'>
                    <h1>{pup.name}</h1>
                    <img src={pup.imageSrc}></img>
                  </div>
                  <div className='center'>
                    My favorite food is: {pup.favoriteFood}
                  </div>
                  <div className='center'>
                    My favorite toy is: <img src={pup.favoriteToy}></img>
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