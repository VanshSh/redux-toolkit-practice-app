import { useSelector } from 'react-redux';
const Cart = () => {
  const allStates = useSelector((state) => state);
  const { atc_reducer } = allStates;

  return (
    <>
      <p className="text-danger">Items in 🛒= {atc_reducer.itemsToAddToCart}</p>
    </>
  );
};
export default Cart;
