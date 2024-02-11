function propose() {
    var userName = prompt("What's your name?");
    var proposalMessage = document.getElementById('proposal-message');
    var proposeButton = document.getElementById('propose-button');

    if (userName) {
        var message = `Hi ${userName}! I love you more than words can express. Will you be mine forever? ❤️`;
        
        proposalMessage.innerHTML = message;
        proposalMessage.style.display = 'block';

        proposeButton.style.display = 'none';
    }
}