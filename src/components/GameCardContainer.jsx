import React, { useEffect, useState } from "react";

import GameCard from "./GameCard";
import Broccoli from "./Broccoli";

// fetch data from github for each user
//write a function fetch the userInfo from the api
// set the state to the an array of all user object from github
//then render it
let githubUsers = [
  "sofer",
  "reubengt",
  "oliverjam",
  "Albadylic",
  "lascellesabercrombie",
  "Bereketmebrahtu",
  "sonianb",
  "AsmahanM",
];

function shuffle(array) {
  let arrayLength = array.length;
  // var m = array.length, t, i;
  let i;
  let j;

  // While  remain elements to shuffle…

  while (arrayLength) {
    i = Math.floor(Math.random() * arrayLength--);
    j = array[arrayLength];

    array[arrayLength] = array[i];
    array[i] = j;
  }
  return array;
}

// we need target the img querey selector
// we need to find the first value card and second value you card
//taget images based on id
// place them in sparet var
// match them based on classes

// function clickFace() {
//   const [click, setClicks] = useState(0);
//   const [state, setState] = useState(null);

//   let target = e.target;
//   let targetId = e.target.id;
//   setState(target);
//   useEffect(() => {
//     console.log(state);
//   }, [state]);
// }

export default function GameCardContainer() {
  // best placed to console log
  const [users, setUsers] = useState([]);
  const [name, setName] = React.useState(null);
  const [winner, setWinner] = React.useState(false);
  const [imgClass, setImgClass] = useState("");

  useEffect(() => {
    setUsers(shuffle(users));
  }, [users]); // function will run when once users changes
  useEffect(() => {
    // only runs once because the dependency is empty. not listening for any changes.
    githubUsers.map((user) => {
      fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then((data) => setUsers((x) => [...x, data]))
        .catch((error) => console.error(error));
    });
  }, []);

  const handdleClick = (e) => {
    let img = e.target;
    img.classList.toggle("hidden");

    setImgClass(img.classList[1]);
    // console.log(name, "name state");
  };

  useEffect(() => {
    console.log(imgClass);
    console.log(name);
    if (imgClass == name) {
      console.log("click match");
      setWinner(true);
    }
  }, [imgClass]);

  if (name && !winner) {
    return (
      <div className="game-card-container">
        {users.map((item, key) => (
          <GameCard
            id={key}
            keys={item.id + key}
            img={item.avatar_url}
            className={`game-card-img hidden ${item.login}`} // game-card-img would be zero, hidden would be index 1 and item.login would be index 2
            onClick={handdleClick}
          />
        ))}
      </div>
    );
  } else if (winner) {
    return (
      <div className="game-card-container logo black">
        you found your self....time to add more broccoli to your diet
      </div>
    );
  } else {
    return (
      <div className="game-card-container logo black">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setName(event.target.username.value.toLowerCase());
          }}
        >
          <input
            type="search"
            aria-label="Search users"
            placeholder="gihub username"
            name="username"
          />
        </form>
        <div>
          <img
            className="rich"
            src="https://avatars.githubusercontent.com/u/1162160?v=4"
            alt="rich founder of svelte"
          />
        </div>
        daam react aint reacting........
      </div>
    );
  }
}

// we have search bar, user types names.
// image appears of github profile. with choice of flipped card.
// if this matches then broccoli appears.
// click button for broccoli to dance.
