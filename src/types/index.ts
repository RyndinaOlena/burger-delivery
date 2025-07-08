export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burgers' | 'pizza' | 'chinese';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderFormData {
  name: string;
  phone: string;
  selectedItems: CartItem[];
}