import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import ToggleButton from '../components/ToggleButton'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton)

export default FilterButton
