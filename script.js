const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  toggle.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();


/* WhatsApp enquiry form: prepares a message for the owner; the customer taps Send in WhatsApp. */
const enquiryForm = document.getElementById('whatsapp-enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const data = new FormData(enquiryForm);
    const get = (key) => String(data.get(key) || '').trim();
    const lines = [
      'Hello LUCKY CATERING & COOKING,',
      '',
      'I would like to enquire about an order.',
      '',
      `Name: ${get('customerName')}`,
      `Phone number: ${get('customerPhone')}`,
      `Event: ${get('eventType')}`,
      `Date: ${get('eventDate') || 'Not specified'}`,
      `No. of people: ${get('guestCount') || 'Not specified'}`,
      `Items / Menu: ${get('requirements') || 'Not specified'}`,
      '',
      'Please contact me to discuss availability, menu and pricing. Thank you.'
    ];
    const message = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/917286925869?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}
