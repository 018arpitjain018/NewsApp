import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    Linking
 } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window')
export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: null
        }
    }

    componentDidMount() {
        this.setState({
            news: this.props.navigation.getParam('news', null)
        })
    }

    getDate = (date) => {
        var date = new Date(date);
        return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()
    }

    openBrowser = () => {
        if (this.state.news.url) {
            Linking.canOpenURL(this.state.news.url).then(supported => {
                if (supported) {
                    Linking.openURL(this.state.news.url)
                } else {
                    console.log("can't open URL")
                }
            })
        } else {
            console.log('URL not found.')
        }
    }

    render() {
        if (this.state.news) {
            return (
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.openBrowser()}>
                            {this.state.news.urlToImage ? <Image 
                                source={{ uri: this.state.news.urlToImage }}
                                style={{
                                    height: height*0.3,
                                    width: width
                                }}
                            /> : null}
                        </TouchableOpacity>
                        <View style={{
                            marginVertical: '3%',
                            marginHorizontal: '3%',
                        }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold'
                            }}>{this.state.news.title ? this.state.news.title : ''}</Text>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: '3%'
                            }}>
                                <Text>{this.state.news.source.name ? this.state.news.source.name : ''}</Text>
                                <Text>{this.state.news.publishedAt ? this.getDate(this.state.news.publishedAt): ''}</Text>
                            </View>

                            <Text style={{
                                fontStyle: 'italic',
                                fontSize: 16
                            }}>Short description: <Text>{this.state.news.description ? this.state.news.description : ''}</Text></Text>

                            <View style={{
                                marginVertical: '3%'
                            }}>
                                <Text style={{
                                    fontSize: 18
                                }}>{this.state.news.content ? this.state.news.content : ''}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )
        } else {
            return (
                <View></View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})