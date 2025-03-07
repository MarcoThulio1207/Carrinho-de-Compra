import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Produto({data, addToCart}) {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titulo}>{data.name}</Text>
            <Text style={styles.preco}>R$ {data.price}</Text>
        </View>

        <TouchableOpacity 
        style={styles.btnAdd}
        onPress={addToCart}
        >
            <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:2,
        marginBottom:14,
        padding:8,
        paddingBottom:14,
        paddingTop:14,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        
    },
    titulo:{
        fontWeight:'bold'
    },
    btnAdd:{
        paddingStart:12,
        paddingEnd:12,
        backgroundColor:'#168fff',
        paddingTop:6,
        paddingBottom:6,
        borderRadius:2
    }
})