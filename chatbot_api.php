<?php
// Include the response logic function file
include('includes/response_logic.php');

// Set the content type header to JSON
header('Content-Type: application/json');

// Get the user input from the POST request
$user_input = isset($_POST['user_input']) ? $_POST['user_input'] : '';

// Generate a response using the provided user input
$response = generate_response($user_input);

// Return the response as a JSON object
echo json_encode(['response' => $response]);
?>