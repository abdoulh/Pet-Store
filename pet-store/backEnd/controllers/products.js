const { Product }= require('../model')

module.exports={
    getAllProducts: async (req, res) =>{
        try{
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    getOneProduct:async(req,res)=>{
        try{
            const products = await Product.findOne();
            res.status(200).json(products);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

        },
    
    createProduct: async (req, res) =>  {
        try{
            const {name, category, animal, imageUrl, description, price} = req.body
            
            const createdProduct = await Product.create({name, category, animal, imageUrl, description, price});
            res.status(201).json(createdProduct);
        } catch (error){
            console.log(error)
            res.status(500).send(error)
        }
    },
    updateProduct: async (req, res) => {
        try{
            const {name, category, animal, imageUrl, description, price} = req.body
            const productId = req.params.id;
            const updatedProduct = await Product.update({name, category, animal, imageUrl, description, price},{ where: { id: productId } });
            res.status(200).json(updatedProduct)
        } catch (error){
            console.log(error)
            res.status(500).send(error)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            
            const productId = req.params.id;
            const deleteProduct = await Product.destroy({ where: { id: productId } })
            res.status(200).json(deleteProduct)
        }catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
        
    }
};