import { useEffect, useState } from "react";
import GameCard from "./GameCard";

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
  "Rich-Harris",
  "sonianb",
  "AsmahanM",
];

function shuffle(array) {
  let arrayLength = array.length;
  // var m = array.length, t, i;
  let i;
  let j;

  // While there remain elements to shuffle…

  while (arrayLength) {
    i = Math.floor(Math.random() * arrayLength--);
    j = array[arrayLength];

    array[arrayLength] = array[i];
    array[i] = j;
  }
  return array;
}

export default function GameCardContainer() {
  const [users, setUsers] = useState([]);

  // best placed to console log

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

  if (users.length === 16) {
    return (
      <div className="game-card-container">
        {users.map((item, key) => (
          <GameCard id={key} img={item.avatar_url} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="game-card-container logo black">
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
