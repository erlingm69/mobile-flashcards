import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import DeckList from './DeckList'
import AddDeck from './AddDeck';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white, gray } from '../utils/colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
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
  );
}

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
        <MyTabs />
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
