const getApi3Characters = async () => {
    try {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
      if (!response.ok) throw new Error('Error al obtener datos');
      const data = await response.json();
      const cardsParent = document.getElementById('cards');

      const card = document.createElement('div');
      card.innerHTML = `
        <div class="dogs">
          <div class="dog">
            <h2>${data.name}</h2>
            <p>${data.description.en}</p>
          </div>
        </div>
      `;
      cardsParent.appendChild(card);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
   
  getApi3Characters();