var form = document.getElementById("contact-me-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.remove('alert-danger')
    status.classList.add('show','alert-success');
    status.innerHTML = " Message sent! Thank you, i will get back to you very soon"
    form.reset()
  }).catch(error => {
    status.classList.remove('alert-success')
    status.classList.add('show','alert-danger')
    status.innerHTML = "Oops! There was a problem submitting your form"
  })
  .finally(()=> {
    setTimeout(()=>{
        status.classList.remove('show')
    },5000)
  });
}
form.addEventListener("submit", handleSubmit)