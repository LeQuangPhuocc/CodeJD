
import React from "react";
import {StyleSheet,Text,View} from "react-native";
import {Image} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native-elements';

// const chính của từng screen
const ViewUser : React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* Tạo header công cụ tính phí */}
        <Header
          centerComponent={{ text: 'Công cụ tính phí', style: { textTransform: 'uppercase', fontWeight: 'bold', fontSize: 25 } }}
          containerStyle={{  
            backgroundColor: 'white',
            justifyContent: 'space-around',
          }}></Header>

      <StatusBar style="dark" />
      </View> 
        <View style={styles.header}>
          <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

              <Text style={styles.name}>Nguyễn Văn A </Text>
              <Text style={styles.userInfo}>Phường Linh Trung, Thủ Đức, Việt Nam</Text>
              <Text style={styles.userInfo}>0594855736</Text>
          </View>
        </View>

        <View style={styles.body}>
          

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
header:{
  backgroundColor: "#DCDCDC",
},
headerContent:{
  padding:30,
  alignItems: 'center',
},
avatar: {
  width: 130,
  height: 130,
  borderRadius: 63,
  borderWidth: 4,
  borderColor: "white",
  marginBottom:10,
},
name:{
  fontSize:22,
  color:"#000000",
  fontWeight:'600',
},
userInfo:{
  fontSize:16,
  color:"#778899",
  fontWeight:'600',
},
body:{
  backgroundColor: "#778899",
  height:500,
  alignItems:'center',
},
item:{
  flexDirection : 'row',
},
infoContent:{
  flex:1,
  alignItems:'flex-start',
  paddingLeft:5
},
iconContent:{
  flex:1,
  alignItems:'flex-end',
  paddingRight:5,
},
icon:{
  width:30,
  height:30,
  marginTop:20,
},
info:{
  fontSize:18,
  marginTop:20,
  color: "#FFFFFF",
}
});

export default ViewUser