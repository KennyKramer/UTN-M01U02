//Login controlado

app.get('/', function(req, res){
  var conocido = Boolean(req.session.nombre);
  
  res.render('index', {
    tittle: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });
});

app.post('/ingresar', function(req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
    }
    res.redirect('/');
});

app.get('/salir', function (req, re) {
  req.sesion.destroy();
  res.redirect('/');
});
