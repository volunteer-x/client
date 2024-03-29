import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Alert, Pressable, ScrollView, StatusBar, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import {
  Text,
  Divider,
  TextInput,
  MD3Colors,
  IconButton,
} from 'react-native-paper';

import { ImagePickerResponse, Asset } from 'react-native-image-picker';

import Ionicon from 'react-native-vector-icons/Ionicons';

import { PingStackParamList } from '@app/types/type';
import useAppTheme from '@hooks/useAppTheme';
import { SIZES } from '@app/lib';
import GoogleStaticMaps from '@components/google-static-map';

import { MediaTypeView, PicksIcon, TextInputEnhanced } from '@app/components';
import { MediaFlatlist } from '@app/components/swiper-flatlist';
import { useGeoLocation } from '@app/context/geo-location';
import { getReverseGeocoding } from '@app/utils/reverse-geocoding';
import EmptyPickView from '../components/empty-pick-view';
import { findPickFromLabel } from '@app/utils/pick-finder';
import { AppIcons } from '@app/theme/icon';
import { useCreatePing } from '../hooks/useCreatePing';
import { makeStyles } from './ping.style';

export const PingFinalPage = ({
  route,
  navigation,
}: {
  navigation: NavigationProp<PingStackParamList, 'FinalPage'>;
  route: RouteProp<PingStackParamList, 'FinalPage'>;
}) => {
  // Themeing
  const { theme } = useAppTheme();
  const styles = makeStyles(theme);

  // Navigation
  const { point } = route.params;

  // Media handling
  const mediaTypeRef = useRef<{ getResponse: () => ImagePickerResponse }>(null);

  // States
  const [assets, setAssets] = useState<Array<Asset>>();
  const [showUrl, setShowUrl] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  // * Get current location
  const { coords: myLocation } = useGeoLocation();

  // * Get selected point
  const [selectedPoint, setSelectedPoint] = useState<GeoJSON.Position>([
    10, 10,
  ]);

  // * Update selected point if current location changes
  // ! possible bug when user location changes
  useEffect(() => {
    if (
      selectedPoint[1] !== myLocation.latitude ||
      selectedPoint[0] !== myLocation.longitude
    ) {
      setSelectedPoint([myLocation.longitude, myLocation.latitude]);
    }
  }, [myLocation, selectedPoint]);

  // * Get reverse geocoding
  const [place, setPlace] = useState<string>();
  // * Get picks
  const [picks, setPicks] = useState<Array<string>>([]);

  // * Update place on navigation back
  useEffect(() => {
    if (route.params && point) {
      setSelectedPoint(point);
    }

    getReverseGeocoding(selectedPoint)
      .then(value => setPlace(value))
      .catch(e => console.error(e));
  }, [myLocation, point, route.params, selectedPoint]);

  // * Navigate to pick select screen
  const navigateToPickSelect = () => {
    navigation.navigate('SelectPicks', { picks });
  };

  // * Update picks on navigation back
  useEffect(() => {
    if (route.params && route.params.picks) {
      setPicks(route.params.picks);
    }
  }, [picks, route.params]);

  const textInputProps = {
    contentStyle: styles.textInputContent,
    underlineColor: 'transparent',
    activeUnderlineColor: 'transparent',
    cursorColor: theme.colors.primary,
    placeholderTextColor: theme.colors.onSurfaceDisabled,
    textColor: theme.colors.onSurface,
  };

  // * Handle media type response
  const _onMediaTypeResponse = useCallback(
    ({
      didCancel,
      errorCode,
      errorMessage,
      assets: newAssets,
    }: ImagePickerResponse) => {
      // * Do nothing on cancel
      if (didCancel) {
        return;
      }

      // Todo Handle on error
      if (errorCode && errorMessage) {
        console.error(errorCode, errorMessage);
        return;
      }

      /*
      Todo Handle different usecases
      * if user selects media again, concat new assets with old assets
      * check for repeated data
    */
      if (newAssets) {
        setAssets(newAssets);
      }
    },
    [setAssets],
  );

  useEffect(() => {
    if (showUrl || (assets && assets?.length > 0)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [assets, showUrl]);

  // * Get title text
  const [titleText, setTitleText] = useState<string>('');
  const [titleError, setTitleError] = useState<boolean>(false);

  // * Get description text
  const [descriptionText, setDescriptionText] = useState<string>('');

  // * Get url text
  const [urlText, setUrlText] = useState<string | undefined>();

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    useState<boolean>(false);

  /*
   * Handle text changes
    @param text : string , title
   */
  const handleTitleTextChange = (text: string) => {
    setTitleText(text);
    if (text.trim().length > 0) {
      setTitleError(false);
    }
  };

  /*
    * Handle text changes
    @param text : string , description
  */
  const handleDescriptionTextChange = (text: string) => {
    setDescriptionText(text);
  };

  // * Prevent user from going back if title is empty
  useEffect(() => {}, []);

  // * useCreatePing
  const { createPing, loading } = useCreatePing();

  const handleOnSubmit = useCallback(async () => {
    if (titleText.length === 0 || picks.length === 0) {
      Alert.alert('Ping', 'Please enter a title and select at least one pick');
    } else if (titleText.length === 0) {
      // * Show error
      // ! Change to modal
      Alert.alert('Ping', 'Please enter a title');
      return;
    } else if (picks.length === 0) {
      // * Show error
      // ! Change to modal
      Alert.alert('Ping', 'Please select at least one pick');
      return;
    } else {
      // * Create ping
      const ping = await createPing({
        title: titleText,
        description: descriptionText,
        picks,
        point: selectedPoint,
        url: urlText,
        assets,
      });

      // * Navigate to Home screen

      navigation.getParent()?.navigate('Nearby');

      // navigation.getParent()?.reset({
      //   index: 0,
      //   routes: [
      //     {
      //       name: 'Nearby',
      //       params: {
      //         screen: '',
      //         params: {
      //           // ping: ping,
      //           // loading: loading,
      //         },
      //       },
      //     },
      //   ],
      // });
    }
  }, [
    assets,
    createPing,
    descriptionText,
    navigation,
    picks,
    selectedPoint,
    titleText,
    urlText,
  ]);

  // * Render header right
  // * Handle submit button
  const headerRight = useCallback(() => {
    return (
      <IconButton
        icon={AppIcons.SEND}
        iconColor="green"
        onPress={handleOnSubmit}
        disabled={isSubmitButtonDisabled}
      />
    );
  }, [handleOnSubmit, isSubmitButtonDisabled]);

  const closeButton = useCallback(() => {
    return (
      <Ionicon
        name={AppIcons.CLOSE}
        size={SIZES.large}
        onPress={() => {
          navigation.goBack();
        }}
        style={{ padding: SIZES.medium }}
      />
    );
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Ping',
      headerLeft: closeButton,
      headerRight,
      headerStyle: styles.header,
      headerRightContainerStyle: {
        paddingRight: SIZES.small,
      },
      headerLeftContainerStyle: {
        paddingRight: SIZES.small,
      },
    });
  }, [closeButton, headerRight, navigation, styles.header]);

  return (
    <View style={styles.superContainer}>
      <StatusBar backgroundColor={MD3Colors.neutral0} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Picks */}
          <View style={[styles.subContainer, styles.picksContainer]}>
            {picks.length > 0 ? (
              <View style={styles.picksHorizontalContainer}>
                {picks.map(label => {
                  let _pick = findPickFromLabel(label);
                  return (
                    <View
                      key={label}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        margin: 5,
                        padding: 10,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#f9f9f9',
                        backgroundColor: '#000',
                      }}>
                      <PicksIcon
                        icon={_pick.icon}
                        size={SIZES.small}
                        containerStyle={styles.iconContainerStyle}
                      />
                      <Text>{label}</Text>
                    </View>
                  );
                })}
                {
                  <Pressable
                    style={[
                      styles.chip,
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                        backgroundColor: '#282a2f',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                      },
                    ]}
                    onPress={navigateToPickSelect}>
                    <Ionicon
                      name={picks.length < 5 ? 'add-outline' : 'create'}
                      size={SIZES.medium}
                      style={{}}
                    />
                    <Text>{picks.length < 5 ? 'Add more' : 'Edit picks'}</Text>
                  </Pressable>
                }
              </View>
            ) : (
              <EmptyPickView onClickEmptyScreen={navigateToPickSelect} />
            )}
          </View>

          {/* Media */}
          <View
            style={{
              maxHeight: 200,
              overflow: 'hidden',
              borderRadius: SIZES.medium,
            }}>
            <MediaFlatlist assets={assets} />
          </View>

          {/* Text & URL */}
          <View style={[styles.subContainer]}>
            <TextInputEnhanced
              multiline
              maxLength={80}
              minLength={10}
              required={titleError}
              dense
              textContentType="none"
              blurOnSubmit
              style={[styles.textInput, { fontSize: 14 }]}
              {...textInputProps}
              placeholder={'An interesting title'}
              onTextChanged={handleTitleTextChange}
            />

            <Divider bold style={{ marginVertical: SIZES.xxSmall }} />
            {/* URL */}
            {showUrl && (
              <View>
                <View style={styles.urlContainer}>
                  <TextInput
                    placeholder="Enter the website link"
                    style={[styles.textInput, { flex: 1 }]}
                    textContentType="URL"
                    value={urlText}
                    onChangeText={setUrlText}
                    dense
                    {...textInputProps}
                  />
                  <IconButton
                    icon={AppIcons.CLOSE}
                    onPress={() => {
                      setShowUrl(false);
                      setUrlText(undefined);
                    }}
                  />
                </View>
                <Divider bold style={{ marginVertical: SIZES.xxSmall }} />
              </View>
            )}

            {/*
             * Text Area
             */}
            <TextInputEnhanced
              maxLength={500}
              placeholder="What's happening? (Optional)"
              style={[styles.textInput, styles.textArea]}
              dense
              multiline
              value={descriptionText}
              onTextChanged={handleDescriptionTextChange}
              {...textInputProps}
            />
          </View>

          {/* Location */}
          <Pressable
            style={[styles.subContainer, { padding: 0 }]}
            // * navigates to search location screen
            onPress={() =>
              navigation.navigate('SearchLocation', { point: selectedPoint })
            }>
            <View style={styles.locationLabel}>
              <Text>
                <Text variant="bodyLarge">Change location </Text>
                <Text
                  variant="bodySmall"
                  style={{ color: MD3Colors.neutral50 }}>
                  (Optional)
                </Text>
              </Text>
              <Text variant="bodySmall" style={styles.selectedPlace}>
                {place}
              </Text>
            </View>

            <GoogleStaticMaps
              containerStyle={styles.mapContainerStyle}
              center={selectedPoint}
              size={{ height: 600, width: 300 }}
              zoom={12}
              markers={[
                { location: selectedPoint, size: 'small', color: 'black' },
              ]}
              // apiKey={MAP_API_KEY}
            />
          </Pressable>
        </View>
      </ScrollView>
      {/* Media Selections */}
      <View style={styles.mediaContainer}>
        {/* Link | Image | Video | Files */}
        <MediaTypeView
          ref={mediaTypeRef}
          onResponse={response => _onMediaTypeResponse(response)}
          disabled={disabled}
        />
        <IconButton
          icon={AppIcons.LINK}
          iconColor={theme.dark ? MD3Colors.neutral60 : MD3Colors.neutral40}
          size={SIZES.xLarge}
          style={styles.mediaTypeIcon}
          onPress={() => {
            setShowUrl(true);
          }}
          disabled={disabled}
        />
      </View>
    </View>
  );
};
