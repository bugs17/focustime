import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';

// ini tong import warna yg tong su definisikan di satu file dalam folder utils
// disana tong simpan warna" yg tong mau pake di dalam aplikasi
// tong bisa simpan spacing juga kaya ukuran" sm-md-lg-xl-xxl-xxxl.. terserah ko mau kasih nama apa terserah ko saja
import { colors } from './src/utils/colors';

// import component Focus dari folder features
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {
  const [curentInput, setCurentInput] = useState(null);
  const [history, setHistory] = useState([])
  return (
    // safeArea ini untuk mengatur view/commponent yg ada di dalamnya tidak keluar dari layar.. dan itu cuma berlaku di IOS karna ios ada punya JS enine yg berjalan di safari, sedangkan android tidak memiliki itu jadi tong harus tambah stylsheet cek os kalau androis statusbar height nya set ke 0. set di style di bawah tu..
    <SafeAreaView style={styles.container}>
      {!curentInput ? (
        <>
          <Focus addInput={setCurentInput} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusInput={curentInput}
          onTimerEnd={(focusInput)=> {
            setHistory([...history, focusInput])
          }}
          clearInput={()=> setCurentInput(null)}
        />
      )}
    </SafeAreaView>
  );
}

// disini tong definisikan styleshet dalam bentuk object key value. yg di dalamnya ad object juga. ini seperti css tpi bukan css.. ini style buat js bawahan react-native..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.background,
  },
});
