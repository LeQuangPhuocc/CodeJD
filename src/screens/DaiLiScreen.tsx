// imporot các thư viện cần sử dụng
import * as React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';


// const chính của screen
const DaiLiScreen : React.FC = () => {
    return (
        <View style={styles.container} >
             {/* Tạo header công cụ tính phí */}
             <Header
              centerComponent={{ text: 'Công cụ tính phí', style: { textTransform: 'uppercase', fontWeight: 'bold', fontSize: 25} }}
              containerStyle={{
                backgroundColor: 'white',
              }}></Header>

<StatusBar style="dark" />
            <WebView 
            style={styles.containerWeb}
            source={{ uri: 'http://ldp.to/baohiemthuylinh' }}
            />
            
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    containerWeb: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
  });

export default DaiLiScreen