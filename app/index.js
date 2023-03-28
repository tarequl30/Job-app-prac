import { View, Text , SafeAreaView} from "react-native";
import { useState } from "react";
import { Stack, stack, useRouter} from 'expo-router'

import { COLORS, icons, images, SIZES} from '../constants'
import { Nearbyjobs, popularjobs, screenHeaderBtn, Welcome} from '../components'

const Home = () => {
  const router = useRouter()
  return(
    <SafeAreaView style={{ flex : 1, backgroundColor: COLORS , lightWhite}}> 
    <Stack.Screen 
    options={{
      headerStyle : {backgorundColor: COLORS.lightWhite},
    }}
    />
      <Text>Hello</Text>
       </SafeAreaView>
  )
}

export default Home; 