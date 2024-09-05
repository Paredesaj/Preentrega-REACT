import { createContext, useState } from "react";

export const ItemContext = createContext();

export const Provider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        const alreadyExists = items.some((i) => i.id === item.id);
        console.log(alreadyExists);

        if(alreadyExists) {
            const newItems = items.map((i) => {
                if(i.id === item.id) {
                    return { ...i, quantity: i.quantity + item.quantity };
                } else {
                    return i;
                }
            });
            setItems(newItems);
        } else {
            setItems((prev) => [ ...prev, item]);
        }
    };

    const removeItem = (id) => {
        const filter = items.filter(i => i.id !== id);
        setItems(filter);
    }
    console.log(items);

    const reset = () => setItems([]);
    console.log(items);

    return(
        <ItemContext.Provider value={{addItem, items, reset, removeItem}}>
            {children}
        </ItemContext.Provider>
    );
};