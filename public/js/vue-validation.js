const app = Vue.createApp({
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            gender: '',
            subject: '', // Bu satırı ekledik!
            errors: []
        };
    },
    methods: {
        validateForm() {
            this.errors = [];

            if (!this.name) this.errors.push("Ad Soyad boş bırakılamaz!");
            if (!this.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                this.errors.push("Geçerli bir e-posta adresi girin!");
            }
            if (!this.phone.match(/^\d+$/)) {
                this.errors.push("Telefon numarası sadece rakamlardan oluşmalıdır!");
            }
            if (!this.gender) this.errors.push("Cinsiyet seçmelisiniz!");
            if (!this.subject) this.errors.push("Konu seçmelisiniz!"); // Yeni kontrol ekledik
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
