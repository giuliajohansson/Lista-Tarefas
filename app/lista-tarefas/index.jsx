import React, { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const TAREFAS = [
    { id: 1, descricao: 'Acordar', feito: false, date: '15/08/2024' },
    { id: 2, descricao: 'Tomar Banho', feito: false, date: '15/08/2024' },
    { id: 3, descricao: 'Comer', feito: true, date: '15/08/2024' },
    { id: 4, descricao: 'Lavar a louça', feito: true, date: '15/08/2024' },
    { id: 5, descricao: 'Pegar Chaves', feito: true, date: '15/08/2024' },
    { id: 6, descricao: 'Pegar Casaco', feito: true, date: '15/08/2024' },
    { id: 7, descricao: 'Sair', feito: true, date: '15/08/2024' },
    { id: 8, descricao: 'Comprar Comida', feito: true, date: '15/08/2024' },
    { id: 9, descricao: 'Arrumar A Casa', feito: true, date: '15/08/2024' },
    { id: 10, descricao: 'Fazer Atividade', feito: true, date: '15/08/2024' },
    { id: 11, descricao: 'Preparar Almoço', feito: true, date: '15/08/2024' },
    { id: 12, descricao: 'Tomar Remédios', feito: true, date: '15/08/2024' },
    { id: 13, descricao: 'Almoçar', feito: true, date: '15/08/2024' },
    { id: 14, descricao: 'Ler', feito: true, date: '15/08/2024' },
    { id: 15, descricao: 'Fazer Redação', feito: true, date: '15/08/2024' },
    { id: 16, descricao: 'Estudar', feito: true, date: '15/08/2024' },
    { id: 17, descricao: 'Dormir', feito: true, date: '15/08/2024' },

]


const toDo = function () {
    const [_tarefas, setTarefas] = useState(TAREFAS)

    const concluirTarefa = function({item}){
        TAREFAS[TAREFAS.indexOf(item)].feito = !TAREFAS[TAREFAS.indexOf(item)].feito
        setTarefas([...TAREFAS]) //Necessário pois sem isso o React ignora a alteração, já que o endereço de memória seria o mesmo. Isso faz uma cópia em outro endereço, basicamente
    }
    
    const Item = ({ item }) => (
        <Pressable style={styles.tarefa} onPress={() => concluirTarefa({item})}>
            <View style={styles.item} >
                {!item.feito
                    ? <Text style={styles.listItem}>{item.descricao}</Text>
                    : <Text style={[styles.listItem, { textDecorationLine: 'line-through', color: '#f7cad0'}]}>{item.descricao}</Text>
                }
            </View>
        </Pressable >
    );
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleAlign}>
                    <Text style={styles.title}>Lista de Tarefas</Text>
                    <Text style={styles.moji}>(˶°ㅁ°) !! # — ♡</Text>
                </View>
                <FlatList
                    data={_tarefas}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    style={styles.lista}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    listItem: {
        fontSize: 20
    },

    item: {
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,

    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f7cad0',
    },

    moji: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f7cad0',
    },

    titleAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        width: '80%',
        marginTop: 50,
    },

    tarefa: {
        backgroundColor: '#ed7ad3 ',
    },

    lista: {
        height: '88%',
        marginTop: 20,
    }
});

export default toDo