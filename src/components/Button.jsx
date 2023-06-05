const Button = ({ className, children }) => {
  return (
    <button
      className={`${"bg-[#00df9a] text-black rounded-md py-3 "} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
<div></div>;
