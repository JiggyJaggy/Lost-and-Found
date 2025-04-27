document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Sample data for now (you can load this from localStorage later)
    const items = [
        { name: "Black Umbrella", description: "Left in library, small tears", location: "Library" },
        { name: "Blue Water Bottle", description: "Sticker on it, found in canteen", location: "Canteen" },
        { name: "USB Flash Drive", description: "16GB, white color, found in classroom", location: "Room 204" },
    ];

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        const filteredItems = items.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query)
        );

        if (filteredItems.length === 0) {
            searchResults.innerHTML = `<p>No matching items found.</p>`;
        } else {
            filteredItems.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("result-item");
                itemDiv.innerHTML = `
                    <h3>${item.name}</h3>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <p><strong>Location:</strong> ${item.location}</p>
                `;
                searchResults.appendChild(itemDiv);
            });
        }
    });
});
