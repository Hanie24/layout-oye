const Box = ({ children, className = "" }) => {
  return (
    <div className={`w-84.5 sm:w-[640px] xl:w-[1280px] ${className}`}>
      {children}
    </div>
  );
};

export default Box;
