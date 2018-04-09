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
    getOne: (req, res) => {
        const connection = req.app.get('db');
        console.log("inside get one, id: "+req.params.id)
        connection.get_product([req.params.id])
        .then( (product)=> res.status(200).send(product))
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
    delete:(req, res) => {
        const connection = req.app.get('db');
        
        connection.delete_product([req.params.id])
        .then( ()=> res.status(200).send())
        .catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        });   
    },
    update:(req, res) => {
        const connection = req.app.get('db');
        const {url,name, price} = req.body;
        connection.create_product([url, name, price, req.params.id])
        .then( ()=> res.status(200).send())
        .catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        });  
    }
}