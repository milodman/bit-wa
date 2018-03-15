const fig = require('figlet'); // we export module figlet under name 'fig'

const logoText = fig.textSync("Hey Laki &  Paki!!!!", {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default' //we call method textSync on fig
});

module.exports = {
    logoText
}; //export module