import { StyleSheet, Text, TextInput, View} from "react-native";

 export default function Novatarefa() {
    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
            </View>

            <View style={styles.body}>
                <Text style = {styles.texto}>Nome da Tarefa</Text>
                <TextInput style={styles.textInput} />
                
                <Text>Categoria da Tarefa:</Text>
                <TextInput style={styles.textInput} />
            
                <TextInput
                    Text style={styles.textInput}
                    placeholder="Selecione a categoria"
                    placeholderTextColor="#888" // opcional: cor do placeholder
                />
                 
        </View>
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
    body: {
        padding:15
    },
    texto: {
        marginBottom: 5
    },
    textInput: {
        borderWidth: 2,
        height:50,
        margin:10,
        padding:10,
        borderRadius:12

    },

  
});