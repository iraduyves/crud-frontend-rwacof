import React, { useContext } from "react";
import Notiflix from "notiflix";
import { ProductContext } from "../context/ProductProvider";
import * as actions from "../context/Action";
import CreateProductModal from "./CreateProductModal";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditProductModal from "./EditProductModal";

const AllProducts = () => {
    const {
        products,
        isLoading,
        isError,
        error,
        deleteMutation,
        isCreateModalOpen,
        isEditModalOpen,
        dispatch,
    } = useContext(ProductContext);

    const handleEdit = (product) => {
        dispatch({ type: actions.SET_SELECTED_PRODUCT, payload: product });
        dispatch({ type: actions.OPEN_EDIT_MODAL });
    };


    const handleDelete = (id) => {
        Notiflix.Confirm.show(
            'Delete Product',
            'Are you sure you want to delete this product?',
            'Yes',
            'No',
            function () {
                deleteMutation.mutate(id);
            },
            function () {
                console.log('Product deletion cancelled');
            },
            {
                width: '320px',
                height: 'auto',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cssAnimation: true,
                okButtonBackground: '#3b82f6',
                cancelButtonBackground: '#d1d5db',
            }
        );
    };



    if (isLoading) return <div className="text-center py-10">Loading...</div>;

    if (isError) {
        Notiflix.Notify.failure(error?.message || "Something went wrong.");
        return <div className="text-center text-red-500">Error loading products</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
                    All Products
                </h1>
                <button
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base w-full sm:w-auto"
                    onClick={() => dispatch({ type: actions.OPEN_CREATE_MODAL })}
                >
                    + Add New Product
                </button>
            </div>

            <div className="overflow-x-auto rounded-md shadow bg-white">
                <table className="min-w-full border">
                    <thead className="bg-blue-100 text-gray-700 text-sm sm:text-base">
                        <tr>
                            <th className="px-4 py-2 border text-left">ID</th>
                            <th className="px-4 py-2 border text-left">Image</th>
                            <th className="px-4 py-2 border text-left">Name</th>
                            <th className="px-4 py-2 border text-left">Description</th>
                            <th className="px-4 py-2 border text-left">Price</th>
                            <th className="px-4 py-2 border text-left">Category</th>
                            <th className="px-4 py-2 border text-left">Stock</th>
                            <th className="px-4 py-2 border text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, idx) => (
                            <tr
                                key={product.id}
                                className={idx % 2 === 1 ? "bg-blue-100" : "bg-white"}
                            >
                                <td className="px-4 py-2 border text-xs sm:text-sm">#{idx + 1}</td>
                                <td className="px-4 py-2 border text-xs sm:text-sm">
                                    {product.imageUrl ? (
                                        <img
                                            src={product.imageUrl}
                                            alt="Product"
                                            className="h-16 w-16 object-cover rounded-md"
                                        />
                                    ) : (
                                        <span>No image</span>
                                    )}
                                </td>
                                <td className="px-4 py-2 border text-xs sm:text-sm">{product.name}</td>
                                <td className="px-4 py-2 border text-xs sm:text-sm">{product.description}</td>
                                <td className="px-4 py-2 border text-xs sm:text-sm">${product.price}</td>
                                <td className="px-4 py-2 border text-xs sm:text-sm">{product.category}</td>
                                <td className="px-4 py-2 border text-xs sm:text-sm">{product.stock}</td>
                                <td className="px-4 py-2 border text-xs sm:text-sm space-x-2 whitespace-nowrap">
                                    <button
                                        className="text-blue-600 hover:underline"
                                        onClick={() => handleEdit(product)}
                                    >
                                        <FaEdit className="h-5 w-5" />
                                    </button>
                                    <button
                                        className="text-red-600 hover:underline"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <FaTrashAlt className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isCreateModalOpen && <CreateProductModal />}
            {isEditModalOpen && <EditProductModal />}
        </div>
    );
};

export default AllProducts;
