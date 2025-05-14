


window.onload = function() {
    document.getElementById("validateJS").addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();
        let gender = document.querySelector('input[name="gender"]:checked');

        let errors = [];

        if (!name) errors.push("Ad Soyad boş bırakılamaz!");
        
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.match(emailPattern)) errors.push("Geçerli bir e-posta adresi girin!");

        if (!/^\d+$/.test(phone)) errors.push("Telefon numarası sadece rakamlardan oluşmalıdır!");

        if (!gender) errors.push("Cinsiyet seçmelisiniz!");

        if (!message) errors.push("Mesaj bölümü boş bırakılamaz!");

        if (errors.length > 0) {
            alert("Hatalar:\n" + errors.join("\n"));
        } else {
            alert("JavaScript ile doğrulama başarılı!");
        }
    });

    // Konsola basıldığında mesaj yazdırmayı ekleyelim!
    document.getElementById("validateJS").addEventListener("click", function () {
        console.log("JavaScript butonuna tıklandı!");
    });
};
