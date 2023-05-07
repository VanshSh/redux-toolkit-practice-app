import Button from 'react-bootstrap/Button';

const CustomButton = ({ color, title, onFuncDispatch }) => {
  return (
    <>
      <Button
        onClick={() => onFuncDispatch()}
        className="my-2 w-100"
        variant={color}
      >
        {title}
      </Button>
    </>
  );
};
export default CustomButton;
