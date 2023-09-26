const renderPlayer = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
  
    const response = await fetch('/players')
    const data = await response.json()
  
    const playerContent = document.getElementById('player-content')
  
    let player
  
    player = data.find(player => player.id === requestedID)
  
    if (player) {
      document.getElementById('image').src = player.image
      document.getElementById('name').textContent = player.name
      document.getElementById('number').textContent = 'Number: ' + player.number
      document.getElementById('position').textContent = 'Position: ' + player.position
      document.title = `UnEarthed - ${player.name}`
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No Players Available 😞'
      playerContent.appendChild(message)   
    }
  }
  
  renderPlayer()