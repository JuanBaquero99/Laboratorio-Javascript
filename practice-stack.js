// Managing a stack

let bookCart = [] //El array es como un apilamiento de elementos de manera vertical

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
        bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No books to remove.')

            }
        bookCart.pop(newBook)
        break;
        case VIEW_CART_ACTION:

        break;
        default:
        break;
    }

}