const { User, Product } = require("./index")
const bcrypt = require('bcryptjs')





const createAdmin = async () => {
    const password = 'adminadmin'
    const encryptedPassword = await bcrypt.hash(password, 10)
    try {
        const admin = await User.create({ firstName: "admin", lastName: "admin", email: "admin@admin.com", password: encryptedPassword, role: "admin" })
        res.status(200).json(admin)
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)
    }

}

const createProducts = async () => {

    const products = await Product.bulkCreate([
        { name: 'Diamond Pro89 Beef, Pork, & Ancient Grains', category: "Food", animal: "Dog", imageUrl: "https://petproducts.com/cdn/shop/products/46852-1614098240.jpg?v=1688071734&width=500", description: "Your dog is dedicated to pursuing perfection as you are. That's why they deserve Diamond Pro89 Beef, Pork and Ancient Grains Formula for Adult Dogs. This high-protein dog food is fortified with amino acids and incorporates ingredients of exceptional quality, including energy-dense protein sources and ancient grains, so your dog will have the nutrients they need to support endurance and performance.", price: 80 },
        { name: 'Diamond Naturals Lamb Meal & Rice', category: "Food", animal: "Dog", imageUrl: "https://petproducts.com/cdn/shop/products/30772-1569518374.jpg?v=1687313315&width=1000", description: "* Antioxidant Formulation * Omega Fatty Acids for Skin and Coat * Crunchy Kibble Helps Clean Teeth and Reduce Plaque * Natural Formula with Vitamins and Minerals Lamb protein provides optimal nutrition for dogs that prefer the taste of lamb, or are sensitive to chicken or corn. Guaranteed levels of vitamin E and selenium ensure that your dog receives optimum antioxidant nutrition, while omega-6 and omega-3 fatty acids keep the skin and coat healthy and shiny.", price: 39.64 }
    ]);

}

