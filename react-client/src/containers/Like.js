import React,{Component} from 'react'

class Like extends Component {

  constructor (props) {
    super (props);
    this.state = {
      counter: 0
    }
  }

  handleClick () {
    this.setState({ counter: this.state.counter + 1 })
  }

render () {
  // console.log(this.props)
  return (
    <button onClick={this.handleClick}> {this.state.counter} Likes</button>
  )

 }
}

export default Like;

// blog post: arrow functions and 'this', how 'this' is defined in JS, how does JS know what 'this' is in different contexts
//  You dont know JS books (scope and variable)
// couple of paragraphs, code examples
