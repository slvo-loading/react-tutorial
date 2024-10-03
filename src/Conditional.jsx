import Welcome from './Welcome';
import Code from './Code';

export default function Conditional() {
  let message;
  const display = true;
  // return !display ? <h1>This is message1</h1> : <h2>This is message2</h2>;
  return display ? <Welcome/> : <Code />;
}

// if (!display) {
//   message = <h1>This is message 1</h1>;
// } else {
//   message = <h2>This is message 2</h2>;
// }
//   return message;

//conditionally render jsx
//   if (display) {
//     return (
//       <div>
//         <h3>this is a conditional component</h3>
//         <h3>i love my wife!!!</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3>this is a conditional component</h3>
//         <h3>code everyday</h3>
//       </div>
//     );
//   }
//conditionally render components
// //two return => bad practice use component variables
//     if(display){
//         return <Welcome />
//     } else {
//         return <Code />
//     }
