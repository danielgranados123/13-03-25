const getApi2Characters = async () => {
    try {
  const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) throw new Error('Error al obtener datos');
      const data = await response.json();
      const cardsParent = document.getElementById('cards');
      data.results.forEach(api2 => {
        const card = document.createElement('div');
        card.innerHTML = `
          <div class="dogs">
            <div class="dog">
              <h2> ${api2.name}</h2>
              <p>${api2.status}</p>
            </div>
          </div>
        `;
        cardsParent.appendChild(card);
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
   
  getApi2Characters();