import LoginPage from './pages/LoginPage.js'
import LandingPage from './pages/LandingPage.js'
import CreateAccountPage from './pages/CreateAccountPage'
import { useState } from 'react';


function App() {

  const[navigation, setNavigation] = useState("loginPage");

  const[database , setDatabase] = useState([ {username: 'admin', password: '123'}, {username: 'admin2', password: '123123'}]);
  

  
if (navigation === "loginPage") {
  return <LoginPage navigation={navigation} setNavigation={setNavigation} database={database} setDatabase={setDatabase}/>
} else if(navigation === "createAccount") {
  return <CreateAccountPage navigation={navigation} setNavigation={setNavigation} database={database} setDatabase={setDatabase}/>
} else if(navigation === "landingPage") {
  return <LandingPage navigation={navigation} setNavigation={setNavigation}/>
}
  
}

export default App;
