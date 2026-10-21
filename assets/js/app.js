/**
 * Kumarakom Houseboats - Simplified Lead Generation
 * Official Booking Desk: +91 94468 21720
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set min check-in date to today
  const dateInput = document.getElementById('travel-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Handle form submission
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('guest-name').value.trim();
      const phone = document.getElementById('guest-phone').value.trim();
      const date = document.getElementById('travel-date').value;
      const boat = document.getElementById('boat-choice').value;
      const guests = document.getElementById('guest-count').value;

      if (!name) {
        alert('Please enter your name.');
        document.getElementById('guest-name').focus();
        return;
      }
      if (!phone || phone.length < 9) {
        alert('Please enter a valid mobile / WhatsApp number.');
        document.getElementById('guest-phone').focus();
        return;
      }

      // Build simple WhatsApp text
      const text = 
`Hello Kumarakom Houseboats, I would like to check availability and get a quote:

• Name: ${name}
• Phone: ${phone}
• Date: ${date || 'Flexible'}
• Boat: ${boat}
• Guests: ${guests}

Please confirm availability and best price.`;

      // Open WhatsApp directly
      const waUrl = `https://wa.me/919446821720?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');

      // Visual feedback
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '✓ Enquiry Sent to WhatsApp!';
        submitBtn.style.background = '#10B981';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 4000);
      }
    });
  }
});

// Quick boat selection
window.selectBoat = function(boatName) {
  const select = document.getElementById('boat-choice');
  if (select) {
    select.value = boatName;
  }
  const formSection = document.getElementById('lead-section');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('guest-name');
    if (nameInput) nameInput.focus();
  }
};
