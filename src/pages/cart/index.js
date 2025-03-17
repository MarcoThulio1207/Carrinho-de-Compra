import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import {useContext} from 'react'
import { CartContext } from "@/src/contexts/CartContexts"
import CardItem from "@/src/components/CardItem"



export default function Cart(){

    const {cart, addItemCarrinho, removerItem,total} = useContext(CartContext);

    return(
        <View style={styles.container}>
            <FlatList
            data={cart}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> String(item.id)}
            ListEmptyComponent={()=> <Text>Nenhum item no Carrinho...</Text>}
            renderItem={({item})=>(
                <CardItem
                data={item}
                addAmount={()=> addItemCarrinho(item)}
                removeAmount={()=> removerItem(item)}
                />
            )}

            ListFooterComponent={() => <Text style={styles.total}>Total: R$ {total}</Text>}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FAFAFA',
        paddingStart:14,
        paddingEnd:14,
        paddingTop:14
    },
    total:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:24
    }
})