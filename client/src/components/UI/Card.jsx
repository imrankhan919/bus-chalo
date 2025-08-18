const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;