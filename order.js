const menuData = [
    {
        id: 1,
        name: "Artisan Latte",
        price: 5.50,
        category: "coffee",
        description: "Rich espresso with velvety steamed milk.",
        image: "assets/menu-coffee.png"
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 4.50,
        category: "coffee",
        description: "Espresso with equal parts steamed milk and foam.",
        image: "assets/menu-cappuccino.png"
    },
    {
        id: 3,
        name: "Espresso",
        price: 3.00,
        category: "coffee",
        description: "Strong, concentrated coffee shot.",
        image: "assets/menu-espresso.png"
    },
    {
        id: 4,
        name: "Classic Sharma Burger",
        price: 14.00,
        category: "burger",
        description: "Premium beef patty, cheddar, lettuce, tomato.",
        image: "assets/menu-burger.png"
    },
    {
        id: 5,
        name: "Spicy Chicken Burger",
        price: 12.50,
        category: "burger",
        description: "Crispy chicken breast with spicy mayo.",
        image: "assets/menu-chicken-burger.png"
    },
    {
        id: 6,
        name: "Truffle Mushroom Pasta",
        price: 16.50,
        category: "pasta",
        description: "Creamy truffle sauce with wild mushrooms.",
        image: "assets/menu-pasta.png"
    },
    {
        id: 7,
        name: "Arrabbiata Pasta",
        price: 14.00,
        category: "pasta",
        description: "Spicy tomato sauce with fresh basil.",
        image: "assets/menu-arrabbiata.png"
    },
    {
        id: 8,
        name: "Iced Caramel Macchiato",
        price: 6.00,
        category: "beverages",
        description: "Espresso, vanilla syrup, milk, ice and caramel drizzle.",
        image: "assets/menu-beverage.png"
    },
    {
        id: 9,
        name: "Fresh Orange Juice",
        price: 5.00,
        category: "beverages",
        description: "Freshly squeezed oranges, no added sugar.",
        image: "assets/menu-orange-juice.png"
    },
    {
        id: 10,
        name: "Chocolate Lava Cake",
        price: 8.50,
        category: "dessert",
        description: "Warm chocolate cake with a molten center.",
        image: "assets/menu-dessert.png"
    },
    {
        id: 11,
        name: "New York Cheesecake",
        price: 7.50,
        category: "dessert",
        description: "Classic creamy cheesecake with berry compote.",
        image: "assets/menu-cheesecake.png"
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupEventListeners();
});

function renderMenu() {
    const categories = ['coffee', 'burger', 'pasta', 'beverages', 'dessert'];

    categories.forEach(cat => {
        const container = document.querySelector(`#${cat} .menu-items-grid`);
        if (!container) return;

        const items = menuData.filter(item => item.category === cat);

        container.innerHTML = items.map(item => `
            <div class="order-item-card">
                <div class="order-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="order-item-details">
                    <h4>${item.name}</h4>
                    <p class="order-item-desc">${item.description}</p>
                    <div class="order-item-footer">
                        <span class="order-item-price">$${item.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

function setupEventListeners() {
    // Category Navigation
    document.querySelectorAll('.category-list li').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.category-list li').forEach(li => li.classList.remove('active'));
            item.classList.add('active');

            const catId = item.getAttribute('data-category');
            const section = document.getElementById(catId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
