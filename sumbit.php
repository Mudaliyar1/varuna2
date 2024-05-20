<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $secretKey = 'YOUR_SECRET_KEY'; // Replace with your secret key
    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$recaptchaResponse}");
    $responseData = json_decode($verifyResponse);

    if ($responseData->success) {
        // reCAPTCHA was successfully validated
        // You can now process the form data (e.g., save to database, send email, etc.)
        echo "Form submitted successfully!";
    } else {
        echo "reCAPTCHA verification failed. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
