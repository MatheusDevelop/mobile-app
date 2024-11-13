import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ArrowCTARight from '@/components/icons/ArrowCTARight';
import ArrowDown from '@/components/icons/ArrowDown';
import LocationIcon from '@/components/icons/LocationIcon';

import NotificationIcon from '@/components/icons/NotificationIcon';
import WheatIcon from '@/components/icons/WheatIcon';
import { useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#FFFFFF', '#F8F8F8']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 35,
        }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <WheatIcon />
          <Text
            style={{
              fontFamily: 'Montserrat',
              color: '#3D65B0',
              marginLeft: 10,
            }}>
            we
          </Text>
          <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: '#3D65B0' }}>eat</Text>
        </View>
        <NotificationIcon />
      </View>
      <View
        style={{
          padding: 15,
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 6,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // Sombra para iOS
          shadowColor: '#949494',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          // Sombra para Android
          elevation: 3,
        }}>
        <LinearGradient
          
          colors={['#FFFFFF', '#f9f9f9','#fff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <LocationIcon />
          <Text
            style={{
              fontFamily: 'Montserrat_600SemiBold',
              fontSize: 8,
              color: '#68737D',
              marginLeft: 10,
            }}>
            Glelvore 64D St., 6420225-2
          </Text>
        </View>
        <ArrowDown />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 12,
            color: '#68737D',
            letterSpacing: -0.5,
          }}>
          Hello,
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 12,
            color: '#68737D',
            marginLeft: 5,
            letterSpacing: -0.5,
          }}>
          Nathalia.
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 14,
            color: '#68737D',
            letterSpacing: -0.5,
          }}>
          What you want to eat today?
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={{ backgroundColor: '#3D65B0', width: 150, padding: 10, borderRadius: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Montserrat', fontSize: 8, color: '#fff' }}>Talk with</Text>
            <Text
              style={{
                fontFamily: 'Montserrat_600SemiBold',
                fontSize: 8,
                color: '#fff',
                marginLeft: 2,
                marginRight: 5,
              }}>
              Master Chief AI
            </Text>
            <ArrowCTARight />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        {/* Container para as duas linhas */}
        <View style={{ gap: 16 }}>
          {/* Primeira linha */}
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              gap: 12,
            }}
            style={{ marginLeft: -24 }}
            onScroll={({ nativeEvent }) => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ x: nativeEvent.contentOffset.x, animated: false });
              }
            }}
            scrollEventThrottle={16}>
            {[1, 2, 3, 4].map((item) => (
              <View
                key={item}
                style={{
                  width: 150,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 12,
                  padding: 12,
                }}>
                {/* Conteúdo do card */}
              </View>
            ))}
          </ScrollView>

          {/* Segunda linha */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              gap: 12,
            }}
            style={{ marginLeft: -24 }}
            onScroll={({ nativeEvent }) => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ x: nativeEvent.contentOffset.x, animated: false });
              }
            }}
            scrollEventThrottle={16}>
            {[1, 2, 3, 4].map((item) => (
              <View
                key={item}
                style={{
                  width: 200,
                  height: 100,
                  backgroundColor: 'white',
                  borderRadius: 8,
                  padding: 12,
                }}>
                {/* Conteúdo do card */}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.sectionTitle}>Restaurants</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 12,
    letterSpacing: -0.5,
    color: '#68737D',
    marginBottom: 10,
  },
});
