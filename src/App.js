import './App.css';
import { LoginForm } from './form/form';
import { UserList } from './user/user';
import { RegisterForm } from './form/form';


function App() {
  console.log("App rendered");

  return (
    <div className="App">
      <LoginForm/>
      <RegisterForm/>
      <UserList/>
    </div>
  );
}

export default App;
