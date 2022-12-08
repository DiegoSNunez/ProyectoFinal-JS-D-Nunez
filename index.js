// CLASES para determinar los productos y copiar al archivo ofertas.json
class OfertasSemanales { constructor (id,img,name,ut,price) 
    { this.id = id
      this.img = img  
      this.name = name
      this.ut = ut
      this.price = price};
    };
const ofertas = [];
const aceiteEucalipto = new OfertasSemanales (1, 'img/eucalipto.jpg', 'Aceite Esencial de Eucalipto','Respiración libre-Higiene Bucal-Defensas', '$3.000.-');
ofertas.push (aceiteEucalipto);
const aceiteManzanilla = new OfertasSemanales (2,'img/manzanilla.jpg', 'Aceite Esencial de Manzanilla','Descanso-Estómago-Ciclo femenino', '$3.500.-');
ofertas.push (aceiteManzanilla);
const aceiteLimon = new OfertasSemanales (3,'img/limon.jpg', 'Aceite Esencial de Limon','Inspiración-Creatividad', '$4.000.-');
ofertas.push (aceiteLimon);
const oleo31 = new OfertasSemanales (4,'img/oleo31.jpg', 'Óleo 31','Cabeza-Estómago-Flexibilidad-Pre Actividad Física-Post Actividad Física y Sobreesfuerzos-Libertad de Movimientos', '$6.500.-');
ofertas.push (oleo31);
const antiStress = new OfertasSemanales (5,'img/anti.jpg', 'Anti-Stress', 'Relajante-Tranquilidad-Descanso', '$5.500.-');
ofertas.push (antiStress);
const sosMotivation = new OfertasSemanales (6,'img/sos.jpg','SoS Motivation', 'Alegría-Motivación-Creatividad-Inspiración', '$5.000.-');
ofertas.push (sosMotivation);
const harmony = new OfertasSemanales (7,'img/harmony.jpg','Harmony +', 'Armonía-Equilibrio', '$5.800.-');
ofertas.push (harmony);
const  tomillo = new OfertasSemanales (8,'img/sos.jpg','Crema de Tomillo', 'Tensión-Invierno-', '$7.800.-');
ofertas.push (tomillo);
console.log (JSON.stringify(ofertas));

// Manipulación del DOM
const ofertasSemanales = document.querySelector ('.productos');
const mostrarProductos = async () => {
    const ofertasFetch = await fetch ('ofertas.json')
    const ofertasJson = await ofertasFetch.json ()
    console.log (ofertasJson)
    ofertasJson.forEach(productos => {
      const {id,img,name,ut,price} = productos 
    ofertasSemanales.innerHTML +=
      `<div id="${id}" class="card" style="width: 18rem;">
      <img src="${img}" class="card-img-top" alt="foto prod">
      <div class="card-body">
        <h5 class="card-title">#${id}# ${name}</h5>
        <p class="card-text"> ${ut}</p>
        <p> <strong> ${price} </strong> </p>
        </div>
      </div> ` })
    };
mostrarProductos ()

const estaSemana = document.getElementById ('estaSemana');
ofertas.forEach (e => { const productos = document.createElement('option')
    productos.innerText = `${e.id}:${e.name}:${e.ut}:${e.price}`
    productos.setAttribute('id',`${e.id}`)
    estaSemana.append (productos) });
        
// Carrito de compras
const carrito = [];
const seleccion = document.getElementById('agregar');
seleccion.onclick = () => { 
    const pedido = (ofertas[estaSemana.selectedIndex])
    carrito.push (pedido)
    console.log (carrito)
    const verPedido = document.getElementById ('pedido');
     verPedido.innerHTML += 
    `<ul class="list-group">
    <li class="list-group-item">#${pedido.id} ${pedido.name}</li>
    </ul> `
  };

// Datos del cliente - 
const inputNombre = document.getElementById ('nombre');
const inputApellido = document.getElementById ('apellido');
const inputMail = document.getElementById ('mail');
const datos = document.getElementById ('datos')
datos.onclick = () => { if (inputNombre.value && inputApellido.value && inputMail.value) 
    { const usuario = { nombre: inputNombre.value, apellido: inputApellido.value, mail: inputMail.value,}
    inputNombre.value = ''
    inputApellido.value = ''
    inputMail.value = ''    
    localStorage.setItem ('datosCliente', JSON.stringify (usuario)) 
const proceso = document.getElementById('proceso')
const comprar = document.getElementById ('comprar');
comprar.onclick = () => { console.log (carrito)
localStorage.setItem ('compra',JSON.stringify (carrito)) 
const saludo = Swal.fire(`Muchas Gracias ${usuario.nombre} ${usuario.apellido} por tu compra. En breve recibiras un mail en ${usuario.mail} con el detalle de tu compra !` )
setInterval ("location.reload()",3000);};}
};
