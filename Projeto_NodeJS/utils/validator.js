module.exports = {

    user: (app, req, res) => {

        req.assert('_name', 'o nome é obrigatório!').notEmpty();
        req.assert('_email', 'o e-mail está inválido!').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        }

        else{

            return true;

        }
    }

};