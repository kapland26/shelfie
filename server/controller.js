module.exports = {

    read: ( req, res ) => {
        const connection = req.app.get('db');
        connection.get_inventory()
            .then( (products)=> res.status(200).send(products))
            .catch( (err) => {
                console.log(err)
                res.status(500).send(err) 
            });    
    },
    create:( req, res ) => {
        const connection = req.app.get('db');
        const {url, name, price} = req.body;

        connection.create_product([url, name, price])
            .then( ()=> res.status(200).send())
            .catch( (err) => {
                console.log(err)
                res.status(500).send(err) 
            });    
    },
}