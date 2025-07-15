import { ProfessionalChef, BestQualityFood, OnlineSupport } from "./Icons";
import pizzaImg1 from '../assets/images/webp/pizza-img.png';
import pizzaImg2 from '../assets/images/webp/pizza-img2.png';
import tandooriPizza from '../assets/images/webp/tandoori-pizza.png';
import cheesePizza from '../assets/images/webp/cheese-pizza.png';
import veggiePizza from '../assets/images/webp/veggie-pizza.png';
import masalaPizza from '../assets/images/webp/masala-pizza.png';
import farmhousePizza from '../assets/images/webp/farmhouse-pizza.png';
import pannerPizza from '../assets/images/webp/panner-pizza.png';
import soloMeal from '../assets/images/webp/solo-meal.png';

export const NAV_ITEMS = [
    { label: 'Home', link: '#home' },
    { label: 'Menu', link: '#menu' },
    { label: 'Customize Pizza', link: '#customize' },
    { label: 'Offers', link: '#offers' },
    { label: 'About Us', link: '#about' },
];

export const CARD_ITEMS = [
    {
        icon: ProfessionalChef,
        label: 'Professional Chefs',
    },
    {
        icon: BestQualityFood,
        label: 'Fresh Ingredients',
    },
    {
        icon: OnlineSupport,
        label: 'Authentic Taste',
    },
];

export const PROMO_ITEMS = [
    {
        topText: "Delicious",
        middleText: "Spicy Paneer",
        bottomText: "Limited Time",
        buttonText: "Order Now",
        bgImg: pizzaImg1,
    },
    {
        topText: "Delicious",
        middleText: "CHEESE BURST",
        bottomText: "Limited Time",
        buttonText: "Order Now",
        bgImg: pizzaImg2,
    },
];
export const PIZZA_DATA = [
    {
        name: "Tandoori Paneer",
        price: 279,
        img: tandooriPizza,
        desc: "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs",
    },
    {
        name: "Cheese Overload",
        price: 299,
        img: cheesePizza,
        desc: "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce, buttery golden crust",
    },
    {
        name: "Veggie Fiesta",
        price: 239,
        img: veggiePizza,
        desc: "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese",
    },
    {
        name: "Masala Paneer",
        price: 249,
        img: masalaPizza,
        desc: "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese",
    },
];

export const MENU_CATEGORIES = [
    { name: "All", active: true },
    { name: "Veg Pizzas" },
    { name: "Non-Veg Pizzas" },
    { name: "Combos & Drinks" },
    { name: "Sides & Dips" },
];

export const CRAVINGS_MENU = [
    {
        img: farmhousePizza,
        prices: ["₹229", "₹359", "₹499"],
        title: "Farmhouse Magic",
        desc: "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
        rating: 5,
    },
    {
        img: pannerPizza,
        prices: ["₹279", "₹399", "₹519"],
        title: "Masala Paneer",
        desc: "Masala-marinated paneer, sautéed onions, capsicum, mozzarella cheese",
        rating: 5,
    },
    {
        img: soloMeal,
        prices: ["₹379"],
        title: "Solo Meal Combo",
        desc: "1 Regular Pizza + Garlic Bread + 1 Soft Drink",
        rating: 5,
    },
];

export const FEATURES = [
    "30-Minute Delivery Promise",
    "Hygienic, Contactless Delivery",
    "Real-time Order Tracking",
    "Eco-Friendly Packaging"
];