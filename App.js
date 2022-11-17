import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Img from './assets/lupa.png'
import styles from './style'

export default class App extends Component {

    state = {
        cep: '',
        dados: {
            logradouro: '',
            uf: '',
            bairro: '',
            localidade: ''
        }
    }

    buscarCep = () => {
        this.setState({
            dados: {
                logradouro: '',
                uf: '',
                bairro: '',
                localidade: ''
            }
        });

        fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`).then(res => res.json()).then(data => {
            this.setState({
                dados: data
            })
        }).catch(erro => {
            console.log(erro)
        });
    }

  render() {
    return (
    <View style={styles.container}>
    <Image source={Img} style={styles.img} />
      <Text style={styles.text}>Buscar CEP</Text>
      <TextInput keyboardType='numeric' placeholder='Digite aqui' value={this.state.cep} onChangeText={cep => {this.setState({cep})}} style={styles.viewInput} />

      
      <TouchableOpacity onPress={this.buscarCep} style={styles.btn}>
        <Text>Buscar</Text>
      </TouchableOpacity>
      {
        this.state.dados.localidade ? <View style={styles.viewResult}>
        <Text style={styles.textResult}>
            Estado: {this.state.dados.uf}
        </Text>
        <Text style={styles.textResult}>
            Cidade: {this.state.dados.localidade}
        </Text>
        <Text style={styles.textResult}>
            Bairro: {this.state.dados.bairro}
        </Text>
        <Text style={styles.textResult}>
            Rua: {this.state.dados.logradouro}
        </Text>
      </View> : null
      }
    </View>
    );
}
}