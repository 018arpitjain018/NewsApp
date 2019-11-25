import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, ActivityIndicator, FlatList } from 'react-native'
import News from './News';

const {width, height} = Dimensions.get('window')
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        this.fetchNews()
    }

    DetailPage = (news) => {
        return this.props.navigation.navigate('Detail', {
            news: news
        })
    }

    fetchNews = () => {
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2519467fa1784bd1af4f1b00d9a54ceb'
        try {
            fetch(
                url
            ).then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw res
                }
            }).then(res => {
                this.setState({
                    news: res
                })
            }).catch(err => {
                console.log(err)
                alert('Unable to fetch request')
            })
        } catch (error) {
            alert('Unable to fetch request')
            console.log(error)
        }
    }

    render() {
        if (this.state.news) {
            return (
                <View style={styles.container}>
                    <FlatList 
                        data={this.state.news.articles}
                        renderItem={(news) => <News 
                            news={news.item}
                            DetailPage={(news) => this.DetailPage(news)}
                        />}
                        keyExtractor={(item) => item.title}
                    />
                </View>
            )
        } else {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f4f5'
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})