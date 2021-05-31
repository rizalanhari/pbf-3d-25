import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./routes/protectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function Root(props) {
    const { isAuthenticated, isVerifying } = props;
    return (
        <Switch>
            <ProtectedRoute
                exact
                path="/"
                component={Home}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
            />

            <Route name="Login" path="/login" component={Login} />
            <Route name="Register" path="/register" component={Register} />
        </Switch>
    );
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}

export default connect(mapStateToProps)(Root);