import { View, Text , SafeAreaView, Dimensions, ScrollViewComponent} from "react-native";
import { useState } from "react";
import { Stack, stack, useRouter} from 'expo-router'

import { COLORS, icons, images, SIZES} from '../constants'
import { Nearbyjobs, Popularjobs, popularjobs, ScreenHeaderBtn, screenHeaderBtn, Welcome} from '../components'
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const router = useRouter()
  return(
    <SafeAreaView style={{ flex : 1, backgroundColor: COLORS.lightWhite}}> 
    <Stack.Screen 
    options={{
      headerStyle : {backgorundColor: COLORS.lightWhite},
      headerShadowVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
      ),
      headerRight: () => (
        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
      ),
      headerTitle: ''
    }}
    />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View 
      style={{
        flex: 1,
        padding: SIZES.medium
      }}
      >
     <Welcome />
     <Popularjobs />
     <Nearbyjobs />
      </View>

    </ScrollView>
       </SafeAreaView>
  )
}

export default Home; 