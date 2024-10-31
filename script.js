/*
// File: public/script.js (Frontend - JavaScript)
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    let currentPage = 1;
    const productsPerPage = 6; // 3 columns x 2 rows per page

    // Fetch products from server
    function loadProducts(page) {
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                // Clear previous products
                productGrid.innerHTML = '';

                // Calculate the range of products to display
                const startIndex = (page - 1) * productsPerPage;
                const endIndex = startIndex + productsPerPage;
                const productsToDisplay = products.slice(startIndex, endIndex);

                // Display products
                productsToDisplay.forEach(product => {
                    const productItem = document.createElement('a');
                    productItem.classList.add('product-item');
                    productItem.href = product.affiliateLink;
                    productItem.target = '_blank';
                    productItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description ? product.description : ''}</p>

                    `;
                    productGrid.appendChild(productItem);
                });

                // Show/Hide pagination buttons
                prevPageButton.style.display = page > 1 ? 'inline-block' : 'none';
                nextPageButton.style.display = products.length > endIndex ? 'inline-block' : 'none';
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    // Load initial products
    loadProducts(currentPage);

    // Handle next button click
    nextPageButton.addEventListener('click', function() {
        currentPage++;
        loadProducts(currentPage);
    });


    // Handle previous button click
    prevPageButton.addEventListener('click', function() {
        currentPage--;
        loadProducts(currentPage);
    });
});
*/// File: public/script.js

document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    let currentPage = 1;
    const productsPerPage = 6; // Set number of items per page (e.g., 3 columns x 2 rows)

    function loadProducts(page) {
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                console.log("Total Products:", products.length); // Log total products for debugging

                // Clear previous products
                productGrid.innerHTML = '';

                // Calculate the range of products to display
                const startIndex = (page - 1) * productsPerPage;
                const endIndex = startIndex + productsPerPage;
                const productsToDisplay = products.slice(startIndex, endIndex);

                // Display products
                productsToDisplay.forEach(product => {
                    const productItem = document.createElement('a');
                    productItem.classList.add('product-item');
                    productItem.href = product.affiliateLink;
                    productItem.target = '_blank';

                    const description = product.description ? product.description : '';

                    productItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${description}</p>
                    `;
                    productGrid.appendChild(productItem);
                });

                // Show/Hide pagination buttons based on the current page and product count
                prevPageButton.style.display = page > 1 ? 'inline-block' : 'none';
                nextPageButton.style.display = products.length > endIndex ? 'inline-block' : 'none';

                console.log("Showing products:", startIndex, "to", endIndex); // Log range for debugging
                console.log("Next button visible:", products.length > endIndex); // Log next button visibility
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    // Load initial products
    loadProducts(currentPage);

    // Handle next button click
    nextPageButton.addEventListener('click', function() {
        currentPage++;
        loadProducts(currentPage);
    });

    // Handle previous button click
    prevPageButton.addEventListener('click', function() {
        currentPage--;
        loadProducts(currentPage);
    });
});
