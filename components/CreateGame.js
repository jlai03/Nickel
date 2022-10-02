import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import { Menu, Button, Provider, Surface, TextInput, RadioButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDown from "react-native-paper-dropdown";

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

import { db } from "../src/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const CreateGame = ({ navigation }) => {
    
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const [type, setType] = useState('');
    const [gameName, setGameName] = useState('');
    const [host, setHost] = useState('');
    const [checked, setChecked] = useState('first');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');

    // useEffect(() => {
    //     console.warn("checked: ", checked);
    // }, [checked]);

    const gamesCollectionRef = collection(db, "games");
    const createGameMethod = async () => {
        await addDoc(gamesCollectionRef, {
            event_name: gameName, 
            host: host,
            type: type, 
            setting: (checked == "first" ? "in person": "virtual"),
            location: location, 
            description: description, 
            attendees: [], 
            time: null, 
            max_attendees: 10
        });
    };

    const gameTypes = [{label: "Basketball", value: "Basketball"},
                        {label: "Tennis", value: "Tennis"},
                        {label: "Spikeball", value: "Spikeball"},
                        {label: "Football", value: "Football"},
                        {label: "Baseball", value: "Baseball"},
                        {label: "Video Games", value: "Video Games"},
                        {label: "Other", value: "Other"}];

    return (
        <KeyboardAwareScrollView scrollEnabled={true}>
            <Provider>
                <View>
                    <Text style={styles.text}> Create a Game </Text>
                    <View style={{
                        paddingTop: 20,
                        width: '80%',
                        alignContent: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',}}>
                        <DropDown
                            label={"Choose Game Type"}
                            mode={"outlined"}
                            visible={visible}
                            onDismiss={closeMenu}
                            showDropDown={openMenu}
                            value={type}
                            setValue={setType}
                            list={gameTypes}
                        />
                        <TextInput
                            mode="outlined"
                            label="Enter Name of Game"
                            placeholder="Name of Game"
                            onChangeText={(text) => setGameName(text)}
                            value={gameName}
                        />
                        <TextInput
                            mode="outlined"
                            label="Enter Name of Host"
                            placeholder="Name of Host"
                            onChangeText={(text) => setHost(text)}
                            value={host}
                        />
                        <View style={styles.buttons}>
                            <View style={styles.button}>
                                <Text>In Person</Text>
                                <RadioButton.Android
                                    value="first"
                                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('first')}
                                    color="#6200EE"
                                />
                            </View>
                            <View style={styles.button}>
                                <Text>Online</Text>
                                <RadioButton.Android
                                    value="second"
                                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('second')}
                                    color="#6200EE"
                                />
                            </View>
                        </View>
                        {checked=="first" ? 
                            <TextInput
                                mode="outlined"
                                label="Enter Location of the Game"
                                placeholder="Location"
                                onChangeText={(text) => setLocation(text)}
                                value={location}
                            /> :
                            <TextInput
                                mode="outlined"
                                label="Enter Link to Game"
                                placeholder="Link"
                                onChangeText={(text) => setLink(link)}
                                value={link}
                            />
                        }
                        <TextInput
                            mode="outlined"
                            label="Enter Description"
                            placeholder="Description"
                            multiline={true}
                            onChangeText={(text) => setDescription(text)}
                            value={description}
                        />
                        <View style={{paddingTop: 20}}>
                        <Button style={{paddingVertical: 10}}
                                mode="contained" 
                                onPress={() => createGameMethod()}>
                            Submit
                        </Button>
                        </View>
                    </View>
                </View>
            </Provider> 
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000000',
        
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
});

export default CreateGame;