//Imperative 

let items = [
    {
      title: 'Breath of the Wild',
      price: 49.99
    },
    {
      title: 'The Minish Cap',
      price: 29.99
    },
    {
      title: 'Twilight Princess',
      price: 49.99
    }
  ];
  
  // calculate the discount of 50% off
  const Imperative = [];

  for (let i = 0; i < items.length; i++) {
  
    discountedItems.push({
      title: items[i]['title'],
      price: items[i]['price'] * 0.5
    });
  }
  

//Declarative

const Declarative = items.map((item) => {
    return {
      title: item.title,
      price: item.price * 0.5
    }
  })