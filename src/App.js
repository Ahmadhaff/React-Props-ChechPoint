import "./App.css";
import MyInfos from "./Profile/MyInfos";
import ProfileFrom from "./Profile/ProfileFrom";
import Card from "./Card/Card.js"


function App() {
  const fullName = "Haffoudhi Ahmad";
  const age = 23;
  const bio = "fullStack developper";
  const profession = "student";
  const object={marginTop: "150px" , marginLeft:"500px"}

  return (
    <div className="App">
      <MyInfos />
      <ProfileFrom
        fullName={fullName}
        age={age}
        bio={bio}
        profession={profession}
      />
      <Card style={object}/>
     
    </div>
  );
}
export default App;
