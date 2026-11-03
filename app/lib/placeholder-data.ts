
export const customers = [
  {
    id: '1',
    name: 'Olivia Rhye',
    email: 'olivia@example.com',
    image_url: '/customers/olivia-rhye.png',
  },
  {
    id: '2',
    name: 'Michael Scott',
    email: 'michael@example.com',
    image_url: '/customers/michael-scott.png',
  },
];

export const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
];

export const revenue = [
  { month: 'Jan', revenue: 1000 },
  { month: 'Feb', revenue: 2000 },
];

export const users = [
  {
    id: '1',
    name: 'User One',
    email: 'user1@example.com',
    password: 'password123',
  },
  {
    id: '2',
    name: 'User Two',
    email: 'user2@example.com',
    password: 'password123',
  },
];
