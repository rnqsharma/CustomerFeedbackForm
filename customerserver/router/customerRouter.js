const customerRepository = require('../repository/customerRepository');
module.exports = (app) =>{
    app.get('/users', (req, res)=>{
        customerRepository.getAllCustomers().then(users=>{
            console.log(users);
            res.json(users)});
    })    

    // app.put('/users/edit/:feedID', (req, res) => {
    //     customerRepository.editCustomer(req).then(users => {
    //         console.log(users);
    //         res.json(users);
    //     })
    // })

    app.put('/products/:feedID',(req,res)=>{
        console.log(req.params.id);
        // productRepository.update(req.body,req.params.id)
        // .then(product=>res.json(product))
        })
}