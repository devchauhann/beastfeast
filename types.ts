
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'burgers' | 'sides' | 'drinks' | 'desserts';
  image: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar: string;
  handle: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
