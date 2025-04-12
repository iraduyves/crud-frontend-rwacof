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


        default:
            return state;
    }
};
