import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import Deck from './Deck'
import Quiz from './Quiz'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white } from '../utils/colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import AddCard from './AddCard';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const NavTab = () => (
  <Tab.Navigator tabBarOptions={{
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    activeBackgroundColor: Platform.OS === 'ios' ? white : purple,
    labelStyle: {
      fontSize: 20,
    },
  }}>
    <Tab.Screen name="Home" component={DeckList}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cards-variant"
            size={20}
            color={color} />
        ),
      }} />
    <Tab.Screen name="Add Deck" component={AddDeck}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="plus-square"
            size={20}
            color={color} />
        ),
      }} />
  </Tab.Navigator >
)

const NavStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={NavTab} />
    <Stack.Screen name='Deck' component={Deck} options={{ title: 'Deck details' }}/>
    <Stack.Screen name='Add Card' component={AddCard} options={{ title: 'Add Card' }}/>
    <Stack.Screen name='Quiz' component={Quiz}/>
  </Stack.Navigator>
)

function Main({ decks, dispatch }) {
  useEffect(() => {
    // Get decks from local storage
    getDecks().then((result) => {
      dispatch(receiveDecks(result))
    })
  }, [])

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    decks: state
  }
}
export default connect(mapStateToProps)(Main)
