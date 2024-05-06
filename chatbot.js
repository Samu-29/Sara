$(document).ready(function () {
    const chatMessages = $('#chat-messages');
    const userInput = $('#user-input');
    const sendButton = $('#send-button');

    // Event listener for send button
    sendButton.on('click', function () {
        sendUserMessage();
    });

    // Event listener for "Enter" keypress on user input
    userInput.on('keypress', function (event) {
        if (event.which === 13) { // 13 is the key code for the Enter key
            event.preventDefault(); // Prevent form submission
            sendUserMessage();
        }
    });

    // Function to send user message and handle API request
    function sendUserMessage() {
        const userMessage = userInput.val().trim();
    
        // Ignore empty messages
        if (userMessage === '') return;
    
        // Display the user's message in the chat
        displayMessage('user', userMessage);
        userInput.val(''); // Clear the input field
    
        // Send the user input to the chatbot API
        $.ajax({
            url: 'chatbot_api.php',
            type: 'POST',
            data: {
                user_input: encodeURIComponent(userMessage)
            },
            success: function(response) {
                // Check if the response contains a 'response' property
                if (response && response.response) {
                    // Display the bot's response in the chat
                    displayMessage('bot', response.response);
                } else {
                    displayMessage('bot', 'Oops! Something went wrong. No response from the bot.');
                }
            },
            error: function(error) {
                console.error('API Error:', error);
                displayMessage('bot', 'Oops! Something went wrong. Unable to fetch a response from the bot.');
            },
        });
    }
    

    // Function to display messages in the chat
    function displayMessage(sender, message) {
        const messageElement = $('<div class="message"></div>');
        messageElement.addClass(sender);
        messageElement.text(message);
        chatMessages.append(messageElement);
        chatMessages.scrollTop(chatMessages[0].scrollHeight);
    }
});
