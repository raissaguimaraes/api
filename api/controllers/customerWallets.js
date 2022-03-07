module.exports = () => {
    const customerWalletsDB = require('../data/customerWallets.json');
    const controller = {};

    controller.listCutomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

    return controller;
}