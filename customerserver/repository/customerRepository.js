const Customer = require('../model/customers');

class CustomerRepository{
    getAllCustomers(){
        return Customer.find({}).then(users => users);
    }
    // editCustomer(req){
    //     return Customer.findById(req.params.feedId, (e, data) => {
    //         if(e){
    //             res.send(e);
    //         }
    //         data.title = req.body.title;
    //         data.count = req.body.count;
    //         data.save(function(err){
    //             if(err){
    //                 res.send(err);
    //                 res.json(data);
    //             }
    //         })
    //     })
    // }

    update(customer,id){
            return Customer.findOneAndUpdate(
            {"topicFeedbacks.feedID":id},
            {$set:customer}
            )
        }


}


module.exports = new CustomerRepository();