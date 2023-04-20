import { HomeView } from "../Views/homeView.js";
import { ProductoView } from "../Views/ProductoView.js";
import { ContactoView } from "../Views/contactoView.js";
const home = new HomeView();
home.crearHome("#contenido");
$("#homeBtn").click(() => {
  home.crearHome("#contenido");
});
$("#prodBtn").click(() => {
  const producto = new ProductoView();
  $.getJSON("../Models/productos.json", (data, result) => {
    if (result === "success") {
      producto.crearLista("#contenido", data.productos);
    } else {
      console.log("error");
    }
  });
});
$("#contBtn").click(() => {
  const contacto = new ContactoView();
  contacto.crearContacto("#contenido");
});
