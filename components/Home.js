import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import CreateGame from '../components/CreateGame.js';
import FindGame from '../components/FindGame.js';
import Game from '../components/Game.js';
import { Button } from 'react-native-paper';


function HomeScreen({ navigation }) {
    return (
        <View>
            <Button
                mode='contained'
                onPress={() => navigation.navigate('Create Game')}
            >
                Create Game
            </Button>
            <Button
                mode='contained'
                onPress={() => navigation.navigate('Find Game')}
            >
                Find Game
            </Button>
        </View>
    );
}

const Stack = createStackNavigator();

class Home extends Component {
    render(){
        return (
            <View style={styles.container}>
                <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen style={styles.text} name="Home" component={HomeScreen} />
                    <Stack.Screen name="Create Game" component={CreateGame} />
                    <Stack.Screen name="Find Game" component={FindGame} />
                    {/* <Stack.Screen name="Game" component={Game} /> */}
                </Stack.Navigator>
                </NavigationContainer> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#445137',
        width: '30%',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#445137',
    },
    container: {
        width:'100%',
        alignItems: 'stretch',
        flex: 1,
        justifyContent: 'center',
    }
});

export default Home;