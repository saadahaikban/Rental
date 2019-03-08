import React, {Component} from 'react';
import {Image,Container,Grid,Content,DatePicker,Form,Item,Label,Input,Header,Left,Body,Right,Title} from 'native-base';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {Button,Icon,PricingCard} from 'react-native-elements';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: SearchBook},
  BookInfo: {screen: BookInfo},
});

const App = createAppContainer(MainNavigator);

export default class SearchBook extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Left />
        <Body>
          <Title style={styles.welcome}>RentABook</Title>
        </Body>
        <Right />
        </Header>
        <Content searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search Books"/>
          </Item>

          <PricingCard
          color="#4f9deb"
          title="Harry Potter and Gold Child"
          price="Rating: 4/5"
          info={['Release year: 2001','Pages:199 pg']}
          button={{title:'Reserve', icon:'book'}}
          />
        <PricingCard
          color="#4f9deb"
          title="Life is Gold"
          price="Rating: 4/5"
          info={['Release year: 2001','Pages:199 pg']}
          button={{title:'Reserve', icon:'book'}}
        />
        <PricingCard
          color="#4f9deb"
          title="Life is Gold"
          price="Rating: 4/5"
          info={['Release year: 2001','Pages:199 pg']}
          button={{title:'Reserve', icon:'book'}}
        />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },

});
export default App;
