const TabButton = ({ children, onSelect }) => {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
    // children la noi dung ben trong
  );
};
export default TabButton;
