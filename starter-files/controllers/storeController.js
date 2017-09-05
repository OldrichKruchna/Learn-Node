exports.myMiddleware = (req, res, next) => {
    req.name = "Olda";
    if(req.name === 'Olda') {
        throw Error('Tuc tuc');
    }
    next();
}

exports.homePage = (req, res) => {
    console.log(req.name);
    res.cookie('Olda', 'is also cool', { maxAge: 900000 });
    res.render('index');
};