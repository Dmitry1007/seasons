import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasonDisplay = season === "winter" ?
    { text: "Burr it's chilly", icon: "snowflake" } :
    {text: "Let's go to the beach", icon: "sun"}

  return (
    <div>
      <i className={`${seasonDisplay.icon} icon big`} />
      <h1>{seasonDisplay.text}</h1>
      <i className={`${seasonDisplay.icon} icon big`} />
    </div>
  )
};

export default SeasonDisplay;
