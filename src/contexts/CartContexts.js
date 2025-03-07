import React,{useState, createContext} from "react";
import Produto from "../components/produtos";

export const CartContext =  createContext({})

export default function CartProvider ({children}){
    const [cart, setCart] = useState([])

    function addItemCarrinho(newItem){
        //Essa condição quer dizer que ele irá percorrer meu id pra saber se tenho esse item e
        //qual a posição dele.
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1){
            //se entrou nessa condição, quer dizer que temos que adicionar +1 quantidade
            //por que ele já está na lista

            let carrList = cart;
            carrList[indexItem].amount =  carrList[indexItem].amount + 1;

            carrList[indexItem].total = carrList[indexItem].amount * carrList[indexItem].price

            setCart(carrList)
            return;

        }

        let data = {
            ...newItem,
            amount:1,
            total: newItem.price
        }

        setCart(produto => [...produto, data])
        console.log([...cart, data])
    }

    return(
        <CartContext.Provider
        value={{
            cart,
            addItemCarrinho
        }}
        
        >
            {children}
        </CartContext.Provider>

    )
}
