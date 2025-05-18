<?php
session_start();

// Tüm session verilerini temizle
$_SESSION = array();

// Session'ı yok et
session_destroy();

// JavaScript ile sessionStorage'ı da temizle ve yönlendir
echo "<script>
    sessionStorage.removeItem('username');
    window.location.href = 'index.html';
</script>";
exit();
?>