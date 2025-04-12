import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";
import * as actions from "../context/Action";

const EditProductModal = () => {
    const { isEditModalOpen, dispatch, updateMutation, state, formState, selectedProduct } = useContext(ProductContext);

    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        if (selectedProduct) {
            dispatch({
                type: actions.SET_FORM_DATA,
                payload: {
                    name: selectedProduct.name,
                    description: selectedProduct.description,
                    price: selectedProduct.price,
                    category: selectedProduct.category,
                    stock: selectedProduct.stock,
                    imageUrl: selectedProduct.imageUrl,
                }
            });
            setImagePreview(selectedProduct.imageUrl);
        }
    }, [selectedProduct, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: actions.SET_FORM_DATA,
            payload: { [name]: value },
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            dispatch({
                type: actions.SET_FORM_DATA,
                payload: { imageUrl: file },
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", formState.name);
        formData.append("description", formState.description);
        formData.append("price", formState.price);
        formData.append("category", formState.category);
        formData.append("stock", formState.stock);
        formData.append("image", formState.imageUrl);

        updateMutation.mutate({ id: selectedProduct.id, formData }, {
            onSuccess: () => {
                dispatch({ type: actions.CLOSE_EDIT_MODAL });
                dispatch({ type: actions.CLEAR_SELECTED_PRODUCT });
                dispatch({ type: actions.CLEAR_FORM_DATA });
            }
        });

        setImagePreview("");
    };

    if (!isEditModalOpen || !selectedProduct) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8 relative">
                <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">
                    Edit Product
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block mb-1 font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                        <label className="block mb-1 font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formState.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formState.price}
                            onChange={handleChange}
                            step="0.01"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formState.category}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={formState.stock}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full border border-gray-300 rounded-lg px-2 py-2 bg-white focus:outline-none"
                        />
                    </div>

                    {imagePreview && (
                        <div className="col-span-1 sm:col-span-2 flex justify-center">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="h-40 object-cover rounded-lg border border-gray-200 shadow-md"
                            />
                        </div>
                    )}

                    <div className="col-span-1 sm:col-span-2 flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            onClick={() => dispatch({ type: actions.CLOSE_EDIT_MODAL })}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm font-semibold"
                        >
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
