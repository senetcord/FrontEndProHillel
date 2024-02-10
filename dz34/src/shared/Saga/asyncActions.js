import { createAction } from "@reduxjs/toolkit";

export const getDataAsyncAction = createAction("GET_DATA_ASYNC");
export const addItemAsyncAction = createAction("ADD_ITEM_ASYNC");
export const checkItemAsyncAction = createAction("CHECK_ITEM_ASYNC");
export const setItemsAsyncAction = createAction("SET_ITEMS_ASYNC");
export const deleteItemAsyncAction = createAction("DELETE_ITEM_ASYNC");
