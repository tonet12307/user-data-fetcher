async function fetchUsers() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const users = await response.json();

        displayUsers(users);

    } catch (error) {

        console.error("Error:", error);
        document.getElementById("user-container").innerHTML =
            "<p style='color:red;'>Error loading users.</p>";
    }
}

function displayUsers(users) {
    const container = document.getElementById("user-container");
    container.innerHTML = "";

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

        container.appendChild(userCard);
    });
}

fetchUsers();