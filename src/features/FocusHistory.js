import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {colors} from '../utils/colors'
import {spacing, fontSizes} from '../utils/sizes'

export const FocusHistory = ({history}) => {

  if(!history || !history.length) return null

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Im finish it:</Text>
      <FlatList
       
      data={history}
      renderItem={renderItem}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: spacing.md,
  },
  item:{
    fontSize: fontSizes.lg,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
    
  },
  title:{
    color: colors.textBlack,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
    
  }
})