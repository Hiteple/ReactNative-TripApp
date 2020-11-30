import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const StarReview = ({rate}) => {
   const starComponents = [];
   const fullStar = Math.floor(rate);
   const noStar = Math.floor(5 - rate);
   const halfStar = 5 - fullStar - noStar;

   // Full star
   for (let i = 0; i < fullStar; i++) {
      starComponents.push(
         <Image 
            key={`full-${i}`}
            source={icons.starFull}
            resizeMode='cover'
            style={{
               width: 20,
               height: 20
            }}
         />
      );
   }

   // Half star
   for (let i = 0; i < halfStar; i++) {
      starComponents.push(
         <Image
            key={`half-${i}`}
            source={icons.starHalf}
            resizeMode='cover'
            style={{
               width: 20,
               height: 20
            }}
         />
      )
   }

   // No star
   for (let i = 0; i < noStar; i++) {
      starComponents.push(
         <Image
            key={`empty-${i}`}
            source={icons.starEmpty}
            resizeMode='cover'
            style={{
               width: 20,
               height: 20
            }}
         />
      );
   }
   return (
      <View
         style={{
            flexDirection: 'row',
            alignItems: 'center'
         }}>
            {starComponents}
            <Text style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>{rate}</Text>
      </View>
   );
}

const IconLabel = ({icon, label}) => {
   return (
      <View style={{alignItems: 'center'}}>
         <Image source={icon} resizeMode='cover' style={{width: 50, height: 50}} />
         <Text style={{marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3}}>{label}</Text>
      </View>
   );
}

const DestinationDetail = ({navigation}) => {
   return (
      <View style={styles.container}>
         {/* Header */}
         <View style={{
            flex: 2
         }}>
            <Image source={images.skiVillaBanner} resizeMode='cover' style={{width: '100%', height: '80%'}} />
            <View
               style={[
                  {
                     position: 'absolute',
                     bottom: '5%',
                     left: '5%',
                     right: '5%',
                     borderRadius: 15,
                     padding: SIZES.padding,
                     backgroundColor: COLORS.white
                  },
                  styles.shadow
               ]}
            >
               <View style={{flexDirection: 'row'}}>
                  <View style={styles.shadow}>
                     <Image source={images.skiVilla} resizeMode='cover' style={{width: 70, height: 70, borderRadius: 15}} />
                  </View>
                  <View style={{marginHorizontal: SIZES.radius, justifyContent: 'space-around'}}>
                     <Text style={{...FONTS.h3}}>Ski villa</Text>
                     <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>

                     <StarReview
                        rate={4.5}
                     />
                  </View>
               </View>

               <View style={{marginTop: SIZES.radius}}>
                  <Text style={{color: COLORS.gray, ...FONTS.body4}}>Ski Villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort</Text>
               </View>
            </View>

            {/* Header button */}
            <View style={{position: 'absolute', top: 50, left: 20, right: 20, flexDirection: 'row'}}>
               <View style={{flex: 1}}>
                  <TouchableOpacity
                     onPress={() => {navigation.navigate('Home')}}
                  >
                     <Image source={icons.back} resizeMode='cover' style={{width: 30, height: 30}} />
                  </TouchableOpacity>
               </View>
               <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <TouchableOpacity
                     onPress={() => {navigation.navigate('Home')}}
                  >
                     <Image source={icons.menu} resizeMode='cover' style={{width: 30, height: 30}} />
                  </TouchableOpacity>
               </View>
            </View>
         </View>

         {/* Body */}
         <View style={{
            flex: 1.5
         }}>
            {/* Icons */}
            <View style={{flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between'}}>
               <IconLabel icon={icons.villa} label='Villa' />
               <IconLabel icon={icons.parking} label='Parking' />
               <IconLabel icon={icons.wind} label='4 - ºC' />
            </View>

            {/* About */}
            <View style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
               <Text style={{...FONTS.h2}}>About</Text>
               <Text style={{marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body4}}>Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as fitness center, sauna, steam room to star-rated restaurants.</Text>
            </View>
         </View>

         {/* Footer */}
         <View style={{
            flex: 0.5,
            paddingHorizontal: SIZES.padding
         }}>
            <LinearGradient
               style={{height: 70, width: '100%', borderRadius: 15}}
               colors={['#EDF0FC', '#D6DFFF']}
               start={{x: 0, y: 0}}
               end={{x: 1, y: 0}}
            >
               <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center'}}>
                     <Text style={{...FONTS.h1}}>$1000</Text>
                  </View>
                  <TouchableOpacity
                     style={{
                        width: 130,
                        height: '80%',
                        marginHorizontal: SIZES.radius
                     }}
                     onPress={() => console.log('pressed booking')}
                  >
                     <LinearGradient
                        style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                     >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Book it!</Text>
                     </LinearGradient>
                  </TouchableOpacity>
               </View>
            </LinearGradient>
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
      shadowOpacity: 0.35,
      shadowRadius: 3.84,
      elevation: 5
   }
});

export default DestinationDetail;