class CartPage {
    get title() {
        return $(`[data-test="title"]`)
    }
    get continueShoppingBtn() {
        return $(`#continue-shopping`)
    }
    get checkoutBtn() {
        return $(`#checkout`)
    }
    get cartItemsName() {
        return $(`//div[@class="cart_item"]//div[@data-test="inventory-item-name"]`)
    }
    get cartItemsDesc() {
        return $(`//div[@class="cart_item"]//div[@data-test="inventory-item-desc"]`)
    }
    get cartItemsPrice() {
        return $(`//div[@class="cart_item"]//div[@data-test="inventory-item-price"]`)
    }
    get removeBtn () {
        return $(`//div[@class="cart_item"]//button[text()='Remove']`)
    }
}

export default new CartPage()