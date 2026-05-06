import User from "./components/User";
import UserClass from "./components/UserClass";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h3>This is namaste react web series</h3>
      <User name="Akshay Saini (function based) " />
      <UserClass
        name="Akshay saini (class based)"
        location="Dehradun classBased"
      />
    </div>
  );
};

export default AboutUs;
