import { connect } from "react-redux";
import Main from './Main';

//connecting the store to the main component
//get the state and map it to props
function mapStateToProps(state){
    return {
        users:state
    }
}

const App = connect(mapStateToProps)(Main)
export default App;