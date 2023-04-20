export class ProductoView {
  crearLista(padre, productos) {
    let html = "";
    for (let producto of productos) {
      //creo el div principal
      html += '<div style="background-color:orange; color:white">';
      //agrego el html interno al div
      html += `<div>
                <p>${producto.nombre}</p>
                <img height='100px' src=${producto.imagenURL} alt=${producto.nombre} />
                </div>        
                <div ">
                <p id="precio${producto.id}">precio:${producto.precio}</p>
                </div>        
                <div>
                </div>
                <div>
                </div>`;
    }
    $(padre).html(html);
  }
}
