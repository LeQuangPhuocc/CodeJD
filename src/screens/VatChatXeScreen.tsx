// imporot các thư viện cần sử dụng
import * as React from 'react'
import { useState } from 'react';
import { View } from 'react-native'
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input } from '@rneui/themed';
import { Button } from 'react-native-elements';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';

// const chính của từng screen
const VatChatXeScreen : React.FC = () => {

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
                data={data6}
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

                {/*2 --------------------MỨC KHẤU TRỪ-------------------- */}
                <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data4}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Mức khấu trừ"
                searchPlaceholder="Tìm kiếm..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="edit" size={30} />
                )}
                ></Dropdown>

                {/*3 --------------------ĐIỀU KHOẢN BỔ SUNG-------------------- */}
                <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data5}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Điều khoản bổ sung"
                searchPlaceholder="Tìm kiếm..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="form" size={30} />
                )}
                ></Dropdown>

                {/*4 --------------------LOẠI XE-------------------- */}
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

                <LabelInput>
                {/*5 --------------------NĂM SỬ DỤNG-------------------- */}
                  <Input 
                  inputStyle = {{ marginTop: 25}}
                  placeholder='Năm sử dụng ( 2010, 2022,...)'
                  leftIcon={{ type: 'font-awesome',color: 'black', name: 'calendar' ,style: { marginLeft: 5, marginRight: 10, marginTop: 16}}}
                  ></Input>

                {/*6 --------------------SỐ TIỀN BẢO HIỂM-------------------- */}
                  <Input 
                  inputStyle = {{ marginTop: 20}}
                  placeholder='Số tiền bảo hiểm(VND)'
                  leftIcon={{ type: 'font-awesome', color: 'black', name: 'money' ,style: { marginLeft: 5, marginRight: 10, marginTop: 16}}}
                  ></Input>
                </LabelInput>


                {/*7 --------------------TÍNH PHÍ-------------------- */}
                <ButtonVCX>

                <Button
                title="Tính phí"
                buttonStyle={styles.buttonTinh}
                />
                </ButtonVCX>
               

            </Main>
        </View>
    )
} 

const data1 = [
  { label: '1. Xe không kinh doanh vận tải / Tập lái', value: '1' },
  { label: '2. Xe kinh doanh dưới 9 chỗ', value: '2' },
  { label: '3. Xe kinh doanh dtừ 9c trở lên/ xe bus nội tỉnh ', value: '3' },
  { label: '4. Xe khách/ bus liên tỉnh', value: '4' },
  { label: '5. Xe taxi/ cho thuê tự lái', value: '5' },
  { label: '6. Rơ mooc', value: '6' },
  { label: '7. Xe đầu kéo/ xe đông lạnh ', value: '7' },
  { label: '8. Xe kd vận tải hàng hóa, xe tải trên 10 tấn ', value: '8' },
  { label: '9. Xe chở hàng còn lại ', value: '9' },
  { label: '10. Xe bán tải (pickup)', value: '10' },
  { label: '11. Xe vừa chở người, vừa chở hàng còn lại', value: '11' },  
];

const data4 = [
    { label: '1. Mức khấu trừ 500.000đ / vụ', value: '1' },
    { label: '2. Mức khấu trừ 1.000.000đ / vụ', value: '2' },
    
  ];

const data5 = [
    { label: 'Gói 001 - Thay thế mới - Lựa chọn cơ sở sửa chữa - Thiệt hại động cơ do thủy kích', value: '1' },
    { label: 'Gói 002 - Thay thế mới - Lựa chọn cơ sở sửa chữa - Thiệt hại động cơ do thủy kích - Mất cắp bộ phận', value: '2' },
  ];

  const data6 = [
    { label: 'VNI - Bảo hiểm Hàng Không', value: 'VNI' },
    { label: 'MIC - Bảo hiểm Quân Đội', value: 'MIC' },
    
  ];
// Border viền cho phần main hiển thị nội dung
const Main = styled(View)`
padding: 0px 10px 0px 10px ;
`
const LabelInput = styled(View)`
padding: 0px 7px 0px 7px ;
`
const ButtonVCX = styled(View)`
padding: 30px ;
`
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
export default VatChatXeScreen
