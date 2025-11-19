import React from "react";
import UserContext from "./utilty/Context";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vars: 0,
      vars2: 1,
      count: 10,
      count2: 10,
    };
    this.state = {
      userInfo: {
        name: "DUMMY NAME",
        location: "DUMMY LOCATION",
      },
    };
    console.log("constructor will render first");
  }
  componentDidMount() {
    console.log("calling api after render");
    //Best palace to call api
    //first render than update
    // console.log("last of all componenet Did Mount executes");
    console.log("Child-componentdidMount " + this.props.name);
  } /*it is like useEffect in component Did Mount */

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/noori09");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Child-componentdidMount " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    // if this.state.count !==prevState.count{
    //   // login
    // }
    // if this.state.count!==prevState.count2{
    //   // do this
    // }
    console.log("component did update");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("Child-componentdidMount ");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentwillunmount");
  }

  render() {
    console.log("noraml will render late constructor");
    return (
      <div className="min-h-80 m-10">
        <p>hello</p>
        <p>hello world </p>
        <p>props name as type of {this.props.name} </p>
        {/* used o acees props */}
        <p>props name as type of {this.props.two} </p>
        {/* used o acees props */}
        <p>class based must need render</p>
        <p>inside it is diffrent like render method</p>
        <p>use state {this.state.vars}</p>
        <p>use state {this.state.vars2}</p>
        <p>use state {this.state.count}</p>
        <p>use state {this.state.count2}</p>
        <button
          className="bg-slate-700 w-24 h-7 flex align-middle justify-center text-white"
          onClick={() => {
            this.setState({ count: 11, count2: 11 });
          }}
        >
          setState{this.state.count} - {this.state.count2}
        </button>

        <br />
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>

        <UserContext.Consumer>
          {({ user }) => (
            <p>
              usercontct :- {user.name} - {user.email}
            </p>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
} //Rendering componenet
export default ProfileClass;
