import React, { createContext, useReducer, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "../config/Axios";
import Notiflix from "notiflix";
import * as actions from "./Action.js"
import { reducer } from "./Reducer.js";


Notiflix.Notify.init({ position: "top", timeout: 3000 });


export const AnalyticsContext = createContext();


const fetchAnalytics = async () => {
    const res = await Axios.get(`/analytics/analytics-data`);
    return res.data.data;
};

const fetchcommodityTrendsData = async () => {
    const res = await Axios.get(`/analytics/commodity-trends-data`);
    return res.data.data;
};


export const AnalyticsProvider = ({ children }) => {
    const initialState = {
        analyticsData: {},
        commodityTrendsData: [],
        isLoading: false,
        isError: false,
        error: null,
    };


    const [state, dispatch] = useReducer(reducer, initialState);

    const { data: analyticsData = {}, isLoading: analyticsLoading, isError, error } = useQuery({
        queryKey: ["analytics"],
        queryFn: fetchAnalytics,
        onError: (error) => {
            Notiflix.Notify.failure(error.message || "Something went wrong");
            dispatch({ type: actions.SET_ERROR, payload: { error: error.message } });
        },
        onSuccess: (data) => {
            dispatch({ type: actions.SET_ANALYTICS_DATA, payload: data });
        },
    });

    const { data: commodityTrendsData = [], isLoading: trendsLoading } = useQuery({
        queryKey: ["commodityTrendsData"],
        queryFn: fetchcommodityTrendsData,
        onError: (error) => {
            Notiflix.Notify.failure(error.message || "Failed to fetch commodity trends");
            dispatch({ type: actions.SET_ERROR, payload: { error: error.message } });
        },
        onSuccess: (data) => {
            console.log("Commodity Trends Data from API:", data);
            dispatch({ type: actions.SET_COMMODITY_TRENDS, payload: data });
        },

    });

    useEffect(() => {
        dispatch({ type: actions.SET_LOADING, payload: analyticsLoading || trendsLoading });
    }, [analyticsLoading, trendsLoading]);

    const contextValue = {
        ...state,
        dispatch,
        analyticsData,
        commodityTrendsData,
    };

    return (
        <AnalyticsContext.Provider value={contextValue}>
            {children}
        </AnalyticsContext.Provider>
    );
};
