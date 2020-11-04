import Post from '../modal/index';

const POSTS = [
  new Post(
    'p1',
    'u1',
    '12/5/2019',
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    'A red t-shirt, perfect for days with non-red weather.',
     null,
    'cat1'
  ),
  new Post(
    'p2',
    'u1',
    '23/6/2019',
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
     null,
    'cat2'
  ),
  new Post(
    'p3',
    'u2',
    '1/10/2019',
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    'Can also be used for tea!',
     null,
    'cat3',
  ),
];

export default POSTS;
