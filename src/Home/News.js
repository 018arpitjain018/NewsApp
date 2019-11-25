import React, { Component } from 'react'
import { 
    View, Text, StyleSheet, TouchableOpacity, Image, Dimensions
 } from 'react-native'

 const {width, height} = Dimensions.get('window')
 export default class News extends Component {
     constructor(props) {
         super(props);
         this.state = {
             news: null
         }
     }

     componentDidMount() {
         console.log(this.props.news)
         this.setState({
             news: this.props.news
         })
     }

     render() {
        if (this.state.news) {
            news = this.state.news
        return (
            <TouchableOpacity
                    onPress={() => this.props.DetailPage(this.state.news)}
                    style={{
                        marginBottom: '2%',
                        backgroundColor: '#fff'
                    }}>
                        {news.urlToImage ? <Image 
                            source={{uri: news.urlToImage}}
                            style={{
                                width: width,
                                height: height*0.3
                            }}
                        /> : null}
                        <Text style={{
                            marginVertical: '2%',
                            fontSize: 22,
                            fontWeight: 'bold'
                        }}>{news.title ? news.title : ''}</Text>
                        <Text style={{
                            fontSize: 16
                        }}>{news.description ? news.description : ''}</Text>
                    </TouchableOpacity>
        )
        } else {
            return (
                <View></View>
            )
        }
     }
 }