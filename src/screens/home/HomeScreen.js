/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import {icons, images} from '../../constants';
import {Responsive, screenWidth} from '../../constants/Layout';
import commonStyles from '../../utils/styles/CommonStyles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Shequita Hall',
    title: 'Your Soul Sistah',
    subTitle:
      'She has things in common with you.  You  live in the same city, run a business in the same industry, have similar goals or be at the same business stage. ',
    uri: 'https://i.ibb.co/tqn8LTq/image-424.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Ebony Lewis',
    title: 'Your Big Sistah',
    subTitle:
      'Someone who can share her wisdom, life advice, and resources based on her expertise. She might be your mentor in a specific area related to your goals.',
    uri: 'https://i.ibb.co/zVcSQm2/image-424-1.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Jasmine Walker',
    title: 'Your Little Sis',
    subTitle:
      'Someone who reminds you how much youve learned by giving you the opportunity to mentor them',
    uri: 'https://i.ibb.co/2s0yKT8/image-424-2.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571ghaghe29d72',
    name: 'Tiana King',
    title: 'Your Wild Card',
    subTitle:
      'Someone who has a business or background that is wildly different from your own, but she can provide a fresh perspective to your challenges. ',
    uri: 'https://i.ibb.co/9WBs2BH/image-424-3.png',
  },
  {
    id: '58694a0f-3da1-471f-bagfrd96-145571e29d72',
    name: 'Jada Davis',
    title: 'Business Support Sis',
    subTitle:
      'Someone who is offering freelance services that can help you address your business goals.',
    uri: 'https://i.ibb.co/kK810ZZ/image-424-4.png',
  },
];

const Item = ({title, subTitle, name, uri}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => Alert.alert('An item has been pressed')}>
    <ImageBackground
      source={{uri: uri}}
      resizeMode="cover"
      blurRadius={40}
      style={styles.imageBackgroundContainerOuter}
      imageStyle={{borderRadius: 2}}>
      <ImageBackground
        source={{uri: uri}}
        resizeMode="cover"
        imageStyle={{borderRadius: 2}}
        style={styles.imageBackgroundContainerInner}>
        <View style={styles.stickyLabelView}>
          <Text
            style={{
              fontSize: 10,
              color: 'black',
            }}>
            Same industry
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: 'white',
          opacity: 0.7,
        }}>
        <View
          style={[
            styles.contentBody,
            {
              opacity: 1,
              paddingHorizontal: 28,
              justifyContent: 'center',
            },
          ]}>
          <Text style={commonStyles.headerText}>{name}</Text>
          <Text style={[commonStyles.h4Text, {paddingVertical: 8}]}>
            {title}
          </Text>
          <Text style={{color: '#333333', fontSize: 11}}>{subTitle}</Text>
        </View>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      name={item.name}
      subTitle={item.subTitle}
      uri={item.uri}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FADFDA" />

      <ScrollView>
        <View style={{paddingHorizontal: 0, backgroundColor: '#FADFDA'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 18,
              paddingRight: 22,
              marginTop: 10,
            }}>
            <Image
              source={icons.chicPink}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
            <Image
              source={icons.ham}
              style={{width: 23, height: 28, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 32,
              paddingRight: 20,
              marginTop: 50,
              marginBottom: 30,
            }}>
            <Image
              source={icons.heySis}
              style={{width: 80, height: 30, resizeMode: 'contain'}}
            />
            <Image
              source={icons.profilePic}
              style={{
                width: 47,
                height: 47,
                resizeMode: 'contain',
                paddingLeft: 10,
              }}
            />
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 40,
              fontWeight: '700',
              paddingLeft: 32,
              marginBottom: 88,
            }}>
            Connect with{`\n`}your August{`\n`}Sistahs.
          </Text>
        </View>
        <View style={{marginTop: -65}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={{paddingLeft: 16}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginRight: 32,
            marginTop: 20,
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              color: '#A2845E',
              marginRight: 4,
              fontWeight: '500',
            }}>
            VIEW ALL MEMBERS
          </Text>
          <Image
            source={icons.arrow}
            style={{width: 12, height: 12, resizeMode: 'contain'}}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#A2845E',
              fontSize: 40,
              fontWeight: '700',
              paddingLeft: 32,
              marginBottom: 88,
            }}>
            How‘s your{`\n`}progress on{`\n`}this goal?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
  },
  imageBackgroundContainerOuter: {
    height: Responsive.height(350),
    width: screenWidth - 64,
    marginRight: 16,
  },
  imageBackgroundContainerInner: {
    height: Responsive.height(180),
  },
  contentBody: {
    height: Responsive.height(170),
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  stickyLabelView: {
    marginLeft: 8,
    marginTop: 8,
    backgroundColor: 'white',
    position: 'absolute',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
});

export default HomeScreen;
