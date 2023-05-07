import CustomButton from '../UI_Components/CustomButton';
import CustomInput from '../UI_Components/CustomInput';
import { atcActions, emptyCartActions } from '../../SHOP_DATA/index';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Shop() {
  const inputRef = useRef(0);

  const dispatch = useDispatch();
  const allStates = useSelector((state) => state);
  const { empty_cart_reducer } = allStates;

  const atcHandler = () => {
    const totalItems = inputRef.current.value;

    dispatch(emptyCartActions.togglShowATCBtn());
    dispatch(atcActions.add_items_to_cart(totalItems));
  };
  const emptyCartHandler = () => {
    dispatch(emptyCartActions.togglShowATCBtn());
    dispatch(atcActions.add_items_to_cart(0));
  };

  return (
    <>
      {!empty_cart_reducer.showATC && (
        <>
          <CustomInput reference={inputRef} />
          <CustomButton
            onFuncDispatch={atcHandler}
            title="Add to Cart"
            color="primary"
          />
        </>
      )}

      {empty_cart_reducer.showATC && (
        <CustomButton
          onFuncDispatch={emptyCartHandler}
          title="Empty Cart"
          color="warning"
        />
      )}
    </>
  );
}

export default Shop;
