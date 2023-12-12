/* eslint-disable react-native/no-inline-styles */
import { ActivityCard } from '@app/components';
import PullToRefreshList from '@app/components/pull-to-refresh-list';
import { MediaFlatlist } from '@app/components/swiper-flatlist';
import { useAppSelector } from '@app/hooks';
import useAppTheme from '@app/hooks/useAppTheme';
import { AppTheme } from '@app/theme';
import { HomeStackScreenProps } from '@app/types/type';
import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { ScrollView } from 'react-native-gesture-handler';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { theme } = useAppTheme();
  const inset = useSafeAreaInsets();

  const styles = makeStyles(theme, inset);

  const { user, accessToken } = useAppSelector(state => state.root.auth);
  // const { user: auth0User, getCredentials } = useAuth0();

  // useEffect(() => {
  //   if (auth0User) {
  //     getCredentials().then(credentials => {
  //       console.log('HomeScreen credentials', credentials?.accessToken);
  //     });
  //   }
  // }, [getCredentials, auth0User]);

  // console.log('HomeScreen user', auth0User);

  const route = useRoute<HomeStackScreenProps<'HomeScreen'>['route']>();

  // console.log('HomeScreen route', route);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      {/* Flatlist Header Component */}
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1, padding: 10 }}>
        <MediaFlatlist
          assets={[
            {
              uri: 'https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg',
              type: 'image/jpeg',
            },
            {
              uri: 'https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg',
              type: 'image/jpeg',
            },
          ]}
        />
      </ScrollView>
      {/* <PullToRefreshList /> */}
    </View>
  );
};

export default HomeScreen;

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: inset.top,
      paddingBottom: inset.bottom,
      paddingLeft: inset.left,
      paddingRight: inset.right,
      backgroundColor: theme.colors.backdrop,
    },
  });
