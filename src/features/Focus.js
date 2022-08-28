import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes'
import { RoundedButton } from '../components/RoundedButton';

// disini tong definisikan component Focus yg nanti tong mau pake di tong pu App
// seperti ract component nya tong pisahkan dari aplikasi utama
export const Focus = ({ addInput }) => {
  const [input, setInput] = useState(null);
  console.log(input);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          // parameter ini seperti event onchange di js jadi setiap ada event   change kan dia punya value value nya tu yg di pake jdi tong tinggal masukkan setInput saja untuk set nilai input yg dapat dari value inputan user
          onChangeText={setInput}
          label="Ko mau fokus apa?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addInput(input)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
