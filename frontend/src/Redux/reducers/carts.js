import { 
    ADD_TO_CART,
    DECREASE_QUANTITY_CART, 
    REMOVE_ITEM_CART,
    EMPTY_CART
} from '../constants/carts'

export const cartReducer = (state = { cartItems: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist = state.cartItems?.find(i => i.id === item.id)
            if (isItemExist) {
                const object = {
                    id: isItemExist.id,
                    name : isItemExist.name,
                    image : isItemExist.image,
                    price : isItemExist.price,
                    quantity : Number(isItemExist.quantity) + 1,
                    total : ""
        
                }
                object.total = Number(isItemExist.price) *  Number(object.quantity)
                return {
                    ...state,
                    cartItems: [...state.cartItems.filter(i => i.id !== isItemExist.id), object]
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state?.cartItems, item]
                }
            }

        case REMOVE_ITEM_CART: 
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.id !== action.payload)
            }

        case DECREASE_QUANTITY_CART:
            const isExist = state.cartItems?.find(i => i.id === action.payload)
            if (isExist.quantity >= 1) {
                const object = {
                    id: isExist.id,
                    name : isExist.name,
                    image : isExist.image,
                    price : isExist.price,
                    quantity : Number(isExist.quantity) - 1,
                    total : ""
        
                }
                object.total = Number(isExist.price) *  Number(object.quantity)
                return {
                    ...state,
                    cartItems: [...state.cartItems.filter(i => i.id !== isExist.id), object]
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems.filter(i => i.id !== isExist.id)]
                }
            }
        
        case EMPTY_CART: 
            return {
                ...state,
                cartItems: state.cartItems = []
            }

        default:
            return state
    }
}