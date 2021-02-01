import Layout from "./layouts/Layout";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProjectContainer from "./containers/ProjectContainer";
import StudyContainer from "./containers/StudyContainer";
import SignIn from "./screens/SignIn&SignUp/SignIn";
import SignUp from "./screens/SignIn&SignUp/SignUp";
import Home from "./screens/Home&Landing/Home";
import Landing from "./screens/Home&Landing/Landing";
import { loginUser, signupUser, verifyUser, removeToken } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleSignup = async (signupData) => {
    const userData = await signupUser(signupData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path='/login'>
          <SignIn handleLogin={handleLogin}
          />
        </Route>
        <Route path='/signup'>
          <SignUp
            handleSignup={handleSignup}
          />
        </Route>
        <Route path="/projects">
          <ProjectContainer
            currentUser={currentUser}
          />
        </Route>
        <Route path="/study">
          <StudyContainer
            currentUser={currentUser}
          />
        </Route>
        <Route path="/home">
          <Home
            currentUser={currentUser}
          />
        </Route>
        <Route path='/' component={Landing} />
      </Switch>

    </Layout>
  );
}

export default App;
