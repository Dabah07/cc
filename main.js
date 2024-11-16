// Crer la clase Prodact

class Prodact {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
// Créer la classe Prodact
class ShoppingCartItem {
    constructor(prodact, quantity) {
        this.product = prodact;  
        this.quantity = quantity;
    }

   
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Panier d'achat

class ShoppingCart {
    constructor() {
        this.items = [];  
    }

    
    addItem(product, quantity) {
        
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayItems() {
        if (this.items.length === 0) {
            console.log("Le panier est vide.");
        } else {
            this.items.forEach(item => {
                console.log(`${item.product.name} x ${item.quantity} - Total : ${item.getTotalPrice()}€`);
            });
        }
    }
}
