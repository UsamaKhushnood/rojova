
export function handleErrors (vm, errors) {
  let validationErrors = false
  for (var i = errors.length - 1; i >= 0; i--) {
    // Error Toast
    $.notify(errors[i].message, {
      className: 'error',
      globalPosition: 'right bottom'
    })

    // Form Error Handlar
    if (errors[i].extensions.category === 'validation') {
      validationErrors = errors[i].extensions.validation
    }
  }
  return validationErrors
}
