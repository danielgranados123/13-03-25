// API de dogs
const getDogsCharacters = async () => {
    try {
const response = await fetch('https://dogapi.dog/api/v2/breeds');
        if (!response.ok) throw new Error('Error al obtener datos');
 
        const data = await response.json();
 
        const cardsParent = document.getElementById('cards');
        data.data.forEach(dog => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="dogs">
                    <div class="dog">
                        <h2>${dog.attributes.name}</h2>
                        <p>${dog.attributes.description}</p>
                    </div>
                </div>
            `;
            cardsParent.appendChild(card);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
};

getDogsCharacters();