//// This is Class based component ////

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // This will display the props that we prvided.

    // Creating  a state variable in class based component.
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Default location",
        avatar_url: "Default",
      },
    };
  }
  // componentDidMount() is same as useEffect hook in functional component. It is used to make an api call.
  async componentDidMount() {
    // console.log("child componet did mount");
    //API call

    const data = await fetch("https://api.github.com/users/akshays999");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  // this is the way to import props in class based component.
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: akshayshahane1721@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

// In class based component we use: class _ComponentName_ extends react.Component.
// In above UserClss is the name of the component and "extends React.Component" tells the react that this is the class based component. and this class based component has the render() method which returns the piece of JSX.

// In functional component we pass props as an argument directely to the component. But inside th class based component we have to create the constructor(props) and inside that we have to give super(props).

//We need to call super(props) inside the constructor because it invokes the constructor of the parent class (React.Component). This ensures that the component inherits properties correctly and allows access to this.props within the constructor
// super(props) passes the props to the base class constructor so that this.props is available and accessable in the component any where.
