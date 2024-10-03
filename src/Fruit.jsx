export default function Fruit({name, emoji, price, soldout}) {
  return (<>
    {/* {emoji} {name} ${price} */}
    {/* {price > 5 ? <li>{emoji} {name} ${price}</li> : ""} */}
    <li>{emoji} {name} {price} {soldout ? "soldout" : ""}</li>
  </>);
}
