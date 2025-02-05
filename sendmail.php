<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sumitaluva@gmail.com";  // 🔹 Replace with your email
    $subject = "New Form Submission";

    // Get form data
    $name = $_POST['full_name'];
    $company = $_POST['company_name'];
    $service = $_POST['service'];
    $email = $_POST['email'];
    $insights = $_POST['insights'];

    // Build email message
    $message = "Full Name: $name\n";
    $message .= "Company Name: $company\n";
    $message .= "Service: $service\n";
    $message .= "Email: $email\n";
    $message .= "Insights: $insights\n";

    // Email headers
    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong.";
    }
}
?>
