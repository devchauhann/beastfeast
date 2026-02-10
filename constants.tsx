
import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Beast Classic Burger',
    description: 'Soft potato bun, grass-fed beef, melted cheddar, and our secret beast sauce.',
    price: 12.50,
    category: 'burgers',
    image: 'https://picsum.photos/seed/burger1/600/400',
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Truffle Melt',
    description: 'Double patty with truffle-infused mayo, Swiss cheese, and caramelized onions.',
    price: 15.00,
    category: 'burgers',
    image: 'https://picsum.photos/seed/burger2/600/400'
  },
  {
    id: '3',
    name: 'Cloud Fries',
    description: 'Fluffy triple-cooked fries dusted with herb salt and Parmesan.',
    price: 6.50,
    category: 'sides',
    image: 'https://picsum.photos/seed/fries/600/400',
    badge: 'Popular'
  },
  {
    id: '4',
    name: 'Peach Fizz',
    description: 'Refreshing peach nectar blended with sparkling soda and fresh mint.',
    price: 4.50,
    category: 'drinks',
    image: 'https://picsum.photos/seed/drink1/600/400'
  },
  {
    id: '5',
    name: 'Vanilla Beast Shake',
    description: 'Ultra-creamy Madagascan vanilla topped with toasted marshmallows.',
    price: 7.00,
    category: 'drinks',
    image: 'https://picsum.photos/seed/shake/600/400'
  },
  {
    id: '6',
    name: 'Mochi Brownie',
    description: 'Chewy, fudgy brownie pieces served with a scoop of miso caramel ice cream.',
    price: 8.00,
    category: 'desserts',
    image: 'https://picsum.photos/seed/dessert/600/400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex J.',
    text: 'Literally the softest burger I\'ve ever had. It felt like a hug for my stomach. 10/10 vibes.',
    handle: '@alex_eats',
    avatar: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    id: '2',
    name: 'Sarah Kim',
    text: 'The Peach Fizz is life-changing. I study here every Tuesday because the aesthetic is so calming.',
    handle: '@sarah.studies',
    avatar: 'https://picsum.photos/seed/avatar2/100/100'
  },
  {
    id: '3',
    name: 'Leo M.',
    text: 'BeastFeast is the only place that gets "premium affordable" right. Every bite is high quality.',
    handle: '@leo_the_beast',
    avatar: 'https://picsum.photos/seed/avatar3/100/100'
  }
];
