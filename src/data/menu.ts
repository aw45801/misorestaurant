export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  spicy?: boolean
  image: string
  category: 'ramen' | 'donburi'
}

export const menuItems: MenuItem[] = [
  // RAMEN
  {
    id: 'miso-ramen',
    name: 'Miso Ramen',
    description: 'A hearty and flavorful bowl of ramen soup made with miso paste and a rich broth. Topped with tender chashu pork, soft-boiled egg, bamboo shoots, and green onions.',
    price: 15,
    image: '/misoramen.png',
    category: 'ramen',
  },
  {
    id: 'shio-ramen',
    name: 'Shio Ramen',
    description: 'A light and refreshing ramen soup with a clear and delicate salt-based broth. Served with thin noodles, tender chicken, and a medley of fresh vegetables.',
    price: 16,
    image: '/shioramen.png',
    category: 'ramen',
  },
  {
    id: 'shoyu-ramen',
    name: 'Shoyu Ramen',
    description: 'A classic and popular Japanese dish made with a soy sauce-based broth. Served with thin noodles, chashu pork, bamboo shoots, and a soft-boiled egg.',
    price: 15,
    image: '/shoyuramen.png',
    category: 'ramen',
  },
  {
    id: 'curry-ramen',
    name: 'Curry Ramen',
    description: 'A fusion of Japanese and Indian cuisine, this ramen soup is made with a curry-based broth and served with tender chashu pork, soft-boiled egg, and fresh vegetables.',
    price: 13,
    spicy: true,
    image: '/curryramen.png',
    category: 'ramen',
  },
  {
    id: 'kimchi-ramen',
    name: 'Kimchi Ramen',
    description: 'A Korean-inspired ramen dish with a spicy and tangy broth made with kimchi. Served with thin noodles, tender pork belly, and a soft-boiled egg.',
    price: 14,
    image: '/kimchiramen.png',
    category: 'ramen',
  },
  {
    id: 'mazemen',
    name: 'Mazemen',
    description: 'A ramen dish served with thick noodles and a variety of toppings such as ground pork, bamboo shoots, green onions, and a soft-boiled egg.',
    price: 16,
    image: '/mazemen.png',
    category: 'ramen',
  },
  {
    id: 'tsukemen-ramen',
    name: 'Tsukemen Ramen',
    description: 'A dipping ramen dish served with thick noodles and a separate bowl of concentrated dipping broth. The noodles are dipped into the broth before each bite.',
    price: 15,
    image: '/tsukumen.png',
    category: 'ramen',
  },
  {
    id: 'black-garlic-ramen',
    name: 'Black Garlic Ramen',
    description: 'A specialty ramen dish with a dark and flavorful broth made with black garlic paste and garlic. Served with thin noodles, tender chashu pork, and bamboo shoots.',
    price: 14,
    image: '/blackgarlic.png',
    category: 'ramen',
  },
  {
    id: 'house-special-ramen',
    name: 'House Special Ramen',
    description: "Our chef's signature ramen soup, made with a blend of rich and savory broths. Served with thin noodles, chashu pork, bamboo shoots, soft-boiled egg, and a variety of toppings.",
    price: 14,
    spicy: true,
    image: '/housespecial.png',
    category: 'ramen',
  },
  // DONBURI
  {
    id: 'katsu-chicken-don',
    name: 'Katsu Chicken Don',
    description: 'A Japanese-style rice bowl featuring tender breaded and fried chicken cutlets served on top of steamed rice with a savory sauce.',
    price: 13,
    image: '/katsudon.png',
    category: 'donburi',
  },
  {
    id: 'special-karaage-don',
    name: 'Special Karaage Don',
    description: 'A Japanese-style rice bowl with crispy fried chicken marinated in soy sauce and garlic. Served on top of steamed rice with a savory sauce.',
    price: 14,
    image: '/karage.png',
    category: 'donburi',
  },
  {
    id: 'katsu-chicken-curry-don',
    name: 'Katsu Chicken Curry Don',
    description: 'A fusion dish combining the Japanese-style katsu chicken with a spicy and flavorful Indian curry sauce. Served on top of steamed rice.',
    price: 14,
    image: '/chickencurry.png',
    category: 'donburi',
  },
  {
    id: 'teriyaki-chicken-don',
    name: 'Teriyaki Chicken Don',
    description: 'A popular Japanese rice bowl dish featuring tender chicken marinated in a sweet and savory teriyaki sauce, served on a bed of steamed rice.',
    price: 14,
    image: '/teriyaki.png',
    category: 'donburi',
  },
  {
    id: 'house-special-oyakodon',
    name: 'House Special Oyakodon',
    description: 'A classic Japanese rice bowl dish made with tender pieces of chicken and fluffy scrambled eggs simmered together in a sweet and savory sauce.',
    price: 14,
    image: '/oyakodon.png',
    category: 'donburi',
  },
  {
    id: 'soy-glazed-eggplant',
    name: 'Soy Glazed Eggplant',
    description: 'A delicious and savory vegetarian rice bowl dish featuring tender chunks of eggplant glazed with a sweet and savory soy sauce. Served on top of steamed rice.',
    price: 16,
    image: '/soyglazed.png',
    category: 'donburi',
  },
]
