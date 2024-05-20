<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <link rel="stylesheet" href="Complaint-form.css">
</head>
<body>
<form action="submit.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
        <br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
