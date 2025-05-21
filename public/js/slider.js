  // Kart göster/gizle fonksiyonları
    function showCard(cardId) {
        // Tüm kartları gizle
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('active');
        });
        
        // İlgili kartı göster
        const card = document.getElementById(cardId);
        if (card) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    function hideCard(cardId) {
        const card = document.getElementById(cardId);
        if (card) {
            card.classList.remove('active');
            history.pushState(null, null, ' ');
        }
    }
    
    // Slider fonksiyonları (mevcut kodunuz)
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    // Mekan Slider Fonksiyonları

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Yemek Slider Fonksiyonları (Ayrı fonksiyonlar)
let foodSlideIndex = 1;
showFoodSlides(foodSlideIndex);

function plusFoodSlides(n) {
    showFoodSlides(foodSlideIndex += n);
}

function currentFoodSlide(n) {
    showFoodSlides(foodSlideIndex = n);
}

function showFoodSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myFoodSlides");
    let dots = document.getElementsByClassName("food-dot");
    
    if (n > slides.length) {foodSlideIndex = 1}    
    if (n < 1) {foodSlideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" food-active", "");
    }
    
    slides[foodSlideIndex-1].style.display = "block";  
    dots[foodSlideIndex-1].className += " food-active";
}
    // Tüm sayfalarda çalışacak navbar güncelleme
    document.addEventListener('DOMContentLoaded', function() {
        const username = sessionStorage.getItem('username');
        const authLink = document.getElementById('authLink');
        if (authLink) {
            authLink.innerHTML = username 
                ? '<a href="logout.php">Çıkış Yap</a>' 
                : '<a href="giris.html">Giriş Yap</a>';
        }
    });

   function toggleNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
   }