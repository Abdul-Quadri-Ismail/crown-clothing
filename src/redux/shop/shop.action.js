import  ShopType  from "./shop.type";

export const updateCollections = (collectionsMap) => ({
    type:ShopType.UPDATE_COLLECTION,
    payload:collectionsMap
})