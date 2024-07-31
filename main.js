// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
        let total = 0;
        cards.forEach(card => {
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace(' $', ''));
            total += quantity * unitPrice;
        });
        document.querySelector('.total').textContent = `${total} $`;
    }

    // Fonction pour supprimer un article
    function deleteCard(card) {
        card.remove();
        updateTotalPrice();
    }

    // Fonction pour aimer un article
    function toggleFavorite(icon) {
        icon.classList.toggle('text-danger'); // Change la couleur en rouge si aimé
    }

    cards.forEach(card => {
        // Gestion des boutons de quantité
        const incrementButton = card.querySelector('.fa-plus-circle');
        const decrementButton = card.querySelector('.fa-minus-circle');
        const quantitySpan = card.querySelector('.quantity');
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace(' $', ''));

        incrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotalPrice();
        });

        decrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotalPrice();
            }
        });

        // Gestion du bouton de suppression
        const deleteButton = card.querySelector('.fa-trash-alt');
        deleteButton.addEventListener('click', () => {
            deleteCard(card);
        });

        // Gestion du bouton "aimer"
        const favoriteButton = card.querySelector('.fa-heart');
        favoriteButton.addEventListener('click', () => {
            toggleFavorite(favoriteButton);
        });
    });

    // Initialisation du prix total
    updateTotalPrice();
});
