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
} from 'react-native';

export default class Users extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'dashScreen',
      backgroundColor: '#13783a',
    }
}
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "Drama",   image:"http://pngimg.com/uploads/fairy/fairy_PNG133.png"},
        {id:1, name: "Fantasy",  image:"http://pngimg.com/uploads/dragon/dragon_PNG988.png"},
        {id:2, name: "Comedy",   image:"http://pngimg.com/uploads/charlie_chaplin/charlie_chaplin_PNG42.png"} ,
        {id:3, name: "Action",  image:"http://pngimg.com/uploads/superman/superman_PNG61.png"} ,
        {id:4, name: "Sci-fi",  image:"http://pngimg.com/uploads/mortal_kombat/mortal_kombat_PNG162.png"} ,
        {id:5, name: "Horror",  image:"http://pngimg.com/uploads/ghost/ghost_PNG85.png"} ,
        {id:6, name: "Literature",  image:"http://pngimg.com/uploads/book/book_PNG51114.png"} ,
        {id:8, name: "Classics",   image:"http://pngimg.com/uploads/sunflower/sunflower_PNG13401.png"} ,
        {id:9, name: "Textbooks",   image:"http://pngimg.com/uploads/book/book_PNG51112.png"} ,
        {id:9, name: "Thriller",     image:"http://pngimg.com/uploads/blood/blood_PNG6151.png"} ,
      ]
    };
  }

  clickEventListener() {
    this.props.navigation.navigate('listScreen');
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
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener()}}>
                <View style={styles.cardHeader}>
                  <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/>
                </View>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     
