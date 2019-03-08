import React, {Component} from 'react';
import {Container,Content,DatePicker,Form,Item,Label,Input,Header,Left,Body,Right,Title} from 'native-base';
import {Platform,StyleSheet,Text,View} from 'react-native';
import {Button} from 'react-native-elements';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate){
    this.setState({chosenDate: newDate});
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title style={styles.welcome}>Rental Form</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item>
              <Label>Username: </Label>
              <Input />
            </Item>
            <Item>
              <Label>ID Number: </Label>
              <Input />
            </Item>
            <Item>
              <Label>Phone Number: </Label>
              <Input />
            </Item>
            <Item>
              <Label>Email: </Label>
              <Input />
            </Item>

            <Item>
              <Label>Rental Start Date: </Label>
                <DatePicker
                  defaultDate={new Date(2019, 1, 1)}
                  locale={"en"}
                  modalTransparent = {false}
                  animationType={"fade"}
                  androidMode ={"default"}
                  placeHolderText="Select start date"
                  textStyle={{ color:"purple"}}
                  placeHolderTextStyle={{color:"#d3d3d3"}}
                  onDateChange={this.setDate}
                  disabled ={false}
                />
            </Item>
            <Item>
              <Label>Rental End Date: </Label>
                <DatePicker
                  defaultDate={new Date(2001, 1, 1)}
                  locale={"en"}
                  modalTransparent = {false}
                  animationType={"fade"}
                  androidMode ={"default"}
                  placeHolderText="Select end date"
                  textStyle={{ color:"black"}}
                  placeHolderTextStyle={{color:"#d3d3d3"}}
                  onDateChange={this.setDate}
                  disabled ={false}
                />
            </Item>
          </Form>
          <Button title='Submit' />
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
