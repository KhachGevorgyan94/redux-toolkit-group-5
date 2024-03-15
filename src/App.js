import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {UserComponent} from "./components/user-component";
import {UserReducerActions} from "./store/reducers/users-reducer/actions";
import {FirmComponent} from "./components/firm-component";

function App() {
    // useSelector()
    // useDispatch()
    const dispatch = useDispatch()


    function addUser() {
        const obj = {
            firstName: 'Khachik',
            lastName: 'Gevorgyan'
        }

        dispatch({
            type: UserReducerActions.ADD_USER,
            payload: obj
        })
    }

    return (
        <div>
            {/*hello word*/}

            {/*<button onClick={addUser}>Click</button>*/}
            {/*<UserComponent/>*/}
            <FirmComponent/>

        </div>
    );
}

export default App;
