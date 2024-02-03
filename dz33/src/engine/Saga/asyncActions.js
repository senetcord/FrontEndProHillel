import { createAction } from "@reduxjs/toolkit";

export const getDataAsyncAction = createAction("GET_DATA_ASYNC");

export const addItemAsyncAction = createAction("ADD_ITEM_ASYNC");

export const clearItemsAsyncAction = createAction("CLEAR_ITEMS_ASYNC");

export const deleteItemAsyncAction = createAction("DELETE_ITEM_ASYNC");
