const Card = ({ children, bg = "bg-gray-200" }) => {
  return <div className={`${bg} p-4 rounded-lg w-full`}>{children}</div>;
};
export default Card;
