import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, botArmy, setBotArmy, setBotData, setActiveBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setBotData={setBotData} setActiveBot={setActiveBot}/>

          ))}
      </div>
    </div>
  );
}

export default BotCollection;
