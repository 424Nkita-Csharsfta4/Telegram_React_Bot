import pizzaImg from "../images/pizzas.jpg";
import burgerImg from "../images/pizzas.jpg";
import cocaImg from "../images/pizzas.jpg";
import saladImg from "../images/pizzas.jpg";
import waterImg from "../images/pizzas.jpg";
import iceCreamImg from "../images/pizzas.jpg";
import kebabImg from "../images/pizzas.jpg";

export function getData() {
  return [
    { title: "Программа на 3дн", price: 30, Image: pizzaImg,id:1 },
    { title: "Программа на 7дн", price: 65, Image: burgerImg,id:2 },
    { title: "Программа на 14дн", price: 120, Image: cocaImg ,id:3},
    { title: "Программа на 21дн", price: 230, Image: kebabImg,id:4 },
    { title: "Программа на 1мес", price: 500, Image: saladImg,id:5 },
    { title: "Программа на 2мес", price: 1000, Image: waterImg,id:6 },
    { title: "Программа на 3мес", price: 2000, Image: iceCreamImg,id:7 },
  ];
}
