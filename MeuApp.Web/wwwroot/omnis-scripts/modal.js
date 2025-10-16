window.showBootstrapModal = (modalId) => {
  var modalEl = document.getElementById(modalId);
  if (modalEl) {
    var modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
};
