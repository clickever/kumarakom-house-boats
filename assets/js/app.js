/**
 * Kumarakom Houseboats - Simplified Lead Generation
 * Official Booking Desk: +91 94468 21720
 * Leads Dispatch: hello@kumarakomhouseboats.com
 */

const TARGET_EMAIL = "hello@kumarakomhouseboats.com";

async function sendLeadToEmail(leadData) {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Guest Name": leadData.name,
        "Mobile / WhatsApp": leadData.phone,
        "Travel Date": leadData.date || "Flexible",
        "Preferred Boat": leadData.boat,
        "Number of Guests": leadData.guests,
        "_subject": `New Houseboat Lead: ${leadData.name} - ${leadData.boat}`,
        "_template": "table",
        "_captcha": "false"
      })
    });
    return response.ok;
  } catch (err) {
    console.warn("Email dispatch error:", err);
    return false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Set min check-in date to today
  const dateInput = document.getElementById('travel-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Handle hero form submission
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
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

      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Sending to hello@kumarakomhouseboats.com...';
      }

      // Build WhatsApp message
      const text = 
`Hello Kumarakom Houseboats, I would like to check availability and get a quote:

• Name: ${name}
• Phone: ${phone}
• Date: ${date || 'Flexible'}
• Boat: ${boat}
• Guests: ${guests}

Please confirm availability and best price.`;

      // Dispatch to email in background
      await sendLeadToEmail({ name, phone, date, boat, guests });

      // Open WhatsApp directly
      const waUrl = `https://wa.me/919446821720?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');

      // Visual feedback
      if (submitBtn) {
        submitBtn.innerHTML = '✓ Sent to Email & WhatsApp!';
        submitBtn.style.background = '#10B981';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 4000);
      }
    });
  }

  // Modal Date & Handler logic
  const modalDateInput = document.getElementById('modal-travel-date');
  if (modalDateInput) {
    const today = new Date().toISOString().split('T')[0];
    modalDateInput.setAttribute('min', today);
  }

  // Handle modal form submission
  const modalForm = document.getElementById('modal-lead-form');
  if (modalForm) {
    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const boat = document.getElementById('modal-boat-choice').value;
      const name = document.getElementById('modal-guest-name').value.trim();
      const phone = document.getElementById('modal-guest-phone').value.trim();
      const date = document.getElementById('modal-travel-date').value;
      const guests = document.getElementById('modal-guest-count').value;

      if (!name) {
        alert('Please enter your name.');
        document.getElementById('modal-guest-name').focus();
        return;
      }
      if (!phone || phone.length < 9) {
        alert('Please enter a valid mobile / WhatsApp number.');
        document.getElementById('modal-guest-phone').focus();
        return;
      }

      const submitBtn = modalForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Sending to hello@kumarakomhouseboats.com...';
      }

      // Build WhatsApp message
      const text = 
`Hello Kumarakom Houseboats, I would like to check availability and get a quote:

• Boat: ${boat}
• Name: ${name}
• Phone: ${phone}
• Date: ${date || 'Flexible'}
• Guests: ${guests}

Please confirm availability and best price.`;

      // Dispatch to email in background
      await sendLeadToEmail({ name, phone, date, boat, guests });

      // Open WhatsApp directly
      const waUrl = `https://wa.me/919446821720?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');

      // Visual feedback
      if (submitBtn) {
        submitBtn.innerHTML = '✓ Sent to Email & WhatsApp!';
        submitBtn.style.background = '#10B981';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          closeLeadModal();
        }, 2000);
      }
    });
  }

  // Close modal when clicking on overlay background
  const modalOverlay = document.getElementById('lead-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeLeadModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeadModal();
    }
  });
});

// Open Pop-up Lead Box
window.openLeadModal = function(boatName, badgeText, defaultGuests) {
  const modal = document.getElementById('lead-modal');
  if (!modal) return;

  const titleEl = document.getElementById('modal-title');
  const badgeEl = document.getElementById('modal-badge');
  const hiddenChoice = document.getElementById('modal-boat-choice');
  const guestSelect = document.getElementById('modal-guest-count');

  if (titleEl) titleEl.textContent = `Book ${boatName}`;
  if (badgeEl) badgeEl.textContent = badgeText || boatName;
  if (hiddenChoice) hiddenChoice.value = boatName;
  if (guestSelect && defaultGuests) guestSelect.value = defaultGuests;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  const nameInput = document.getElementById('modal-guest-name');
  if (nameInput) {
    setTimeout(() => nameInput.focus(), 100);
  }
};

// Close Pop-up Lead Box
window.closeLeadModal = function() {
  const modal = document.getElementById('lead-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
};

// Quick boat selection fallback
window.selectBoat = function(boatName) {
  window.openLeadModal(boatName, boatName.split(' ')[0], '2 Adults');
};
