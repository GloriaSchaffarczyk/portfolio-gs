<?php
// Fehleranzeige aktivieren (Debugging)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS": // Preflighting für CORS
        header("Access-Control-Allow-Origin: https://gloriacodes.de");
        header("Access-Control-Allow-Origin: https://gloria-schaffarczyk.de");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case "POST": // E-Mail-Versand
        header("Access-Control-Allow-Origin: https://gloriacodes.de");
        header("Access-Control-Allow-Origin: https://gloria-schaffarczyk.de");
        header("Content-Type: application/json");

        // Eingabedaten abrufen
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Eingaben validieren
        $email = filter_var($params->email, FILTER_VALIDATE_EMAIL);
        $name = htmlspecialchars($params->name, ENT_QUOTES, 'UTF-8');
        $message = htmlspecialchars($params->message, ENT_QUOTES, 'UTF-8');

        if (!$email || empty($name) || empty($message)) {
            http_response_code(400); // Bad Request
            echo json_encode([
                "success" => false,
                "message" => "Invalid input. Please check your data."
            ]);
            exit;
        }

        // SMTP-Einstellungen
        $smtpHost = "smtp.strato.de";
        $smtpPort = 587; // TLS-Port für Strato
        ini_set("SMTP", $smtpHost);
        ini_set("smtp_port", $smtpPort);

        // E-Mail-Konfiguration
        $recipient = "webmaster@gloriacodes.de";
        $subject = "Contact Form Submission from <$email>";
        $formattedMessage = "
            <html>
            <head><title>Contact Form</title></head>
            <body>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Message:</strong><br>$message</p>
            </body>
            </html>
        ";

        // E-Mail-Header
        $headers = [];
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-Type: text/html; charset=utf-8";
        $headers[] = "From: webmaster@gloriacodes.de";
        $headers[] = "Reply-To: $email";
        $headers[] = "X-Mailer: PHP/" . phpversion();

        // E-Mail senden
        if (mail($recipient, $subject, $formattedMessage, implode("\r\n", $headers))) {
            echo json_encode([
                "success" => true,
                "message" => "Email sent successfully."
            ]);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode([
                "success" => false,
                "message" => "Failed to send email. Please check server settings."
            ]);
        }
        exit;

    default: // Andere Methoden ablehnen
        header("Allow: POST", true, 405);
        exit;
}
?>