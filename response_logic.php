<?php

// Define a function that takes user input and generates a response
function generate_response($user_input) {
    // Define questions and answers
    $faq = [
        "What are your office hours?" => "Our office hours are from 9 am to 5 pm, Monday to Friday.",
        "How do I reset my password?" => "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
        "What is the exam schedule?" => "The exam schedule is available on the school website under the 'Exam' section.",
        "Hello"=> "Hello, I am Sara how can i help you."
        // Add more questions and answers as needed
    ];

    // Default response if no match is found
    $response = "I'm sorry, I don't have an answer for that yet. Can you please ask another question?";

    // Convert user input to lowercase
    $user_input_lower = strtolower($user_input);

    // Check if the user's input matches any question in the FAQ
    foreach ($faq as $question => $answer) {
        // Convert question to lowercase for comparison
        $question_lower = strtolower($question);
        if (stripos($user_input_lower, $question_lower) !== false) {
            $response = $answer;
            break;
        }
    }

    return $response;
}
?>