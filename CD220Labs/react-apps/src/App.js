
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

/*

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


*/


//sends an API request to a remote server when the component mounts, and change the state when the remote server responds. 

import React from 'react';
import axios from 'axios';    //imports the axios library, which is a Promise-based HTTP client for the browser and node.js.

class App extends React.Component {     //This declares a class named App that extends the React.Component class.
  state = { APIlist: [] }         //This sets the initial state of the App component with a property APIlist equal to an empty array.

  componentDidMount() {       //This is a lifecycle method that is called after the component has been mounted to the DOM.
    let url = "https://api.publicapis.org/entries?category=Animals";    //This declares a variable url that holds the API endpoint for fetching data about animal-related APIs.
    axios({           //This calls the axios function and passes it a configuration object for the API request.
      method: 'get',
      url: url,
      responseType: 'json'        //This sets the response type to json.
    }).then(resp => {             //This handles the successful response from the API.
      let listOfEntries = resp.data.entries;      //This declares a variable listOfEntries and sets it to the entries property from the API response.
      let listOfEntriesAsArray = Object.entries(listOfEntries); //This converts the listOfEntries object to an array of arrays.
      let entryDetails = listOfEntriesAsArray.map((entryDetail) => {    //This maps each entry in listOfEntriesAsArray to a new object.
        return <li style={{ color: "green" }}>{entryDetail[1]["API"]}
          ------- {entryDetail[1]["Link"]} </li>      ////This returns a li element with the API name and link displayed in green.
      })
      this.setState({ APIlist: <ul>{entryDetails}</ul> })   //This updates the state of the App component by calling setState and passing a new state object with the APIlist set to an unordered list ul element with the entryDetails.
    })
      .catch(err => {       //This handles errors from the API request.
        console.log(err.toString())   //This logs the error message to the console.
      });
  }

  render() {
    const colorStyle = { color: this.props.color, fontSize: this.props.size + "px" }      //This declares a constant variable colorStyle with properties color and fontSize set to values passed in props.
    return (
      <div style={colorStyle}>
        <h2>APIs List</h2>
        <br />
        <div>
          {
            this.state.APIlist    //his is an HTML div element that contains a JavaScript expression that renders the value of this.state.APIlist. This is likely a list of APIs to be displayed on the page.
          }
        </div>
      </div>
    );
  }
}

export default App;   //This exports the React component called "App" as the default export of this module.


