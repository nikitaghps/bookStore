import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Icon
} from 'react-native';
import details from '../screens/details'
export default class Store extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'listScreen',
      backgroundColor: '#13783a',
    }
}
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Harry Potter and the Sorcerer's stone",  price:"Rs. 250.00", image:"https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png"},
        {id:2, title: "River of teeth",  price:"Rs. 300.00", image:"https://images-na.ssl-images-amazon.com/images/I/71mVKDuf%2BwL.jpg"} ,
        {id:3, title: "Chronicles of Narnia",  price:"Rs. 250.00", image:"https://images-na.ssl-images-amazon.com/images/I/51lOSC0wbfL._SX331_BO1,204,203,200_.jpg"}, 
        {id:4, title: "Lord of the rings",  price:"Rs. 350.00", image:"https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg"}, 
        
      ]
    };
  }
  //clickEventListener() {
    //Alert.alert(item.title)
   // this.props.navigation.navigate('detailsScreen');
  //}
  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              
              <View style={styles.card}>
               <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailsScreen')}>
               <View style={styles.cardHeader}>
                  <View>      
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Add to cart</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    //height: 150,
    //width: null,
   // width:150,
    height:240,
    width: '100%',
    
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   