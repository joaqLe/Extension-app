const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('/login'));
app.get('/login', (req, res) => res.render('login'));
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/solicitar-evento', (req, res) => res.render('solicitar-evento'));
app.get('/mis-solicitudes', (req, res) => res.render('mis-solicitudes'));
app.get('/gestion-solicitudes', (req, res) => res.render('gestion-solicitudes'));
app.get('/agenda-eventos', (req, res) => res.render('agenda-eventos'));
app.get('/mis-tareas', (req, res) => res.render('mis-tareas'));
app.get('/inventario', (req, res) => res.render('inventario'));
app.get('/encuestas', (req, res) => res.render('encuestas'));
app.get('/reportes', (req, res) => res.render('reportes'));
app.get('/configuracion', (req, res) => res.render('configuracion'));
app.get('/notificaciones', (req, res) => res.render('notificaciones'));

app.get('/admin', (req, res) => res.render('admin'));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
