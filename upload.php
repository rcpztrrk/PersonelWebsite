<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uploadDir = "uploads/";
    
    // Create uploads directory if it doesn't exist
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    
    $uploadFile = $uploadDir . basename($_FILES["file"]["name"]);
    
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $uploadFile)) {
        // Collect all form data
        $queryParams = http_build_query([
            'name' => $_POST['name'] ?? '',
            'email' => $_POST['email'] ?? '',
            'phone' => $_POST['phone'] ?? '',
            'subject' => $_POST['subject'] ?? '',
            'gender' => $_POST['gender'] ?? '',
            'message' => $_POST['message'] ?? '',
            'file' => basename($_FILES["file"]["name"])
        ]);
        
        header("Location: gonderilen_veriler.html?" . $queryParams);
        exit();
    } else {
        echo "Dosya yüklenirken hata oluştu.";
    }
}
?>