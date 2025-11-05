export const initialState = {
  listings: [
    {
      id: "1",
      title: "Used Books Set",
      desc: "Engineering books in good condition.",
      image: "https://apollo.olx.in/v1/files/ro7gqfjtdti22-IN/image",
      price: 499,
    },
    {
      id: "2",
      title: "Guitar for Sale",
      desc: "Acoustic guitar perfect for beginners.",
      image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VpdGFyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      price: 2999,
    },
    {
      id: "3",
      title: "Laptop Bag",
      desc: "Durable and stylish bag for students.",
      image: "https://rukminim2.flixcart.com/image/480/640/xif0q/backpack/r/m/6/6-usb-point-laptop-bag-used-widely-in-all-kinds-of-official-original-imahcd2ngjukzmzw.jpeg?q=90",
      price: 899,
    },
  ],
  favorites: [],
  cart: [],
  user: { name: "John Doe", email: "john@example.com" },
};

export default function appReducer(state, action) {
  switch (action.type) {
    case "toggleFavorite":
      const favId = action.payload;
      return state.favorites.includes(favId)
        ? { ...state, favorites: state.favorites.filter((f) => f !== favId) }
        : { ...state, favorites: [...state.favorites, favId] };

    case "addToCart":
      const item = action.payload;
      if (state.cart.find((c) => c.id === item.id)) return state;
      return { ...state, cart: [...state.cart, item] };

    case "removeFromCart":
      return { ...state, cart: state.cart.filter((c) => c.id !== action.payload) };

    default:
      return state;
  }
}
