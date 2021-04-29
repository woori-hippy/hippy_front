const CREATE_NFT = "nftItems/CREATE_NFT";
const DELETE_NFT = "nftItems/DELETE_NFT";

let nextId = 5;
export const create_nft = (text) => ({
  type: CREATE_NFT,
  nft: {
    id: nextId++,
    text,
  },
});
export const delete_nft = (id) => ({
  type: DELETE_NFT,
  id,
});

const initialState = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
    tag: "draw",
    star: 0,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
];

export default function nftItems(state = initialState, action) {
  switch (action.type) {
    case CREATE_NFT:
      return state.concat(action.nft);
    case DELETE_NFT:
      return state.filter((nft) => nft.id !== action.id);
    default:
      return state;
  }
}
