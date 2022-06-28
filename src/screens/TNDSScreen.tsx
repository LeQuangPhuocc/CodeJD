// imporot các thư viện cần sử dụng
import * as React from 'react'
import { Alert, View } from 'react-native'
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
// Border viền cho phần main hiển thị nội dung
const Main = styled(View)`
padding: 10px;
`

// const chính của từng screen
const TNDSScreen  = () => {
    const login = () => Alert.alert("hey") 
const [value, setValue] = useState(null);
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

                {/*1 --------------------HÃNG-------------------- */}
                <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data1}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Hãng bảo hiểm"
                searchPlaceholder="Tìm kiếm..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="check" size={30} />
                )}
                ></Dropdown>


                {/*2 --------------------LOẠI XE-------------------- */}
                <Dropdown 
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data2}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Loại xe"
                searchPlaceholder="Tìm kiếm..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="car" size={30} />
                )}
                ></Dropdown>

                {/*6 --------------------TÍNH PHÍ-------------------- */}
                <ButtonVCX>

                <Button
                title="Tính phí"
                buttonStyle={styles.buttonTinh}
                onPress = {login} 
                />
                </ButtonVCX>
               

            </Main>
        </View>
    )
} 

const LabelInput = styled(View)`
padding: 0px 7px 0px 7px ;
`
const ButtonVCX = styled(View)`
padding: 30px ;
`

const data1 = [
    { label: 'PVI - Bảo hiểm Dầu Khí', value: 'PVI' },
    { label: 'VNI - Bảo hiểm Hàng Không', value: 'VNI' },
    { label: 'MIC - Bảo hiểm Quân Đội', value: 'MIC' },
    
  ];

const data2 = [
    { label: 'Xe ô tô chở người', value: '1' },
    { label: 'Xe bán tải, pickup', value: '2' },
    { label: 'Xe tải', value: '3' },
    { label: 'Xe đầu kéo', value: '4' },
  ];
  
const data3 = [
    { label: 'Xe không kinh doanh', value: '1' },
    { label: 'Xe kinh doanh vận tải', value: '2' },
    { label: 'Xe taxi', value: '3' },
    
  ];
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: 1000
    }, 
    buttonTinh:{
        backgroundColor: '#ffc107',
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 331
    },
    dropdown: {
        margin: 16,
        height: 40,
        borderBottomColor: '#a0aab3',
        borderBottomWidth: 1,
        marginTop: 25,
      },
      icon: {
        marginRight: 10,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      }, 
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
  });
export default TNDSScreen