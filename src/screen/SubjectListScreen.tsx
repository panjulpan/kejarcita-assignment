import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Colors from '../styles/Color';
import scaleFont from '../styles/FontScaler';
import {Picker} from '@react-native-picker/picker';

type SubjectListProps = PropsWithChildren<{
  toolbarTitle: string;
}>;

const SubjectListScreen = ({toolbarTitle}: SubjectListProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>{toolbarTitle}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={val => {
            console.log('test: ', val);
            setSelectedValue(val);
          }}>
          <Picker.Item label="Kelas I" value={1} />
          <Picker.Item label="Kelas II" value={2} />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default SubjectListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },

  toolbar: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    alignItems: 'center',
    paddingVertical: 14,
  },

  toolbarTitle: {
    color: Colors.darkText,
    fontSize: scaleFont(16),
    fontWeight: '500',
  },

  contentContainer: {
    padding: 26,
  },
});
