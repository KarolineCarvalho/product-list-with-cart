import { create } from "zustand";

export interface CartState {
  items: ListItemProps[];
  addItem: (item: ListItemProps) => void;
  removeItem: (id: string) => void;
  increase: (id?: string) => void;
  decrease: (id?: string) => void;
  clearCart: () => void;
}

export interface ListItemProps {
  id: string;
  name: string;
  quantity?: number;
  price: number;
  category?: string;
  thumbnail?: string;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: (i.quantity ?? 0) + (item.quantity ?? 0) }
              : i
          ),
        };
      }

      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  increase: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
      ),
    })),
  decrease: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity ?? 0) - 1 }
            : item
        )
        .filter((item) => (item.quantity ?? 0) > 0),
    })),
  clearCart: () =>
    set(() => ({
      items: [],
    })),
}));
