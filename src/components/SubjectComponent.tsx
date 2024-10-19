import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../styles/Color';
import scaleFont from '../styles/FontScaler';

type SubjectComponentProps = PropsWithChildren<{
  item: {
    name: string;
    id: number;
    to_param: number;
  };
}>;

const SubjectComponent = ({item}: SubjectComponentProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Icon name="book-open" size={scaleFont(14)} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default SubjectComponent;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: Colors.darkGrey,
    fontSize: scaleFont(12),
    fontWeight: '500',
    marginLeft: 14,
  },
});
