import { ProfessionalChef, BestQualityFood, OnlineSupport,ChooseIcon,OrderIcon,TrackIcon,FacebookIcon,InstagramIcon,LinkdinIcon} from "./Icons";
import pizzaImg1 from '../assets/images/webp/pizza-img.png';
import pizzaImg2 from '../assets/images/webp/pizza-img2.png';
import tandooriPizza from '../assets/images/webp/tandoori-pizza.png';
import cheesePizza from '../assets/images/webp/cheese-pizza.png';
import veggiePizza from '../assets/images/webp/veggie-pizza.png';
import masalaPizza from '../assets/images/webp/masala-pizza.png';
import farmhousePizza from '../assets/images/webp/farmhouse-pizza.png';
import pannerPizza from '../assets/images/webp/panner-pizza.png';
import soloMeal from '../assets/images/webp/solo-meal.png';
import galleryImg1 from '../assets/images/webp/gallery-img1.png';
import galleryImg2 from '../assets/images/webp/gallery-img2.png';
import galleryImg3 from '../assets/images/webp/gallery-img3.png';
import galleryImg4 from '../assets/images/webp/gallery-img4.png';
import galleryImg5 from '../assets/images/webp/gallery-img5.png';
import galleryImg6 from '../assets/images/webp/gallery-img6.png';
import galleryImg7 from '../assets/images/webp/gallery-img7.png';
import swiperImg1 from '../assets/images/webp/swiper-img1.png';
import swiperImg2 from '../assets/images/webp/swiper-img2.png';
import swiperImg3 from '../assets/images/webp/swiper-img3.png';
import swiperPizza from '../assets/images/webp/swiper-pizza.png';
 

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

export const EASY_STEPS = [
    {
        icon: ChooseIcon,
        title: 'Choose Your Pizza',
        desc: 'Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.',
    },
    {
        icon: OrderIcon,
        title: 'Place Your Order',
        desc: 'Confirm your cart, choose delivery or pickup, and pay securely — all in under a minute.',
    },
    {
        icon: TrackIcon,
        title: 'Track & Enjoy',
        desc: 'Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!',
    },
];

export const GALLERY_IMAGES = [
    { img: galleryImg1 },
    { img: galleryImg2 },
    { img: galleryImg3 },
    { img: galleryImg4 },
    { img: galleryImg5},
    { img: galleryImg6},
    { img: galleryImg7 },
];
export const AVATAR = [
    swiperImg1,
    swiperImg2,
    swiperImg3
]
export const TESTIMONIALS = [
      {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Mehta",
        role: "Software Developer",
    },

    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Mehta Ji",
        role: "Software Developer",
    },
    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Bishnoi",
        role: "Software Developer",
    },
];
export const PIZZA_IMAGES = [swiperPizza, swiperPizza, swiperPizza];

export const QUICK_LINKS = ["Home", "About Us", "Menu", "Gallery", "Testimonial", "Contact"];
export const SUPPORT_LINKS = ["Terms & Conditions", "Privacy Policy"];
export const SOCIAL_ICON = [
    {
        icon: FacebookIcon,
        socialLink: "https://www.facebook.com"
    },
    {
        icon: InstagramIcon,
        socialLink: "https://www.instagram.com"
    },
    {
        icon: LinkdinIcon,
        socialLink: "https://www.linkedin.com"
    }
]
