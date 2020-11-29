import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, images, icons, SIZES, FONTS } from '../constants';

const OptionItem = ({icon, bgColor, label, onPress}) => {
   return (
      <TouchableOpacity
         style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}
         onPress={onPress}
      >
         <View style={[{
            width: 60,
            height: 60
         }, styles.shadow]}>
            <LinearGradient
               style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}
               colors={bgColor}
               start={{x: 0, y: 0}}
               end={{x: 0, y: 1}}
            >
               <Image source={icon} resizeMode='cover' style={{tintColor: COLORS.white, width: 30, height: 30}} />
            </LinearGradient>
         </View>
         <Text style={{...FONTS.body3, marginTop: SIZES.base, color: COLORS.gray}}>{label}</Text>
      </TouchableOpacity>
   );
}

const Home = ({navigation}) => {
   // Dummy data
   const [destinations, setDestinations] = useState([
      {
         id: 1,
         name: 'Ski Villa',
         img: images.skiVilla
      },
      {
         id: 2,
         name: 'Climbing Hills',
         img: images.climbingHills
      },
      {
         id: 3,
         name: 'Frozen Hills',
         img: images.frozenHills
      },
      {
         id: 4,
         name: 'Beach',
         img: images.beach
      }
   ]);

   // Render
   const renderDestination = (item, index) => {
      let destinationStyle = {};

      if (index == 0) {
         destinationStyle = {marginLeft: SIZES.padding}
      }

      return (
         <TouchableOpacity
            style={{
               justifyContent: 'center',
               marginHorizontal: SIZES.base,
               marginTop: SIZES.base,
               ...destinationStyle
            }}
            onPress={() => {navigation.navigate('DestinationDetail')}}
         >
            <Image source={item.img} resizeMode='cover' style={{width: SIZES.width * 0.28, height: '82%', borderRadius: 15}} />
            <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>{item.name}</Text>
         </TouchableOpacity>
      );
   };

   return (
      <View style={styles.container}>
         {/* Banner */}
         <View style={{flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding}}>
            <Image source={images.homeBanner} resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: 15}} />
         </View>

         {/* Options */}
         <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base}}>
               <OptionItem
                  icon={icons.airplane}
                  bgColor={['#46AEFF', '#5884FF']}
                  label='Flight'
                  onPress={() => console.log('pressed flight')}
               />
               <OptionItem
                  icon={icons.train}
                  bgColor={['#FDDF90', '#FCDA13']}
                  label='Train'
                  onPress={() => console.log('pressed train')}
               />
               <OptionItem
                  icon={icons.bus}
                  bgColor={['#E973AD', '#DA5DF2']}
                  label='Bus'
                  onPress={() => console.log('pressed bus')}
               />
               <OptionItem
                  icon={icons.taxi}
                  bgColor={['#FCABA8', '#FE6BBA']}
                  label='Taxi'
                  onPress={() => console.log('pressed taxi')}
               />
            </View>
            <View style={{flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base}}>
               <OptionItem
                  icon={icons.bed}
                  bgColor={['#FFC465', '#FF9C5F']}
                  label='Hotel'
                  onPress={() => console.log('pressed hotel')}
               />
               <OptionItem
                  icon={icons.eat}
                  bgColor={['#7CF1FB', '#4EBEFD']}
                  label='Restaurants'
                  onPress={() => console.log('pressed restarurants')}
               />
               <OptionItem
                  icon={icons.compass}
                  bgColor={['#7BE993', '#46CAAF']}
                  label='Adventure'
                  onPress={() => console.log('pressed adventure')}
               />
               <OptionItem
                  icon={icons.event}
                  bgColor={['#FCA397', '#FC7B6C']}
                  label='Events'
                  onPress={() => console.log('pressed events')}
               />
            </View>
         </View>

         {/* Destination */}
         <View style={{flex: 1}}>
            <Text style={{marginTop: SIZES.base * 2, marginHorizontal: SIZES.padding, ...FONTS.body2}}>Destination</Text>
            <FlatList
               horizontal={true}
               showHorizontalScrollIndicator={false}
               data={destinations}
               keyExtractor={item => item.id.toString()}
               renderItem={({item, index}) => renderDestination(item, index)}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.white
   },
   shadow: {
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
   }
});

export default Home;