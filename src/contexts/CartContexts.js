import React,{useState, createContext} from "react";
import Produto from './../components/produtos/index';

export const CartContext =  createContext({})

export default function CartProvider ({children}){
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);


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
            totalDoCart(carrList)
            return;

        }

        let data = {
            ...newItem,
            amount:1,
            total: newItem.price
        }

        setCart(produto => [...produto, data])
       totalDoCart([...cart,data])
    }


    function removerItem(produto){
        const indexItem = cart.findIndex(item => item.id === produto.id )

        if (cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1

            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalDoCart(cartList)
            return;
        }

        const removerItem = cart.filter(item => item.id !== produto.id)
        setCart(removerItem);
        totalDoCart(removerItem)
    }   

    function totalDoCart(itens){
        let mycart = itens
        let result = mycart.reduce((acumulador, objeto)=>{
            return acumulador + objeto.total
        }, 0)

        setTotal(result.toFixed(2))

    }







    return(
        <CartContext.Provider
        value={{
            cart,
            addItemCarrinho,
            removerItem,
            total
        }}
        
        >
            {children}
        </CartContext.Provider>

    )
}
