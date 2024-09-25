// fill out this container
import { bindActionCreators } from "redux";
import Import from "../components/Import"
import { fetchMakes, removeCar } from "../redux/actions";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    makes: state.makes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMakes, removeCar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)