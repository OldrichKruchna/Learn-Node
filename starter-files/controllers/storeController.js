const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(req.name);
    res.cookie('Olda', 'is also cool', { maxAge: 900000 });
    res.render('index');
};

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add store'} );
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    req.flash('success', `Store ${store.name} successfully created!`);
    res.redirect(`store/${store.slug}`);
}

exports.getStores = async (req, res) => {
    const stores = await Store.find();
    res.render('stores', { title: 'Stores', stores });
}

exports.editStore = async (req, res) => {
  const store = await Store.findOne({ _id: req.params.id });

  res.render('editStore', { title: `Edit ${store.name}`, store });
}

exports.updateStore = async (req, res) => {
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new updated store instead of the old one
    runValidators: true // force model to run validators, which are normally run only on init
  }).exec();
  
  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View store -></a>`);
  
  res.redirect(`/stores/${store._id}/edit`);
}