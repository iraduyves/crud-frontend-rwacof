import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./Reducer.js";
import * as actions from "./Action.js"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Axios from "../config/Axios";
import Notiflix from "notiflix";

Notiflix.Notify.init({ position: "top", timeout: 3000 });

export const ProductContext = createContext();

const fetchProducts = async () => {
    const res = await Axios.get(`/product/allproducts`);
    return res.data.data;
};

const createProduct = async (productData) => {
    const res = await Axios.post(`/product/createProduct`, productData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    Notiflix.Notify.success(res.data.message);
    return res.data.data;
};

const updateProduct = async ({ id, formData }) => {
    const res = await Axios.put(`/product/updateProductById/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    Notiflix.Notify.success(res.data.message);
    return res.data.data;
};

const deleteProduct = async (id) => {
    const res = await Axios.delete(`/product/deleteProductById/${id}`);
    Notiflix.Notify.success(res.data.message);
    return res.data;
};

export const ProductProvider = ({ children }) => {
    const initialState = {
        products: [],
        isCreateModalOpen: false,
        isEditModalOpen: false,
        selectedProduct: null,
        formState: {
            name: "",
            description: "",
            price: "",
            category: "",
            stock: "",
            imageUrl: "",
        },
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const queryClient = useQueryClient();

    const { data: products = [], isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        onError: (error) => Notiflix.Notify.failure(error.errorMessage),
    });


    useEffect(() => {
        if (products.length > 0) {
            dispatch({ type: actions.SET_PRODUCTS, payload: products });
        }
    }, [products]);

    const createMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => queryClient.invalidateQueries(["products"]),
        onError: (error) => {
            console.log(error);
            Notiflix.Notify.failure(error?.response?.data?.message || "Something went wrong");
        }
    });


    const updateMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => queryClient.invalidateQueries(["products"]),
        onError: (error) => Notiflix.Notify.failure(error.errorMessage),
    });

    const deleteMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => queryClient.invalidateQueries(["products"]),
        onError: (error) => Notiflix.Notify.failure(error.errorMessage),
    });

    const contextValue = {
        ...state,
        dispatch,
        products,
        isLoading,
        isError,
        error,
        createMutation,
        updateMutation,
        deleteMutation,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};
