import * as actions from './Action';

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };

        case actions.OPEN_CREATE_MODAL:
            return {
                ...state,
                isCreateModalOpen: true,
            };

        case actions.CLOSE_CREATE_MODAL:
            return {
                ...state,
                isCreateModalOpen: false,
            };

        case actions.OPEN_EDIT_MODAL:
            return {
                ...state,
                isEditModalOpen: true,
            };

        case actions.CLOSE_EDIT_MODAL:
            return {
                ...state,
                isEditModalOpen: false,
            };

        case actions.SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };

        case actions.CLEAR_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: null,
            };
        case actions.SET_FORM_DATA:
            return {
                ...state,
                formState: {
                    ...state.formState,
                    ...action.payload,
                },
            };

        case actions.CLEAR_FORM_DATA:
            return {
                ...state,
                formState: {
                    name: "",
                    description: "",
                    price: "",
                    category: "",
                    stock: "",
                    imageUrl: "",
                },
            };
        case actions.SET_ANALYTICS_DATA:
            return {
                ...state,
                analyticsData: action.payload,
            };
        case actions.SET_COMMODITY_TRENDS:
            return {
                ...state,
                commodityTrendsData: Array.isArray(action.payload) ? action.payload : [],
            };

        case actions.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case actions.SET_ERROR:
            return {
                ...state,
                isError: true,
                error: action.payload.error,
            };
        default:
            return state;

    }
};
