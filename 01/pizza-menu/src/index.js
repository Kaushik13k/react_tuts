import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "img/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "img/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "img/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "img/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "img/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "img/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Menu = (props) => {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (<Pizza pizzaObjeact={pizza} key={pizza.name}/>))}
      </ul>

    </main>
  );
};


function Pizza(props) {
    return (
      <li className="pizza">
        <img src={props.pizzaObjeact.photoName} alt={props.pizzaObjeact.name}></img>
        <div>
            <h3>{props.pizzaObjeact.name}</h3>
            <p>{props.pizzaObjeact.ingredients}</p>
        </div>
      </li>
    );
  }

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
};

const Footer = () => {
  // const hour = new Date().getHours();
  // const openHour = 10;
  // const closedHour = 22;
  // console.log(hour)

  // if (hour >= openHour && hour < closedHour){
  //     alert("We're open!");
  // }else{
  //     alert("We're closed!");
  // }
  return (
    <footer className="footer">
      {" "}
      {new Date().toLocaleDateString()}. We're currently open!
    </footer>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
