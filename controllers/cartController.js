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
exports.addToCart2 = addToCart2
exports.fectchUserProducts = fectchUserProducts