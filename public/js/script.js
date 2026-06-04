(()=>{
  'use strict'
  const forms = document.querySelectorAll('.needs-validation');
  const toastEl = document.getElementById('validationToast');
  const validationToast = toastEl ? new bootstrap.Toast(toastEl) : null;

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        // if rating is the invalid field, show a friendly toast
        if (validationToast) {
          const invalid = form.querySelector(':invalid');
          if (invalid && invalid.name && invalid.name.indexOf('review') !== -1) {
            validationToast.show();
          }
        }
      }

      // Additional explicit check for review rating (handles custom star widgets)
      const ratingInputs = form.querySelectorAll('input[name="review[rating]"]');
      if (ratingInputs && ratingInputs.length > 0) {
        const checked = Array.from(ratingInputs).find(i => i.checked);
        const val = checked ? Number(checked.value) : 0;
        if (!val || val < 1) {
          event.preventDefault();
          event.stopPropagation();
          if (validationToast) validationToast.show();
        }
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

document.querySelectorAll('.filter').forEach(f => {
  f.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    f.classList.add('active');
  });
});

