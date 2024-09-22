const products = {
    herbicida: [
        {
            name: "Herbicida A",
            dosageHa: "2L por hectare",
            dosage20L: "100ml por 20L",
            description: "Controle de ervas daninhas."
        },
        {
            name: "Herbicida B",
            dosageHa: "3L por hectare",
            dosage20L: "150ml por 20L",
            description: "Ação sistêmica sobre plantas invasoras."
        },
        {
            name: "Herbicida C",
            dosageHa: "2L por hectare",
            dosage20L: "100ml por 20L",
            description: "Controle de ervas daninhas."
        }
    ],
    fungicida: [
        {
            name: "Fungicida A",
            dosageHa: "1L por hectare",
            dosage20L: "50ml por 20L",
            description: "Controle de fungos em culturas diversas."
        },
        {
            name: "Fungicida A",
            dosageHa: "1L por hectare",
            dosage20L: "50ml por 20L",
            description: "Controle de fungos em culturas diversas."
        }
    ],
    inseticida: [
        {
            name: "Inseticida A",
            dosageHa: "1.5L por hectare",
            dosage20L: "75ml por 20L",
            description: "Eliminação de pragas como lagartas."
        }
    ],
    acaricida: [
        {
            name: "Acaricida A",
            dosageHa: "1.2L por hectare",
            dosage20L: "60ml por 20L",
            description: "Controle de ácaros em diversas culturas."
        }
    ],
    nematicida: [
        {
            name: "Nematicida A",
            dosageHa: "1.8L por hectare",
            dosage20L: "90ml por 20L",
            description: "Controle de nematoides nas raízes das plantas."
        },
        {
            name: "Nematicida b",
            dosageHa: "2L por hectare",
            dosage20L: "90ml por 20L",
            description: "Controle de nematoides nas raízes das plantas."
        }


    ]
};

function showCategory(category) {
    const categoryTitle = document.getElementById('category-title');
    const productList = document.getElementById('products');
    const productListContainer = document.getElementById('product-list');

    // Atualiza o título da categoria e esconde os detalhes do produto
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    productList.innerHTML = '';
    
    // Popula a lista com os produtos da categoria
    products[category].forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = product.name;
        li.onclick = () => showProductDetails(category, index);
        productList.appendChild(li);
    });

    // Exibe a lista de produtos e esconde os detalhes do produto
    productListContainer.classList.remove('hidden');
    document.getElementById('product-details').classList.add('hidden');
}

function showProductDetails(category, index) {
    const product = products[category][index];

    // Atualiza os detalhes do produto
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-dosage-ha').textContent = product.dosageHa;
    document.getElementById('product-dosage-20l').textContent = product.dosage20L;
    document.getElementById('product-description').textContent = product.description;

    // Exibe os detalhes do produto e esconde a lista
    document.getElementById('product-list').classList.add('hidden');
    document.getElementById('product-details').classList.remove('hidden');
}

function goBack() {
    // Esconde os detalhes do produto e exibe a lista de produtos
    document.getElementById('product-details').classList.add('hidden');
    document.getElementById('product-list').classList.remove('hidden');
}
