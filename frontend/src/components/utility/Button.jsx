function Button({
  text,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-xl font-medium transition ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;