import React from "react";

class UserClass extends React.Component {
  //constructor for the the instantianisation in the class instance for React.component accepts the object(props so we cant destructure here)
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    this.incrementUsingPrevState = this.incrementUsingPrevState.bind(this);
  }

  //this can create a kind of race condn or stale data problem so as we are accessing the this.state.count and state upadtes in batches
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  //using prvState parameter to avoid this issue
  incrementUsingPrevState() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  //the render method inside the class based component returns some jsx piece that is shown in the ui
  //  (converted to html and then rendered in webpage)....
  render() {
    //destructuring the props :-
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {`${location} Count Value: ${count}`}</h3>
        <h4>Contact: @akshayMarch7</h4>
        <button onClick={this.incrementUsingPrevState}>Increment</button>
      </div>
    );
  }
}

export default UserClass;
