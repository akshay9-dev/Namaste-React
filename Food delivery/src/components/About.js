import UserContext from "../utils/UserContext.js";
import User from "./User.js";
import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      <h1>About Classs Component</h1>
      <div>
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <h2>This is Namaste React Series.</h2>
      {/* <User name={"Akshay shahane (Function)"} /> */}
      <UserClass name={"Akshay Shahane (Class)"} location={"Pune Class"} />
    </div>
  );
};

export default About;
