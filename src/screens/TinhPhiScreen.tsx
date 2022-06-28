// imporot các thư viện cần sử dụng
import * as React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
// Border viền cho phần main hiển thị nội dung
const Main = styled(View)`
padding: 10px;
`

const ButtonVCX = styled(View)`
padding: 30px ;
`

// const chính của từng screen
const TinhPhiScreen  = () => {
    return (
        <View style={styles.container} >

             {/* Tạo header công cụ tính phí */}
             <Header
            centerComponent={{ text: 'Công cụ tính phí', style: { textTransform: 'uppercase', fontWeight: 'bold', fontSize: 25} }}
            containerStyle={{
              backgroundColor: 'white',
              justifyContent: 'space-around',
            }}></Header>


<StatusBar style="dark" />
            {/* Nội dung chính */}
             {/* --------------------NỘI DUNG CHÍNH-------------------- */}
             <Main>
                {/* Tạo list các thông tin cần điền */}

               <Text>hey</Text>


                {/*6 --------------------MUA NGAY-------------------- */}
                <ButtonVCX>

                <Button
                title="MUA NGAY"
                buttonStyle={styles.buttonMua}
                />
                </ButtonVCX>
               

            </Main>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: 1000
    }, 

    buttonMua:{
        backgroundColor: '#ffc107',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 431
    },
  });
export default TinhPhiScreen