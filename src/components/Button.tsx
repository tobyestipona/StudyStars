interface Props {
  children: string;
  color: string
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={'btn ${buttonColorClass}'} onClick={onClick} style={{backgroundColor: "4400B3", color: "white"}}>
      {children}
    </button>
  );
};

export default Button;
