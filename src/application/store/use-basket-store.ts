import {create} from "zustand";
import BasketStoreModel from "../../data/models/basket-store-model";
import {createJSONStorage, persist} from "zustand/middleware";

const useBasketStore = create<BasketStoreModel>(persist(
    (set) => ({
        products: [],
        setBasket: (basket: BasketStoreModel) => set(() => ({basket})),
    }),
    {
        name: 'basket',
        storage: createJSONStorage(() => sessionStorage)
    }
) as any);

export default useBasketStore;