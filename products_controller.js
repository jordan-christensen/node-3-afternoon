module.exports = {
   create: ( req, res ) => {
      const dbInstance = req.app.get('db');
      const { name, description, price, image_url } = req.body;

      dbInstance.create_product([name, description, price, image_url])
      .then( () => res.sendStatus(200) )
      .catch( err => {
         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
         console.log(err)
      });
   },

   getOne: ( req, res ) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;

      dbInstance.read_product(id)
         .then( product => res.status(200).send( product ))
         .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
         } );
   },
   getAll: ( req, res ) => {
      const dbInstance = req.app.get('db');

      dbInstance.read_products()
         .then( () => res.sendStatus(200) )
         .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
         });
   },
   update: ( req, res ) => {
      const dbInstance = req.app.get('db');
      const { params, query } = req;

      dbInstance.update_product([ params.id, params.desc])
         .then( () => res.sendStatus(200) )
         .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
         });
   },
   delete: ( req, res ) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;

      dbInstance.delete_product( id )
         .then( () => res.sendStatus(200) )
         .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
         });
   }
};