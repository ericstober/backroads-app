import tour1img from './images/tour-1.jpeg'
import tour2img from './images/tour-2.jpeg'
import tour3img from './images/tour-3.jpeg'
import tour4img from './images/tour-4.jpeg'
import tour5img from './images/tour-5.jpeg'
import tour6img from './images/tour-6.jpeg'

export const pageLinks = [
  {id: 1, href: '#home', text: 'home'},
  {id: 2, href: '#about', text: 'about'},
  {id: 3, href: '#services', text: 'services'},
  {id: 4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
  {id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
  {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
  {id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace'},
];

export const services = [
  {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
  {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
  {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
];

export const tours = [
  {
    id: 1,
    img: tour1img,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2img,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3img,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4img,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: 20,
    price: 3300,
  },
  {
    id: 5,
    img: tour5img,
    date: 'december 5th, 2019',
    title: 'zebra exploration',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Lesotho',
    duration: 12,
    price: 4400,
  },
  {
    id: 6,
    img: tour6img,
    date: 'december 5th, 2019',
    title: 'tour 6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'location 6',
    duration: 10,
    price: 2300,
  },
];
