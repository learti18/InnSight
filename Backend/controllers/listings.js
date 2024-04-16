import {db} from "../db.js"

export const getListings = (req,res) => {
    const q = "SELECT * FROM listings"
    
    db.query(q,(err,data)=>{
        if(err) res.send(err)
        
        return res.status(200).json(data);
    })
}
export const getListing = (req,res) => {
    const q = "SELECT * FROM listings WHERE id=?"
    console.log(req.params.id)

    db.query(q,[req.params.id],(err,data) => {
        if(err){
            return res.status(500).send(err);
        }

        return res.status(200).json(data[0])
    })
}
export const addListing = (req,res) => {
    const { title, description, address, options,space, price, bedrooms, bathrooms, images } = req.body;
    
    const q = "INSERT INTO listings(title,description,address,options,space,price,images,bedrooms,bathrooms) VALUES (?)"

    const values = [
        title,
        description,
        address,
        JSON.stringify(options),
        space,
        price,
        JSON.stringify(images),
        bedrooms,
        bathrooms
    ]

    db.query(q,[values], (err,data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(200).json("Post has been created.");
    })
}
export const updateListing = (req,res) => {
    res.json("from controller")
}
export const deleteListing = (req,res) => {
    res.json("from controller")
}