function opt() {
  ElementRef = document.getElementsByClassName('options')[0];
  ElementRef.classList.toggle('selectorListVisible');

}

function choose(event) {
  document.getElementsByClassName('options')[0].classList.remove('selectorListVisible');
  document.getElementsByClassName('selectorTitleText')[0].textContent = event.target.textContent;
}
