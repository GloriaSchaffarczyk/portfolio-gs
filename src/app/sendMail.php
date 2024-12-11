<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"): // Process the email
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");

        // Get the raw POST data
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Validate inputs
        $email = filter_var($params->email, FILTER_VALIDATE_EMAIL);
        $name = htmlspecialchars($params->name, ENT_QUOTES, 'UTF-8');
        $message = htmlspecialchars($params->message, ENT_QUOTES, 'UTF-8');

        if (!$email || empty($name) || empty($message)) {
            http_response_code(400); // Bad request
            echo json_encode([
                "success" => false,
                "message" => "Invalid input. Please check your data."
            ]);
            exit;
        }

        // Email configuration
        $recipient = 'gloria.schaffarczyk@gmail.com';  
        $subject = "Contact From <$email>";
        $formattedMessage = "From: $name<br>Message:<br>$message";

        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: webmaster@gloriacodes.com"; // Use your domain email

        // Attempt to send the email
        if (mail($recipient, $subject, $formattedMessage, implode("\r\n", $headers))) {
            echo json_encode([
                "success" => true,
                "message" => "Email sent successfully."
            ]);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode([
                "success" => false,
                "message" => "Failed to send email."
            ]);
        }
        break;

    default: // Reject any non-POST or OPTIONS requests
        header("Allow: POST", true, 405); // Method not allowed
        exit;
}
