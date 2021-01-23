import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

import {getArticles} from "../AwesomeProject/service/news"

import {DataItem}from "../AwesomeProject/item" 

export default class ListExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    }
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, 
    )
  }


  render() {
    return (
      <Container>
        <Header />
        <Content>
        <List
        dataArray={this.state.data}
        renderRow={(item) => {
            return (
              <DataItem data={item} />
            )
        }} />
        </Content>
      </Container>
    );
  }
}