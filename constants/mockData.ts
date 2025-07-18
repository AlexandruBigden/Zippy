export const recentDeliveries = [
  {
    id: '1',
    type: 'food',
    name: 'Lunch Order',
    restaurant: 'Tasty Bites',
    status: 'delivered',
    time: '12:30 PM',
    date: 'Today',
    items: ['Chicken Sandwich', 'French Fries', 'Soda'],
    price: 15.99,
  },
  {
    id: '2',
    type: 'package',
    name: 'Books Delivery',
    sender: 'Campus Bookstore',
    status: 'in-progress',
    time: '10:15 AM',
    date: 'Today',
    trackingId: 'ZPY-2023-05-27-002',
    estimatedArrival: '10 minutes',
  },
  {
    id: '3',
    type: 'food',
    name: 'Coffee Order',
    restaurant: 'Campus Cafe',
    status: 'delivered',
    time: '9:45 AM',
    date: 'Yesterday',
    items: ['Latte', 'Croissant'],
    price: 8.50,
  },
  {
    id: '4',
    type: 'package',
    name: 'Lab Equipment',
    sender: 'Science Department',
    status: 'delivered',
    time: '3:20 PM',
    date: 'Yesterday',
    trackingId: 'ZPY-2023-05-26-007',
  },
];

export const restaurants = [
  {
    id: '1',
    name: 'Tasty Bites',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    rating: 4.8,
    deliveryTime: '15-25 min',
    categories: ['American', 'Burgers', 'Fast Food'],
  },
  {
    id: '2',
    name: 'Campus Cafe',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
    rating: 4.5,
    deliveryTime: '10-20 min',
    categories: ['Coffee', 'Breakfast', 'Sandwiches'],
  },
  {
    id: '3',
    name: 'Fresh Greens',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    rating: 4.7,
    deliveryTime: '20-30 min',
    categories: ['Salads', 'Healthy', 'Vegan'],
  },
  {
    id: '4',
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    rating: 4.6,
    deliveryTime: '25-35 min',
    categories: ['Pizza', 'Italian', 'Fast Food'],
  },
];

export const packageLocations = [
  {
    id: '1',
    name: 'Main Campus Library',
    address: 'Building A, University Campus',
  },
  {
    id: '2',
    name: 'Student Center',
    address: 'Central Plaza, University Campus',
  },
  {
    id: '3',
    name: 'Science Building',
    address: 'North Wing, University Campus',
  },
  {
    id: '4',
    name: 'Dormitory Block C',
    address: 'East Side, University Campus',
  },
  {
    id: '5',
    name: 'Sports Complex',
    address: 'South End, University Campus',
  },
];

export const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const robotLocation = {
  latitude: 37.78825,
  longitude: -122.4324,
};