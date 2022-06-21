const shppingcart = require("../model/cart.js")

const addToCart2 = async (req, res) => {
    const {Image, title, price, id,userid } = req.body

    try {
        const newProduct = new shppingcart({ Image: Image, title: title, price: price, id:id, userid })

        await newProduct.save()
        return res.status(200).json({message: "Added to cart Successfully"})
    } catch (error) {
        console.log(error)
    }
}

const fectchUserProducts = async (req, res) => {
    const {id} = req.params 

    try {
        const userProduct = await shppingcart.find({userid: id})

        return res.status(200).json({userProduct})
    } catch (error) {
        console.log(error)
    }

}
const deleteone = async (req, res) => {
    const {id, userId} = req.params 
    console.log(id)
    console.log(userId)
    try {
        const existingUser = await shppingcart.deleteOne({userid: userId, id: id})
        if (!existingUser) {
            return res.status(400).status({message: "cant find user"})
        }
        // const product = existingUser.deleteOne({id})

        // product.deleteOne()
        return res.status(200).json({message: "successfully deleted"})
    } catch (error) {
        console.log(error)
    } 

}
const deleteAll = async (req, res) => {
    const {userId} = req.params 

    try {
        const products = await shppingcart.deleteMany({userid: userId})
        if (!existingUser) {
            return res.status(400).status({message: "cant find user"})
        }

        return res.status(200).json({message: "All successfully deleted"})
    } catch (error) {
        console.log(error)
    }

}
exports.addToCart2 = addToCart2
exports.fectchUserProducts = fectchUserProducts
exports.deleteone = deleteone
exports.deleteAll = deleteAll