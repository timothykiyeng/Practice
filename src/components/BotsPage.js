import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [botData, setBotData] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [activeBot, setActiveBot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBotData(data));
  }, []);
  //console.log(botData)
  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        setBotArmy={setBotArmy}
        setBotData={setBotData}
      />
      {activeBot ? (<BotSpecs bot={activeBot} setActiveBot={setActiveBot} setBotArmy={setBotArmy}/>
      ) : (
        <BotCollection
          setBotArmy={setBotArmy}
          bots={botData}
          botArmy={botArmy}
          setBotData={setBotData}
          setActiveBot={setActiveBot}
        />
      )}
    </div>
  );
}

export default BotsPage;
