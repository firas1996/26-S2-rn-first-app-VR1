import { createContext, useEffect, useState } from "react";

const ItemsStore = createContext({
  itemsData: [],
  FavItems: [],
  addItem: () => {},
  removeItem: () => {},
  editItem: () => {},
});
export default ItemsStore;

export const ItemsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [favList, setFavList] = useState([]);
  const addItem = (itemData) => {
    if (itemData.trim().length) {
      setData([...data, { title: itemData, isFav: false, id: Math.random() }]);
    }
  };
  const editItem = (id) => {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, isFav: !item.isFav } : item;
      }),
    );
  };
  useEffect(() => {
    setFavList(
      data.filter((item) => {
        return item.isFav;
      }),
    );
  }, [data]);
  console.log("aaaa: ", favList);
  const removeItem = () => {};
  return (
    <ItemsStore.Provider
      value={{
        itemsData: data,
        FavItems: favList,
        addItem: addItem,
        removeItem: removeItem,
        editItem: editItem,
      }}
    >
      {children}
    </ItemsStore.Provider>
  );
};
