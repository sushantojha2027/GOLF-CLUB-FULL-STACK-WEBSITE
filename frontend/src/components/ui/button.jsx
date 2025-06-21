export const Button = ({ children, onClick, className, ...props }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-xl text-white font-semibold shadow-md ${className || 'bg-blue-600 hover:bg-blue-700'}`}
    {...props}
  >
    {children}
  </button>
);