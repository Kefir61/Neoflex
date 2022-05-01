export const addHeaderphoneToCart = (headerphone) => ({
     type: 'ADD_HEARPHON_CART',
     payload: headerphone
})
export const minusItem = (item, totalPrice, totalCount) => ({
     type: 'MINUS_ITEM',
     payload: item,
     totalPrice,
     totalCount
})

export const pluseItem = (item, totalPrice, totalCount) => ({
     type: 'PLUSE_ITEM',
     payload: item,
     totalPrice,
     totalCount
})

export const removeCartItem = (id) => ({
     type: 'REMOVE_CART_ITEM',
     payload: id
})