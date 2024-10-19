import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Dimension from '../styles/Dimension';
import scaleFont from '../styles/FontScaler';
import Colors from '../styles/Color';
const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingCard}>
        <ActivityIndicator size="large" color={Colors.darkText} />
        <Text style={styles.loadingText}>Loading . . . .</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    position: 'absolute',
    height: Dimension.height,
    width: Dimension.width,
  },
  loadingCard: {
    backgroundColor: Colors.white,
    width: '70%',
    height: '20%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: scaleFont(18),
    color: Colors.darkText,
  },
});

export default LoadingComponent;
