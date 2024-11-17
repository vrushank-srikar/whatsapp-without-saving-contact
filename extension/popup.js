// popup.js
document.getElementById('openWhatsAppWeb').addEventListener('click', openWhatsAppWeb);
document.getElementById('openWhatsAppAPI').addEventListener('click', openWhatsAppAPI);

function openWhatsAppWeb() {
    const countryCode = document.getElementById('countryCode').value || '91';
    const phone = document.getElementById('phoneInput').value.trim();
    const messageDiv = document.getElementById('message');

    if (!phone || isNaN(phone) || phone.length < 1) {
        messageDiv.textContent = "Please enter a valid phone number.";
        messageDiv.style.color = "red";
        return;
    }

    const link = `https://web.whatsapp.com/send/?phone=${countryCode}${phone}`;
    window.open(link, '_blank');

    messageDiv.textContent = "Opening WhatsApp Web...";
    messageDiv.style.color = "green";
}

function openWhatsAppAPI() {
    const countryCode = document.getElementById('countryCode').value || '91';
    const phone = document.getElementById('phoneInput').value.trim();
    const messageDiv = document.getElementById('message');

    if (!phone || isNaN(phone) || phone.length < 1) {
        messageDiv.textContent = "Please enter a valid phone number.";
        messageDiv.style.color = "red";
        return;
    }

    const link = `https://api.whatsapp.com/send?phone=${countryCode}${phone}`;
    window.open(link, '_blank');

    messageDiv.textContent = "Opening WhatsApp API...";
    messageDiv.style.color = "green";
}
