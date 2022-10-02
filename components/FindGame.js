import { StyleSheet, Text, View} from 'react-native';
import React, { Component, useState, useEffect } from 'react';

import { db } from "../src/firebase/config";
import { collection, getDocs } from "firebase/firestore";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Avatar, Card, Button, Title, Paragraph  } from 'react-native-paper'

const FindGame=({ navigation }) => {

    const [games, setGames] = useState([]);
    const gamesCollectionRef = collection(db, "games");

    const LeftContent = props => <Avatar.Icon size={24} icon={require('../assets/basketball.png')} />

    useEffect(() => { 
        const getGames = async () => {
            const data = await getDocs(gamesCollectionRef);
            setGames(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getGames();
    },[]);

    return (
        <View>
            {games && games[0] && 
                <Card>
                    <Card.Content>
                        <Title>{games[0].event_name}</Title>
                        <Paragraph>{games[0].description}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <View style={styles.button}>
                            <Button mode="contained" buttonColor="purple">Join</Button>
                        </View>
                    </Card.Actions>
                    <Card.Title
                        left={LeftContent}
                    />
                </Card>
            }
        {games && games[1] && 
            <Card>
                <Card.Content>
                    <Title>{games[1].event_name}</Title>
                    <Paragraph>{games[1].description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <View style={styles.button}>
                        <Button mode="contained" buttonColor="purple">Join</Button>
                    </View>
                </Card.Actions>
                <Card.Title
                    left={LeftContent}
                />
            </Card>
        }
    </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#445137',
    },
    button: {
        // alignItems: 'flex-end',
        alignSelf: 'right',
        // justifyContent: 'flex-end',
        // flexDirection: 'row-reverse',
        // float: 'right',
    }
});

export default FindGame;