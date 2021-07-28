import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Empty from '../../components/Empty';
import ListItem from '../../components/ListItem';
import colors from '../../config/colors';
import * as listActions from '../../redux/actions/listActions';
export default function List({navigation}) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.listReducer.searchData);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    dispatch(listActions.fetchData());
  }, [navigation]);

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    setQuery(text);
    dispatch(listActions.searchList(formattedQuery));
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={query}
              onChangeText={queryText => handleSearch(queryText)}
              placeholder="Search"
              placeholderTextColor={colors.warmGrey}
              style={styles.headerInput}
            />
          </View>
        }
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentStyle}
        data={data}
        ListEmptyComponent={() => <Empty />}
        renderItem={({item, index}) => (
          <ListItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  contentStyle: {
    flexGrow: 1,
    paddingBottom: 40,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.warmGrey,
  },
  headerInput: {
    paddingHorizontal: 20,
  },
});
