import { View, StyleSheet, Button, Text, TouchableOpacity, Pressable } from "react-native";
import * as clipboard from 'expo-clipboard'

interface ModalPasswordProps {
    password: string;
    handleClose: () => void;
}

export function ModalPassword({ password, handleClose }: ModalPasswordProps) {
   async function handlecopypassword(){
    await clipboard.setStringAsync(password)
    alert("senha salva")
    handleClose();
      
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            {/* Text style={styles.title}>{password}</Text> */}
            <Text style={styles.Title}>senha gerada</Text>
                <Pressable style={styles.innerpassword}onLongPress={handlecopypassword}>
                    <Text style={styles.Text}>
                        {password}
                    </Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.Text}>voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button,styles.buttonSave]}>
                        <Text style={styles.Text}>salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Button title="copiar" onPress={() => { }} />
         <Button title="copiar" onPress={handleClose} />  */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(24,24,24,0.6)", 
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:  {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,   
        marginBottom: 10, 
        textAlign: 'center',
      },
    content: {
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    
    },
    Title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 24,
    },
    innerpassword: {
        backgroundColor: "#505050fd",
        width: '90%',
        padding: 14,
        borderRadius: 8,
        textAlign: "center",
        justifyContent:"center",
    },
    Text: {
        color: "000",
        textAlign: "center",
        justifyContent:"center"
    },
    buttonArea: {
     flexDirection:"row",
    width:'90%',
    marginTop:8,
     alignItems:"center",
    justifyContent: "space-between",
    textAlign: "center",
    },
    button: { 
    flex:1,
     alignItems:'center',
     justifyContent: "center",
     marginTop: 14, 
    marginBottom: 14,
    padding: 8,
    },
        buttonSave: {
       backgroundColor: "#392DE9",
       borderRadius: 8,
    },
       ButtonSaveText:{
        color:"#fff",
        fontWeight: 'bold' 
        
    },
});
