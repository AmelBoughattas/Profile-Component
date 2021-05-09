import './App.css';
import MyAddress from './Component/Profile/Address';
import MyFullName from './Component/Profile/FullName';
import MyProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
  <div className="App">
   <MyFullName/>
   <MyProfilePhoto/>
   <MyAddress/>
   </div>
  );
}
export default App;
