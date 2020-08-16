module.exports = {
    home: (req, res) => {
        res.render('home', {
            pageName: 'Pagina principal'
        })
    }
}