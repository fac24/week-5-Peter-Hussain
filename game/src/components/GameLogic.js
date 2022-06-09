// export default function GameLogic({ githubUsers }) {
//   console.log("hi");
// }

// //shuffle the array

// // render the shufffled array into cards each card will take id + img
// // if id matches keep the card displied else flipback

// let githubUsers = [
//   "sofer",
//   "reubengt",
//   "oliverjam",
//   "Albadylic",
//   "lascellesabercrombie",
//   "Bereketmebrahtu",
//   "minju25kim",
//   "AsmahanM",
// ];

// let id = 0;

// let userURL = [];

// let jsxArray = [];

// githubUsers
//   .forEach((user) =>
//     React.useEffect(() => {
//       fetch(`https://api.github.com/users/${user}`)
//         .then((res) => res.json())
//         .then((data) => setObj(data))
//         .then(() => userURL.push({ id: id++, userUrl: obj.avatar_url }));
//     }, [obj])
//   )
//   .then(() =>
//     userURL.forEach((user) =>
//       gitHubUsers.push(<GameCard id={user.id} img={user.avatar_url} />)
//     )
//   );

// console.log(jsxArray, "jsx array");
// console.log(userURL, "userurl array");

// // if (jsxArray.length === 8) {
// //   return <div className="game-card-container">{jsxArray}</div>;
// // }
