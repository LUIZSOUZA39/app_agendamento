import { StyleSheet, Text, TextInput, View} from "react-native";

 export default function Novatarefa() {
    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
            </View>

            <Text>Nome da Tarefa </Text>

            <TextInput style={styles.textInput} />



        </View>
    
    )

}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInput: {
        bordermWidth: 2,
        height:50,
        margin:10,
        padding:10,
        borderRadius:12

    },

  
});