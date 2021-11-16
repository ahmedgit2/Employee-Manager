import React from 'react';
import { Text, View } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { ListItemSeparator } from './ListItemSeparator'
import { Roundimage } from './Roundimage'
import { Colors } from '../../utils/Colors';

import { LogoutModal } from './LogOutModal'

export function DrawerContent({ name = 'test', navigation, ...props }) {

  const [ ModalVisible, setModalVisible ] = React.useState(false);

  return (

    <View style={ { flex: 1 } } >
      <View style={ { backgroundColor: Colors.Main_COLOR, flex: 0.5, justifyContent: 'center', alignItems: 'center' } }>
        <Roundimage size={ 100 } />
        <Text style={ { marginTop: 10, fontSize: 20, color: Colors.white } }>
          { name }
        </Text>
      </View>

      <DrawerContentScrollView  { ...props }>
        <LogoutModal
          onBack={ () => setModalVisible(false) }
          onPress={ () => {
            setModalVisible(false);
            navigation.navigate('LogoutSplash');
          }
          }
          Visible={ ModalVisible }
        />
        <DrawerItem
          icon={ ({ focused, color, size }) => (
            <AntDesign color={ color } size={ 25 } name={
              focused ? 'home' : 'home' } />
          ) }
          label="Home"
          onPress={ () => {
            navigation.navigate('HomeScreen');
          } }
        />
        <ListItemSeparator />
        <DrawerItem
          icon={ ({ color, size }) => (
            <AntDesign color={ color } size={ size } name={ "" } />
          ) }

          label="Logout"
          icon={ ({ focused, color, size }) => (
            <AntDesign color={ color } size={ 23 } name={
              focused ? 'logout' : 'logout' } />
          ) }
          onPress={ () => {
            navigation.closeDrawer();
            setModalVisible(true);
          } }
        />
        <ListItemSeparator />
      </DrawerContentScrollView>
    </View>
  );
}