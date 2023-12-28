document.getElementById('showGreetingsButton').addEventListener('click', function() {
    var greetingsContainer = document.getElementById('greetingsContainer');
    var showGreetingsButton = document.getElementById('showGreetingsButton');

    // Ändere den Anzeigestatus des Containers
    greetingsContainer.style.display = 'block';

    // Verstecke die Schaltfläche, nachdem darauf geklickt wurde
    showGreetingsButton.style.display = 'none';
});
