import Box from "../box";

const Row = ({ children, className }) => {
  return (
    <div className={`w-full flex justify-center`}>
      <Box className={className}>{children}</Box>
    </div>
  );
};

export default Row;
