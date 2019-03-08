import React, {Component} from 'react';
import {Container,Icon,Image,Button,Content,DatePicker,Form,Item,Label,Input,Header,Left,Body,Right,Title} from 'native-base';
import {Platform,StyleSheet,Text,View} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      tableHead: ['Name','Start Rent Date','End Rent Date','Book Status'],
      tableData:[
        ['Saadah Aikban','2018/6/5','2018/5/16','Returned'],
        ['Saadah Aikban','2018/6/5','2018/5/16','Returned'],
        ['Saadah Aikban','2018/6/5','2018/5/16','Returned'],
        ['Saadah Aikban','2018/6/5','2018/5/16','Hold by renter']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <Container>
        <Header>
        <Left>
        <Button iconLeft>
          <Icon name='arrow-back' />
          </Button>
          </Left>
          <Body>
            <Title style={styles.welcome}>Rental Information</Title>
          </Body>
        </Header>
        <Content>
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
          </Table>
        </View>
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
