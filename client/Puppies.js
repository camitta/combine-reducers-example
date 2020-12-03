import React from 'react';
import {connect} from 'react-redux'
import {getPuppies} from './reducers/puppyReducer'

class Puppies extends React.Component {
  componentDidMount() {
    this.props.getPuppies()
  }

  render() {
    const {puppies} = this.props
    return <div>
      <div>
        <h2> PUPPIES </h2> 
      </div>
      {puppies.map(
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
    puppies: state.puppyState.puppies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPuppies: () => dispatch(getPuppies())
  }
}

export const ConnectedPuppies = connect(mapStateToProps, mapDispatchToProps) (Puppies)