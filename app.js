const firstPlayer = {
    button: document.querySelector('#playerOne'),
    display: document.querySelector('#p1'),
    score: 0
};

const secondPlayer = {
    button: document.querySelector('#playerTwo'),
    display: document.querySelector('#p2'),
    score: 0
};

const rounds = document.querySelector('#round-select');
let numGames = parseInt(rounds.options[rounds.selectedIndex].text)

function play(player, opponent) {
    player.score++;
    player.display.innerText = `${player.score}`;
    if (player.score === numGames) {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
    }
};
firstPlayer.button.addEventListener('click', () => {
    play(firstPlayer, secondPlayer);
});

secondPlayer.button.addEventListener('click', () => {
    play(secondPlayer, firstPlayer);
});

rounds.addEventListener('change', () => {
    numGames = parseInt(rounds.options[rounds.selectedIndex].text);
    doReset();
});

reset.addEventListener('click', () => {
    doReset();
    numGames = parseInt(rounds.options[0].text);
    rounds.selectedIndex = 0;
});

function doReset() {
    for (let p of [firstPlayer, secondPlayer]) {
        p.button.disabled = false;
        p.score = 0;
        p.display.innerText = `${p.score}`;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
}