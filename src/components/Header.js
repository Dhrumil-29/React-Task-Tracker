import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("Click from Header File");
  // };
  const location = useLocation();
  return (
    <header className="header">
      <h1> {title} </h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          name={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

// CSS JS
// const HeaderStyle = {
//     color : 'red',
//     backgroundColor : 'black'
// }

export default Header;
