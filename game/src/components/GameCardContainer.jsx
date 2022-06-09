import React from "react";
import GameCard from "./GameCard";

let userUrl = [];

async function fetchUser(user) {
  fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((data) => userUrl.push(data));
}
let githubUsers = [
  "sofer",
  "reubengt",
  "oliverjam",
  "Albadylic",
  "lascellesabercrombie",
  "Bereketmebrahtu",
  "minju25kim",
  "AsmahanM",
];

githubUsers.map((user) => {
  fetchUser(user);
});

export default function GameCardContainer() {
  const [username, setUsername] = React.useState(userUrl);

  return (
    <div className="game-card-container">
      <GameCard id="1" key="1" img={userUrl[0].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[1].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[2].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[3].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[4].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[5].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[6].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[7].avatar_url} />

      <GameCard id="1" key="1" img={userUrl[0].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[1].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[2].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[3].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[4].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[5].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[6].avatar_url} />
      <GameCard id="1" key="1" img={userUrl[7].avatar_url} />
    </div>
  );
}

// if (userUrl.length === 8) {
//   return (
//     <div className="game-card-container">
//       {userUrl.map((item, key) => (
//         <GameCard key={key} img={item.avatar_url} />
//       ))}
//     </div>
//   );
// } else {
//   return <div className="game-card-container">loading</div>;
// }
