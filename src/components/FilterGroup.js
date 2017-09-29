import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterButton from '../containers/FilterButton'

const FilterGroup = () => (
  <View style={styles.container}>
    <FilterButton filter="SHOW_ALL">
      <Text style={styles.filterText}>All</Text>
    </FilterButton>
    <FilterButton filter="SHOW_ACTIVE">
      <Text style={styles.filterText}>Active</Text>
    </FilterButton>
    <FilterButton filter="SHOW_COMPLETED">
      <Text style={styles.filterText}>Completed</Text>
    </FilterButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  filterText: {
    color: 'white'
  }
})

export default FilterGroup;