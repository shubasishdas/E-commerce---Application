import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onChangeHandler, className, placeholder } = props;
  return (
    <input
      className={className}
      placeholder={placeholder}
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
