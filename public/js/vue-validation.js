const app = Vue.createApp({
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            gender: '',
            subject: '',
            errors: []
        };
    },
    methods: {
        validateForm() {
            this.errors = [];

            if (!this.name) this.errors.push("Ad Soyad boş bırakılamaz!");
            
            // Güncellenmiş e-posta kontrolü (.com, .edu, .net, .org, .gov, .tr ile bitmeli)
            if (!this.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|edu|net|org|gov|tr)$/i)) {
                this.errors.push("Geçerli bir e-posta adresi girin! (.com, .edu, .net, .org, .gov veya .tr ile bitmeli)");
            }
            
            if (!this.phone.match(/^\d{11}$/)) {
                this.errors.push("Telefon numarası 11 haneli ve sadece rakamlardan oluşmalıdır!");
            }
            if (!this.gender) this.errors.push("Cinsiyet seçmelisiniz!");
            if (!this.subject) this.errors.push("Konu seçmelisiniz!");
            if (!this.message) this.errors.push("Mesaj bölümü boş bırakılamaz!");

            if (this.errors.length > 0) {
                alert("Hatalar:\n" + this.errors.join("\n"));
            } else {
                alert("Vue.js ile doğrulama başarılı!");
            }
        }
    }
});

app.mount("#contactForm");