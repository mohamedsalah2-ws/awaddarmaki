// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    showMessage('الرجاء ملء جميع الحقول المطلوبة', 'error');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage('الرجاء إدخال بريد إلكتروني صحيح', 'error');
    return;
  }
  
  // Show loading state
  const submitBtn = document.querySelector('.btn-submit');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جارِ الإرسال...';
  submitBtn.disabled = true;
  
  // Simulate form submission (replace with actual form submission logic)
  setTimeout(() => {
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    
    // Show success message
    showMessage('تم إرسال رسالتك بنجاح! سأقوم بالرد عليك في أقرب وقت ممكن.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Here you would typically send the data to your server
    // Example: 
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, phone, subject, message })
    // })
    
  }, 2000);
});

// Show message function
function showMessage(text, type) {
  const messageDiv = document.getElementById('formMessage');
  messageDiv.textContent = text;
  messageDiv.className = `form-message ${type}`;
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Smooth scroll for form submission
document.getElementById('contactForm').addEventListener('submit', function() {
  setTimeout(() => {
    document.getElementById('formMessage').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }, 100);
});