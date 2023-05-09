const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  //window.innerheight devuelve el tamaño interno de la ventana en pixeles, lo cual es el tamaño de la página en el momento
  //Las operaciones posteriores dividen el espacio en 5 partes iguales y calculan el tamaño de 4/5 partes del tamaño total de la página
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //getBoundingClientRect() retorna información referente al tamaño de un elemento y su posición relativa al viewport
    //el atributo top referencia la posición Y de la parte superior del elemento.
    const boxTop = box.getBoundingClientRect().top;

    boxTop < triggerBottom
      ? box.classList.add('show')
      : box.classList.remove('show');
  });
}
