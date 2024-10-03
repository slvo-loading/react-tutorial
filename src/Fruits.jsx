import Fruit from './Fruit';

export default function Fruits() {
  //   const fruits = [
  //     'banana',
  //     'grape',
  //     'honeydew',
  //     'jackfruit',
  //     'kiwi',
  //     'mango',
  //     'orange',
  //   ];

  const fruits = [
    { name: 'banana', price: 7.0, emoji: '🍌', soldout: true },
    { name: 'grape', price: 2.0, emoji: '🍇', soldout: false },
    { name: 'honeydew', price: 3.0, emoji: '🍈', soldout: false },
    { name: 'mango', price: 8.0, emoji: '🥭', soldout: false },
    { name: 'orange', price: 5.0, emoji: '🍊', soldout: true },
  ];

  return (
    // <div>
    //   {fruits.map((fruit) => (
    //     // <h1>{fruit}</h1>
    //     <li key={fruit.name}>{fruit.emoji} {fruit.name} ${fruit.price}</li>
    //   ))}
    // </div>
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}>
          //     {fruit.emoji} {fruit.name} ${fruit.price}
          // </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
