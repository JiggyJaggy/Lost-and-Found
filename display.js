window.addEventListener('load', function() {
    const itemsContainer = document.getElementById('items-container');
    const reports = JSON.parse(localStorage.getItem('foundItems')) || [];

    if (reports.length === 0) {
        itemsContainer.innerHTML = "<p>No items reported yet.</p>";
        return;
    }

    reports.forEach(report => {
        const card = document.createElement('div');
        card.classList.add('item-card');

        // Create item HTML
        card.innerHTML = `
            <img src="${report.image || 'placeholder.jpg'}" alt="Item Image">
            <h3>${report.itemFound}</h3>
            <p>${report.itemDescription || 'No description provided.'}</p>
            <p><strong>Status:</strong> ${report.status}</p>
            <p><strong>Location:</strong> ${report.location}</p>
            <p><strong>Date:</strong> ${report.date}</p>
        `;

        itemsContainer.appendChild(card);
    });
});
