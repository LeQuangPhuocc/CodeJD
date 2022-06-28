
import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native-elements';

// const chính của từng screen
const SignUpScreen : React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword,setRePassword ] = useState("");
  const [addressUser, setaddressUser] = useState("");
  const [phoneNumberUser, setphoneNumberUser] = useState("");
  const [accountName,setaccountName ] = useState("");
  
    return (
      <><View>
        {/* Tạo header công cụ tính phí */}
        <Header
          centerComponent={{ text: 'Công cụ tính phí', style: { textTransform: 'uppercase', fontWeight: 'bold', fontSize: 25 } }}
          containerStyle={{   
            backgroundColor: 'white',
            justifyContent: 'space-around',                                                           
          }}></Header>

      <StatusBar style="dark" />

      </View> 
      <View style={styles.container}>
      <Image
        style={styles.imagess}
        source={{
          uri: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/248346491_141197401570382_8407600371302892744_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IL0HngYhnCcAX-cfi-7&tn=i4iCDQt6-cFxk8zS&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_g413R3CypVVGDGCAvQhmxwsml1Bu1Vzl6yYQFZBT5Fg&oe=62B50A09', }}
      />

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Tên đăng nhập"
              placeholderTextColor="#003f5c"
              onChangeText={(username) => setUsername(username)} />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Mật khẩu"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(rePassword) => setRePassword(rePassword)} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Tên khách hàng"
              placeholderTextColor="#003f5c"
              onChangeText={(accountName) => setaccountName(accountName)} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Địa chỉ"
              placeholderTextColor="#003f5c"
              onChangeText={(addressUser) => setaddressUser(addressUser)} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Số điện thoại"
              placeholderTextColor="#003f5c"
              onChangeText={(phoneNumberUser) => setphoneNumberUser(phoneNumberUser)} />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View></>
    )
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  imagess: {
    marginBottom: 40,
    width: 150,
    height: 150,
    borderRadius: 30,
  },
 
  inputView: {
    backgroundColor: "#FFDA6B",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    paddingTop: 10,
    paddingRight: 50,
    paddingBottom: 10,
    paddingLeft: 50,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffc107",
  },
});


export default SignUpScreen