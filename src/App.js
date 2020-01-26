import React, { Component, Fragment } from 'react';
import './App.css';
import Notes from "./notes";


// create context
const MyContext = React.createContext();


//create provider component

class MyProvider extends Component {
  state = {
    day: "Monday",
    time: "1430",
    numberOfFreeChairs: 12
  };

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        addAChair: () => this.setState({
          numberOfFreeChairs: this.state.numberOfFreeChairs + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}




class Person extends Component {
  render() {
    return (
      <div className="person">
        <p>Hi, I'm a person.  I'm the first component!</p>
        <p>My office is {this.props.office}</p>
      </div>
    )
  }
}

class Person2 extends Component {
  //child of consumer is always a function 
  render() {
    return (
      <div className="person2">
        <p>Hi, I'm the person2 component!</p>
        <MyContext.Consumer>
          {(context) => (
            <Fragment>
              <p>
                Number of free chairs= {context.state.numberOfFreeChairs}
              </p>
              <button onClick={context.addAChair}>add a chair!</button>
            </Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}



class App extends Component {
  //this state is only being used in the traditional, non context, Person component, to which it is passed down as props.
  state = {
    office: "Alicante"
  };
  render() {
    return (

      <MyProvider>

        <div className="App">
          <h1>This is a react context example app.</h1>
          <p>You can see the source code on github.</p>
          <p>You may also want the <a href="https://reactjs.org/docs/context.html">
            Official Context Docs
                    </a></p>
          <p>There are two child components.  The first, Person, is receiving state via props, the traditional way:</p>

          <Person office={this.state.office} />
          <p>The second, Person2, is receiving state via context. This could be an arbitrary number of levels deep and still work the same way.  No "prop drilling" required:</p>
          <Person2 />
          <Notes />
        </div>
      </MyProvider>
    )
  }
}



export default App;
