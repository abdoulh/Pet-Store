const { Product }= require('../model')



module.exports = {

    getAllProducts: function(req, res) {
        getAllProducts: async (req, res) =>{
            try{
                const products = await Product.findAll();
                res.status(200).json(products);
            } catch (error) {
                console.log(error)
                res.status(500).send(error)
            }
        }
    },

    getOneProduct:function(req,es){
        getOneProduct:async(req,res)=>{
            try{
                const productt=await Product.findOne();
                res.status(200).json(productt);
            }catch(error){
                console.log(error)
                res.status(500).send(error)
            }
            
        }
    }
}