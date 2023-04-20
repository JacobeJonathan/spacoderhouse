export class HomeView {
  crearHome(padre) {
    let html =
      '<div class="centrarHome">este es el home de una pagina de ejemeplo para una SPA ' +
      '<button id="homeBtn">home</button>' +
      '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="">' +
      "</div>";
    $(padre).html(html);
  }
}
