import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'

const Page = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20}}>
          <Image source={{uri : "https://cdn.pixabay.com/photo/2017/07/18/23/40/group-2517459_1280.png"}}
          style={{ width: 40, height: 40, borderRadius: 10}}/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={{
          marginRight: 20,
          backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: Colors.black,
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          <Ionicons name='notifications' size={20} color={Colors.black}/>
        </TouchableOpacity>
      ),
    }} />
    <View style={[styles.container, {paddingTop: headerHeight}]}>
      <Text style={styles.headingText}>최근 인기 시공 사례</Text>
    </View>
  </>
  )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    headingText: {
      fontSize: 28,
      fontWeight: '500',
      color: Colors.black,
      marginTop: 10,
    }
})