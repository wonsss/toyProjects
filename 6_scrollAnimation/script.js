const boxes = document.querySelectorAll('.box');

function checkBoxes() {
  const triggerBottom = (window.innerHeight * 4) / 5;
  console.log('bot', triggerBottom);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log('top', boxTop);
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

checkBoxes();

window.addEventListener('scroll', checkBoxes);
