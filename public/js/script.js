// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

///

$(document).ready(function() {
  $('#categories').select2({
  tags: true,
  placeholder: "Select categories",
  width: '100%',
  theme: "classic",
  dropdownParent: $('#categories').parent(),  // Ensure dropdown positioning
  dropdownPosition: 'below'                   // 👈 Force it to open downward
});
});


