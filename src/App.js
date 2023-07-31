import { useEffect, useState } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import MyBotArmy from './MyBotArmy';




function App() {
  const [bots,setBots]=useState([])
  const [army,setArmy]=useState([])

  function enlist(bot){
   // if(army.includes(bot)) return; //This line checks if  bot is already present in the "army" list or not.It uses the includes() method to check if the value of bot is present in the array army. If bot is in the "army" list, the function immediately returns without doing anything else,
    setArmy((army)=>[...army,bot])//this line adds the bot to the "army" list. It uses the spread operator ... to create a new array with all the elements of the existing army array and appends the bot to the end.

  }

  console.log(army);
  function retire(bot){
    setArmy((army) => army.filter((item) => item.id !== bot.id));
  }//it keeps all elements in the "army" list whose id is different from the id of the bot.
  function handleDelete(){

  }
  useEffect(() => {
      fetch(" http://localhost:3000/bots")
      .then(resp => resp.json())
      .then(bots => setBots(bots));
  }, []);
  return (
    <div className="App">
      <MyBotArmy  army={army} onRetire={retire} onDelete={handleDelete}/>
      <BotCollection bots={bots}  onEnlist={enlist}/>
      
    </div>
  );
}

export default App;
