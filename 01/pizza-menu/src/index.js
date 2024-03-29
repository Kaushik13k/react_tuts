import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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
      <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, and pepperoni"
        price="15"
        photoName="img/salamino.jpg"
      />
    </main>
  );
};


function Pizza(props) {
    return (
      <div className="pizza">
        <img src={props.photoName} alt={props.name}></img>
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
        </div>
      </div>
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
