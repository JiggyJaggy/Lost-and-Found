const reportForm = document.getElementById('report-form');
const imageInput  = document.getElementById('image');
const imagePreview = document.getElementById('image-preview');
const successMessage = document.getElementById('success-message');

// 1. Preview the image on select
imageInput.addEventListener('change', function() {
  const file = this.files[0];
  if (!file) {
    imagePreview.style.display = 'none';
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    imagePreview.src = e.target.result;
    imagePreview.style.display = 'block';
  };
  reader.readAsDataURL(file);
});

// 2. Handle form submission
reportForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const file = imageInput.files[0];
  if (file) {
    // Read file as Base64 then save
    const reader = new FileReader();
    reader.onload = evt => saveReport(evt.target.result);
    reader.readAsDataURL(file);
  } else {
    // No image uploaded
    saveReport('');
  }
});

function saveReport(imageBase64) {
  // Gather all form values
  const newReport = {
    name:            document.getElementById('name').value,
    email:           document.getElementById('email').value,
    itemFound:       document.getElementById('item-found').value,
    itemDescription: document.getElementById('item-description').value,
    location:        document.getElementById('location').value,
    date:            document.getElementById('date').value,
    status:          document.getElementById('status').value,
    additionalInfo:  document.getElementById('additional-info').value,
    image:           imageBase64
  };

  // Load existing array or start fresh
  const existing = JSON.parse(localStorage.getItem('foundItems')) || [];
  existing.push(newReport);
  localStorage.setItem('foundItems', JSON.stringify(existing));

  // Show success, then redirect immediately
  successMessage.style.display = 'block';

  // Short delay so user sees the message (optional)
  setTimeout(() => {
    window.location.href = "Website for final project index.html";
  }, 800);
  
  // Reset form
  reportForm.reset();
  imagePreview.style.display = 'none';
}
