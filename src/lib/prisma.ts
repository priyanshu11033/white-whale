// src/lib/prisma.ts
// A database-free, completely static & in-memory mock client that mimics PrismaClient.
// Decoupled entirely from physical databases (SQLite / dev.db).

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  createdAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  menuItemId: number;
  menuItem: MenuItem;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  deliveryNotes: string | null;
  status: string; // RECEIVED, PREPARING, OUT_FOR_DELIVERY, DELIVERED
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
  items: OrderItem[];
}

// Global state to persist mock data across requests within the process session
let menuItemsStore: MenuItem[] = [
  {
    id: 1,
    name: "Tuna Sashimi",
    description: "Freshly sliced yellowfin tuna with soy and wasabi.",
    price: 18.50,
    category: "STARTERS",
    imageUrl: "/images/6.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "Crispy Calamari",
    description: "Lightly breaded squid rings served with marinara sauce.",
    price: 14.00,
    category: "STARTERS",
    imageUrl: "/images/7.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: "Roman Oysters",
    description: "Freshly shucked oysters on the half shell with mignonette.",
    price: 24.50,
    category: "STARTERS",
    imageUrl: "/images/8.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: "Italian Fennel Salad",
    description: "With English watercress & hazelnuts.",
    price: 12.50,
    category: "STARTERS",
    imageUrl: "/images/9.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: "Zucchini Pancakes",
    description: "With goat cheese and herbs.",
    price: 15.00,
    category: "STARTERS",
    imageUrl: "/images/10.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    name: "Grilled Lobster Tail",
    description: "With garlic butter and lemon wedges.",
    price: 45.00,
    category: "MAIN COURSES",
    imageUrl: "/images/11.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    name: "Salmon Fillet",
    description: "Pan-seared salmon with asparagus and hollandaise.",
    price: 32.50,
    category: "MAIN COURSES",
    imageUrl: "/images/12.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    name: "Bacon & Blue Cheese Burger",
    description: "With winter black truffles from Piedmont.",
    price: 18.45,
    category: "MAIN COURSES",
    imageUrl: "/images/13.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    name: "Seafood Linguine",
    description: "Shrimp, mussels, and calamari in a white wine garlic sauce.",
    price: 28.00,
    category: "MAIN COURSES",
    imageUrl: "/images/6.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 10,
    name: "Key Lime Pie",
    description: "A classic dessert with a graham cracker crust.",
    price: 9.00,
    category: "DESSERTS",
    imageUrl: "/images/7.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 11,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    price: 11.50,
    category: "DESSERTS",
    imageUrl: "/images/8.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 12,
    name: "Ocean Breeze Cocktail",
    description: "Vodka, blue curacao, lemonade.",
    price: 12.00,
    category: "DRINKS",
    imageUrl: "/images/9.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 13,
    name: "Classic Mojito",
    description: "White rum, fresh mint, lime juice, and soda water.",
    price: 10.00,
    category: "DRINKS",
    imageUrl: "/images/10.png",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 14,
    name: "Sparkling Water",
    description: "San Pellegrino 500ml.",
    price: 4.50,
    category: "DRINKS",
    imageUrl: "/images/11.png",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let blogPostsStore: BlogPost[] = [
  {
    id: 1,
    title: "White Whale Family Expands: New Restaurant Opens in Charlestown",
    content: "WhereResto Old town, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA355.328.0632 When14th, February, 2026 19:00 WhatBefore we'll be inviting you for our special Tuna-menu treat next week, let's explore the best Tuna dishes out there!...",
    imageUrl: "/images/31.png",
    date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: "Virginia's Finest: Smithfield Ham",
    content: "WhereResto Old town, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA355.328.0632 When14th, February, 2026 19:00 WhatBefore we'll be inviting you for our special Tuna-menu treat next week, let's explore the best Tuna dishes out there!...",
    imageUrl: "/images/33.png",
    date: new Date(Date.now() - 86400000),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: "Go Green this Earth Day with NYC's Eco Friendly Events & Eateries",
    content: "WhereResto Old town, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA355.328.0632 When14th, February, 2026 19:00 WhatBefore we'll be inviting you for our special Tuna-menu treat next week, let's explore the best Tuna dishes out there!...",
    imageUrl: "/images/30.png",
    date: new Date(Date.now() - 172800000),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    title: "Chef's Special: The Art of Sushi Making",
    content: "Sushi making is an ancient art that requires precision, the freshest ingredients, and years of practice. In this exclusive behind-the-scenes look, our master sushi chef shares the techniques that make our sushi rolls truly exceptional. From rice preparation to knife skills, discover what goes into every bite.",
    imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800",
    date: new Date(Date.now() - 86400000 * 2),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    title: "Hosting the Perfect Seafood Dinner Party",
    content: "Want to impress your guests with a spectacular seafood feast at home? We've compiled our top tips for hosting a dinner party that will leave everyone talking. Learn how to select the best oysters, prepare a flawless crab boil, and set a nautical-themed table that sets the mood.",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    date: new Date(Date.now() - 86400000 * 7),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    title: "Health Benefits of a Mediterranean Seafood Diet",
    content: "Eating seafood isn't just delicious—it's incredibly good for you! Rich in Omega-3 fatty acids, lean protein, and essential vitamins, incorporating more fish into your diet can boost heart health and brain function. Read on to discover why the Mediterranean diet is considered one of the healthiest in the world.",
    imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=800",
    date: new Date(Date.now() - 86400000 * 15),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    title: "Our Local Fishermen Partners",
    content: "At White Whale, we believe in supporting our local community. That's why we partner directly with local fishermen who bring us their daily catch fresh from the harbor. Meet the faces behind the food and learn about their dedication to sustainable, line-caught fishing methods that protect our oceans.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    date: new Date(Date.now() - 86400000 * 20),
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let contactMessagesStore: ContactMessage[] = [];
let ordersStore: Order[] = [];

// Helper functions
const generateRandomId = () => Math.floor(Math.random() * 1000000) + 1000;
const generateUUID = () => `order-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 5)}`;

export const prisma = {
  menuItem: {
    findMany: async (options?: any) => {
      let items = [...menuItemsStore];
      if (options?.orderBy) {
        const orderKey = Object.keys(options.orderBy)[0];
        const orderDir = options.orderBy[orderKey];
        items.sort((a: any, b: any) => {
          if (a[orderKey] < b[orderKey]) return orderDir === 'asc' ? -1 : 1;
          if (a[orderKey] > b[orderKey]) return orderDir === 'asc' ? 1 : -1;
          return 0;
        });
      }
      return items;
    },
    findUnique: async (options: { where: { id: number } }) => {
      const id = Number(options.where.id);
      return menuItemsStore.find(item => item.id === id) || null;
    },
    create: async (options: { data: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'> }) => {
      const newItem: MenuItem = {
        id: generateRandomId(),
        createdAt: new Date(),
        updatedAt: new Date(),
        imageUrl: null,
        ...options.data
      };
      menuItemsStore.push(newItem);
      return newItem;
    },
    delete: async (options: { where: { id: number } }) => {
      const id = Number(options.where.id);
      const index = menuItemsStore.findIndex(item => item.id === id);
      if (index > -1) {
        const deleted = menuItemsStore[index];
        menuItemsStore.splice(index, 1);
        return deleted;
      }
      throw new Error(`MenuItem with id ${id} not found.`);
    },
    count: async () => {
      return menuItemsStore.length;
    }
  },
  blogPost: {
    findMany: async (options?: any) => {
      let posts = [...blogPostsStore];
      if (options?.orderBy) {
        const orderKey = Object.keys(options.orderBy)[0];
        const orderDir = options.orderBy[orderKey];
        posts.sort((a: any, b: any) => {
          if (a[orderKey] < b[orderKey]) return orderDir === 'asc' ? -1 : 1;
          if (a[orderKey] > b[orderKey]) return orderDir === 'asc' ? 1 : -1;
          return 0;
        });
      }
      return posts;
    },
    findUnique: async (options: { where: { id: number } }) => {
      const id = Number(options.where.id);
      return blogPostsStore.find(post => post.id === id) || null;
    },
    create: async (options: { data: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> }) => {
      const newPost: BlogPost = {
        id: generateRandomId(),
        createdAt: new Date(),
        updatedAt: new Date(),
        imageUrl: null,
        ...options.data
      };
      blogPostsStore.push(newPost);
      return newPost;
    },
    delete: async (options: { where: { id: number } }) => {
      const id = Number(options.where.id);
      const index = blogPostsStore.findIndex(post => post.id === id);
      if (index > -1) {
        const deleted = blogPostsStore[index];
        blogPostsStore.splice(index, 1);
        return deleted;
      }
      throw new Error(`BlogPost with id ${id} not found.`);
    },
    deleteMany: async (options?: any) => {
      const count = blogPostsStore.length;
      blogPostsStore = [];
      return { count };
    },
    count: async () => {
      return blogPostsStore.length;
    }
  },
  contactMessage: {
    create: async (options: { data: Omit<ContactMessage, 'id' | 'createdAt'> }) => {
      const newMessage: ContactMessage = {
        id: generateRandomId(),
        createdAt: new Date(),
        phone: null,
        ...options.data
      };
      contactMessagesStore.push(newMessage);
      return newMessage;
    },
    findMany: async (options?: any) => {
      let msgs = [...contactMessagesStore];
      if (options?.orderBy) {
        const orderKey = Object.keys(options.orderBy)[0];
        const orderDir = options.orderBy[orderKey];
        msgs.sort((a: any, b: any) => {
          if (a[orderKey] < b[orderKey]) return orderDir === 'asc' ? -1 : 1;
          if (a[orderKey] > b[orderKey]) return orderDir === 'asc' ? 1 : -1;
          return 0;
        });
      }
      return msgs;
    },
    count: async () => {
      return contactMessagesStore.length;
    }
  },
  order: {
    findMany: async (options?: any) => {
      let ords = [...ordersStore];
      if (options?.orderBy) {
        const orderKey = Object.keys(options.orderBy)[0];
        const orderDir = options.orderBy[orderKey];
        ords.sort((a: any, b: any) => {
          if (a[orderKey] < b[orderKey]) return orderDir === 'asc' ? -1 : 1;
          if (a[orderKey] > b[orderKey]) return orderDir === 'asc' ? 1 : -1;
          return 0;
        });
      }
      return ords;
    },
    findUnique: async (options: { where: { id: string }, include?: any }) => {
      const id = options.where.id;
      const order = ordersStore.find(ord => ord.id === id);
      if (!order) return null;

      // Populate menuItem for each item inside the order
      const itemsPopulated = order.items.map(item => ({
        ...item,
        menuItem: menuItemsStore.find(m => m.id === item.menuItemId) || item.menuItem
      }));

      return {
        ...order,
        items: itemsPopulated
      };
    },
    create: async (options: { data: any }) => {
      const id = generateUUID();
      const orderItems: OrderItem[] = options.data.items?.create?.map((item: any) => {
        const menuItem = menuItemsStore.find(m => m.id === item.menuItemId);
        return {
          id: `item-${Math.random().toString(36).substr(2, 9)}`,
          orderId: id,
          menuItemId: item.menuItemId,
          quantity: item.quantity,
          price: item.price,
          menuItem: menuItem || {
            id: item.menuItemId,
            name: "Unknown Item",
            description: "",
            price: item.price,
            category: "STARTERS",
            imageUrl: null,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        };
      }) || [];

      const newOrder: Order = {
        id,
        customerName: options.data.customerName,
        customerEmail: options.data.customerEmail,
        customerPhone: options.data.customerPhone,
        deliveryAddress: options.data.deliveryAddress,
        deliveryNotes: options.data.deliveryNotes || null,
        status: options.data.status || "RECEIVED",
        totalAmount: options.data.totalAmount,
        createdAt: new Date(),
        updatedAt: new Date(),
        items: orderItems
      };

      ordersStore.push(newOrder);
      return newOrder;
    },
    update: async (options: { where: { id: string }, data: any }) => {
      const id = options.where.id;
      const index = ordersStore.findIndex(ord => ord.id === id);
      if (index > -1) {
        ordersStore[index] = {
          ...ordersStore[index],
          ...options.data,
          updatedAt: new Date()
        };
        return ordersStore[index];
      }
      throw new Error(`Order with id ${id} not found.`);
    },
    count: async () => {
      return ordersStore.length;
    }
  }
};

export default prisma;
