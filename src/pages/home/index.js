import React, {useState, useContext} from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native"
import {Feather} from '@expo/vector-icons'
import Produto from './../../components/produtos';
import {useNavigation} from '@react-navigation/native'
import { CartContext } from "@/src/contexts/CartContexts";

export default function Home(){

    const {cart, addItemCarrinho} = useContext(CartContext)

    const navigation = useNavigation()

    const [produtos, setProdutos] = useState([
        {
            id: '1',
            name: "Coca cola",
            price: 19.90
          },
          {
            id: '2',
            name: "Chocolate",
            price: 6.50
          },
          {
            id: '4',
            name: "Queijo 500g",
            price: 15
          },
          {
            id: '5',
            name: "Batata frita",
            price: 23.90
          },
          {
            id: '6',
            name: "Guarana lata",
            price: 6.00
          },
    ])

    function AddeCarrinho(item){
        addItemCarrinho(item)
    }



    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.containerCart}>

                <Text style={styles.txt}>Lista de Produtos</Text>

                <TouchableOpacity 
                style={styles.btnCart}
                onPress={()=>navigation.navigate('Cart')}
                >

                    <View style={styles.bolinha}>

                        <Text style={styles.bolinhatxt}>{cart?.length}</Text>
                    </View>

                    <Feather name="shopping-cart" size={30} color='#000'/>

                </TouchableOpacity>
            </View>

            <FlatList
            style={styles.lista}
            data={produtos}
            keyExtractor={(item)=> String (item.id)}
            renderItem={({item})=><Produto data={item} addToCart ={()=>AddeCarrinho(item) }/>}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14,
    },
    containerCart:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:24,
        marginBottom: 24
    },
    txt:{
        fontSize: 24,
        fontWeight:'bold'
    },
    bolinha:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
        width:20,
        height:20,
        borderRadius:12,
        position: 'absolute',
        zIndex:99,
        bottom:-2,
        left:-4
    },
    bolinhatxt:{
        fontSize:12
    }


})