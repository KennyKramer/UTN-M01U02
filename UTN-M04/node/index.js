var moment = require("moment");
moment.locale('es');

console.log('Naci ' + moment('21/10/1981', 'DD/MM/YYYY').fromNow());