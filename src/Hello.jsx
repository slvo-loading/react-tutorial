const name = "Sydney";

// function displayMessage() {
//     return "Wow!";
// }

function Hello({person}) {
    return (
    // <h1>Hello from a component! {displayMessage()}</h1>
    <div>
        <h1>
            {person.name}!
        </h1>
    </div>
    )
}

export default Hello;