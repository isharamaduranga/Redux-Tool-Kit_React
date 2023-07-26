import Counter from './components/Counter/Counter';
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import {useSelector} from "react-redux";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return (
        <>
            <Header/>
            {!isAuth && <Auth/>}
            {isAuth && <><UserProfile/><Counter/></>}

        </>

    );
}

export default App;