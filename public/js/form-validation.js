document.addEventListener('DOMContentLoaded', function() {
    const validateButton = document.getElementById("validateJS");
    if (validateButton) { // Butonun varlığını kontrol et
        validateButton.addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();
            const gender = document.querySelector('input[name="gender"]:checked');

            const errors = [];

            if (!name) errors.push("Ad Soyad boş bırakılamaz!");
            
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email.match(emailPattern)) errors.push("Geçerli bir e-posta adresi girin!");

            if (!/^\d+$/.test(phone)) errors.push("Telefon numarası sadece rakamlardan oluşmalıdır!");

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
