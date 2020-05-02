import React, { Fragment } from 'react'
import { View, Text } from 'react-native';
import estilo from './estilo'


export default class Despertador extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <View >
                    <Text style={estilo.Texto}>Veja seus alarmes</Text>
                </View>
            </View>
        )
    }
}
