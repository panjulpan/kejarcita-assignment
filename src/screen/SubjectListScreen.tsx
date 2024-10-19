import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Colors from '../styles/Color';
import scaleFont from '../styles/FontScaler';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Feather';
import {Service} from '../services';
import SubjectComponent from '../components/SubjectComponent';
import LoadingComponent from '../components/LoadingComponent';

type SubjectListProps = PropsWithChildren<{
  toolbarTitle: string;
}>;

export interface Subject {
  id: number;
  name: string;
  to_param: number;
}

const data = [
  {label: 'Kelas I', value: '1'},
  {label: 'Kelas II', value: '2'},
  {label: 'Kelas III', value: '3'},
  {label: 'Kelas IV', value: '4'},
  {label: 'Kelas V', value: '5'},
  {label: 'Kelas VI', value: '6'},
  {label: 'Kelas VII', value: '7'},
  {label: 'Kelas VIII', value: '8'},
  {label: 'Kelas IX', value: '9'},
  {label: 'Kelas X', value: '10'},
  {label: 'Kelas XI', value: '11'},
  {label: 'Kelas XII', value: '12'},
];

const SubjectListScreen = ({toolbarTitle}: SubjectListProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState('');
  const [listSubject, setListSubject] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchSubject = useCallback(async () => {
    setisLoading(true);
    try {
      const res = await Service.getSubject(selectedValue);

      if (res.data !== undefined) {
        setListSubject(res.data);
      }
      setisLoading(false);
    } catch (error) {
      console.error('error: ', error);
      setisLoading(false);
    }
  }, [selectedValue]);

  const renderItem: ListRenderItem<Subject> = ({item}) => {
    return <SubjectComponent item={item} />;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponent}>
        <Icon name="archive" size={scaleFont(100)} style={styles.iconStyle} />
        <Text style={styles.emptyComponentText}>
          Data masih kosong, silakan pilih jenjang terlebih dahulu...
        </Text>
      </View>
    );
  };

  useEffect(() => {
    fetchSubject();
  }, [fetchSubject]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>{toolbarTitle}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.dropdownTitle}>Pilih Jenjang:</Text>
        <Dropdown
          style={styles.dropdownStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={selectedValue}
          onChange={item => {
            setSelectedValue(item.value);
          }}
          placeholder="Silakan pilih jenjang..."
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        />
        <Text style={styles.dropdownTitle}>Daftar Mata Pelajaran:</Text>
        <FlatList
          data={listSubject}
          keyExtractor={(item: Subject) => item.id.toString()}
          renderItem={renderItem}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
          // contentContainerStyle={styles.flatlistContainer}
        />
      </View>
      {isLoading && <LoadingComponent />}
    </SafeAreaView>
  );
};

export default SubjectListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
    flex: 1,
  },

  dropdownTitle: {
    color: Colors.darkText,
    fontSize: scaleFont(13),
    fontWeight: '500',
    marginBottom: 8,
  },

  dropdownStyle: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderColor: Colors.lightGrey,
    marginBottom: 18,
  },

  placeholderStyle: {
    fontSize: scaleFont(13),
    color: Colors.grey,
  },

  selectedTextStyle: {
    fontSize: scaleFont(13),
    color: Colors.darkText,
  },

  flatlistContainer: {flex: 1},

  emptyComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '35%',
  },

  iconStyle: {marginBottom: 24},

  emptyComponentText: {
    textAlign: 'center',
    fontSize: scaleFont(16),
  },
});
