import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJObCard from '../../common/cards/popular/popularjobcard.style'

const Popularjobs = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}> Popular Jobs  </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
    </View>
    <View>
      
    </View>
    </View>
  )
}

export default Popularjobs