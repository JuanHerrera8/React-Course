import PropTypes from "prop-types";

export default function Button({ text, name = "Juan" }) {
  return (
    <button
      onClick={() => {
        console.log("Hola mundo");
      }}
    >
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
