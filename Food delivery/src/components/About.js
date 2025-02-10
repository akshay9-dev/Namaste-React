import User from "./User.js";
import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Series.</h2>
      {/* <User name={"Akshay shahane (Function)"} /> */}
      <UserClass name={"Akshay Shahane (Class)"} location={"Pune Class"} />
    </div>
  );
};

export default About;
