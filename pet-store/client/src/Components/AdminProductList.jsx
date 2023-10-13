import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/adminLists.css';
import AdminNav from "./AdminNav";

const AdminProductList = () => {
    const [products, setProducts] = useState([]);
    const [editedProduct, setEditedProduct] = useState({
        name: '',
        category: '',
        animal: '',
        imageUrl: '',
        description: '',
        price: '',
    });
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/product');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAllProducts();
    }, []);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const removeFromCart = async (productId) => {
        try {
            await axios.delete(`http://localhost:3000/api/product/${productId}`);
            setProducts(products.filter(product => product.id !== productId));
            console.log('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    const handleEditProduct = async (product) => {
        try {
            const formData = new FormData();
            formData.append("name", product.name);
            formData.append("category", product.category);
            formData.append("animal", product.animal);
            formData.append("imageUrl", product.imageUrl);
            formData.append("description", product.description);
            formData.append("price", product.price);


            await axios.put(`http://localhost:3000/api/product/${product.id}`, formData)
            console.log('Product edited successfully')
            setEditedProduct(false)
        } catch (error) {
            console.error('Error editing product', error.response);
        }
    };

    return (
        <div className="admin-dashboard">
            <AdminNav />

            <div className="admin-content">
                <table className="admin-product-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Animal</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.animal}</td>
                                <td>{product.description}</td>
                                <td>
                                    {
                                        modal && (
                                            <div className="modal-custom">
                                                <div  className="overlay"></div>
                                                <div className="modal-content-custom-cart">
                                                    <Checkout />
                                                    <button className="close-modal-custom btn btn-lg btn-dark px- d-none d-lg-block" onClick={toggleModal}>
                                                        CLOSE
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <button className="admin-product-edit-button" onClick={toggleModal}>Edit</button>
                                    <button className="admin-product-delete-button" onClick={() => removeFromCart(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProductList;
