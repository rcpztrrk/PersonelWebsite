<?php
session_start();

// Formdan gelen verileri al
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Kullanıcı adı ve şifre boş mu kontrol et
if (empty($username) || empty($password)) {
    header("Location: giris.html?error=empty_fields");
    exit();
}

// Kullanıcı adı email formatında mı kontrol et
if (!filter_var($username, FILTER_VALIDATE_EMAIL) || !preg_match('/^[a-zA-Z][0-9]{10}@sakarya\.edu\.tr$/', $username)) {
    header("Location: giris.html?error=invalid_email");
    exit();
}

// Kullanıcı adından öğrenci numarasını çıkar
$studentNumber = str_replace('@sakarya.edu.tr', '', $username);

// Giriş başarılı ise
if ($password === $studentNumber) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $studentNumber;
    
    echo "<script>
        sessionStorage.setItem('username', '$studentNumber');
        window.location.href = 'index.html?login=success';
    </script>";
    exit();
} else {
    header("Location: giris.html?error=invalid_credentials");
    exit();
}
?>