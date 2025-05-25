document.addEventListener('DOMContentLoaded', function() {
    const validateButton = document.getElementById("validateJS");
    if (validateButton) {
        validateButton.addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();
            const gender = document.querySelector('input[name="gender"]:checked');

            const errors = [];

            if (!name) errors.push("Ad Soyad boş bırakılamaz!");
            
            // Güncellenmiş e-posta kontrolü
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|edu|net|org|gov|tr)$/i;
            if (!email.match(emailPattern)) {
                errors.push("Geçerli bir e-posta adresi girin! (.com, .edu, .net, .org, .gov veya .tr ile bitmeli)");
            }

           if (!/^\d{12}$/.test(phone)) {
                errors.push("Telefon numarası 12 haneli ve sadece rakamlardan oluşmalıdır!");
            }
            if (!gender) errors.push("Cinsiyet seçmelisiniz!");

            if (!message) errors.push("Mesaj bölümü boş bırakılamaz!");

            if (errors.length > 0) {
                alert("Hatalar:\n" + errors.join("\n"));
            } else {
                alert("JavaScript ile doğrulama başarılı!");
            }

            console.log("JavaScript butonuna tıklandı!");
        });
    }
});

// E-posta validasyon fonksiyonu
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Form gönderimini kontrol et
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    
    if (!validateEmail(email)) {
        alert('Lütfen geçerli bir e-posta adresi giriniz (örnek: ornek@site.com)');
        e.preventDefault(); // Form gönderimini engelle
    }
    
    // Diğer validasyon kontrolleri buraya eklenebilir
});

// JavaScript ile Kontrol butonu için
document.getElementById('validateJS').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    
    if (!validateEmail(email)) {
        alert('JavaScript: Geçersiz e-posta formatı!');
    } else {
        alert('JavaScript: E-posta geçerli!');
    }
});