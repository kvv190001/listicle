const renderPlayers = async () => {
    
    const response = await fetch('/players')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')
    const forward = document.getElementById('forward-players')
    const midfielder = document.getElementById('midfielder-players')
    const defender = document.getElementById('defender-players')
    const goalkeeper = document.getElementById('goalkeeper-players')

    if (data) {

        data.map(player => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${player.image})`

            const name = document.createElement('h3')
            name.textContent = player.name
            bottomContainer.appendChild(name)

            const number = document.createElement('p')
            number.textContent = 'Number: ' + player.number
            bottomContainer.appendChild(number)

            const position = document.createElement('p')
            position.textContent = 'Position: ' + player.position
            bottomContainer.appendChild(position)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/players/${player.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 

            // mainContent.appendChild(card)
            if(player.position == "FORWARD"){
                forward.appendChild(card)
            } else if (player.position == "MIDFIELDER"){
                midfielder.appendChild(card)
            } else if(player.position == "DEFENDER"){
                defender.appendChild(card)
            } else {
                goalkeeper.appendChild(card)
            }
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Players Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderPlayers()
}