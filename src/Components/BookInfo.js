import React, {Component} from 'react';
import {Container,Image,Button,Content,DatePicker,Form,Item,Label,Input,Header,Left,Body,Right,Title} from 'native-base';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell,Grid } from 'react-native-easy-grid';

export default class App extends Component {
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
        <Content>
        <Grid>
          <Col style={styles.gridimage}>
            <Text>Book Image</Text>
          </Col>
          <Col style={styles.griddetail}>
            <Text>Title: </Text>
            <Text>Release Year: </Text>
            <Text>Genre: </Text>
            <Text>Pages: </Text>
            <Text>Summary: </Text>
          </Col>
        </Grid>
        <Left/>
        <Body>
        <Button warning style={styles.but}>
        <Text>
        Rental Information
        </Text>
        </Button>
        </Body>
        <Right/>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  but:{
    alignItems:'center',
  },
  gridimage:{
    backgroundColor:'white',
    height:400,
    width:120,
  },
  griddetail:{
    backgroundColor:'white',
    height:400,
    width:200,
  },
  container: {
     flex: 1,
     padding: 16,
     paddingTop: 30,
     backgroundColor: '#fff'
  },
  head: {
     height: 40,
     backgroundColor: '#f1f8ff'
  },
  text: {
     margin: 6
   }
});
