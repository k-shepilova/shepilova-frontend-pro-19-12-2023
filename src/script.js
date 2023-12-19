document.addEventListener("DOMContentLoaded", addDivOnHover);

function addDivOnHover() {
  const parent = document.getElementById('holder');
  const textBlock = document.getElementById('text');
  const newBlock = document.createElement('div');
  newBlock.classList.add('hover-block');
  newBlock.innerHTML = 'Lorem ipsum dolor sit amet consectetur.';
  textBlock.addEventListener("mouseover", function () {
    parent.append(newBlock)
  });
  textBlock.addEventListener("mouseout", function () {
    parent.removeChild(newBlock);
  });
}