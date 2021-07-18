import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from '../../components/ListItem';
import colors from '../../config/colors';
import * as listActions from '../../redux/actions/listActions';
export default function List({navigation}) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.listReducer.data);

  React.useEffect(() => {
    dispatch(listActions.fetchData());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentStyle}
        data={data}
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
  contentStyle: {paddingBottom: 40, backgroundColor: colors.white},
});
