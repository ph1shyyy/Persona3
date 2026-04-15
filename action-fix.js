function activateSectionAction() {
  const activeLabel = document.querySelector('.menu-item.is-active .menu-item-copy strong')?.textContent;

  if (activeLabel === 'CONTACT') {
    window.location.href = 'mailto:de078521@ucf.edu';
    return;
  }

  window.location.href = './resume.html';
}
