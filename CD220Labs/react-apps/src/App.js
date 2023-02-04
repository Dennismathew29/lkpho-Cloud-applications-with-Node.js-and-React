
//function component
/*

function App(props) {     //declares a function named App which takes an object argument props
  const colorStyle = {    //declares a const variable colorStyle which is an object literal
    color: props.color,   //This sets the color property of the colorstyle object to the value of props.color
    fontSize: props.size + "px"   //This sets the fontsize property of the colorstyle object to the value of props.size concatenated with the strong px.
  }
  return (
    <div>
      <div style={colorStyle}>
        Hello World!
      </div>
    </div>
  );
}
export default App;   //This exports the app function as the default export of the module. 


*/

//Class Component

/*

import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const colorStyle = {
      color: this.props.color,
      fontSize: this.props.size + "px"
    }
    return (
      <div>
        <div style={colorStyle}>
          Hello World!
        </div>
      </div>
    );
  }
}
export default App;

*/

//set the props from outside and maintain the state of the component inside. The state we will maintain is the number of times the button was clicked.


import React from 'react';  // This imports the React library from the react module.

class App extends React.Component {   //This declares a class named App that extends the React.Component class.
  constructor(props) {    //This declares a constructor for the App class and takes props as an argument.
    super(props);         //This calls the constructor of the React.Component class and passes the props to it.
  }
  state = { counter: 0 }    //This sets the initial state of the App component with a property counter equal to 0.
  incrementCounter = () => {          //This declares an arrow function incrementCounter that increments the counter in the state.
    this.setState({ counter: this.state.counter + 1 });   //This updates the state of the App component by calling setState and passing a new state object with counter increased by 1.
  }
  render() {
    const colorStyle = { color: this.props.color, fontSize: this.props.size + "px" }    //This declares a constant variable colorStyle with properties color and fontSize set to values passed in props.
    return (
      <div style={colorStyle}>
        React Component
        <br /><br />
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br /><br />
        {this.state.counter}
      </div>
    );
  }
}
export default App;     //This exports the App class as the default export of the module.
