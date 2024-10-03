export default function Message() {
    function handleClick() {
        console.log("You clicked the button");
    }

    return (
        <div>
            <button onClick={handleClick}>Click here to get a message</button>
        </div>
    )
}