class CheckoutOverviewPage {
    get cartItemsName() {
        return $(`//div[@class="cart_item"]//div[@data-test="inventory-item-name"]`)
    }
    get cartItemsDesc() {
        return $(`//div[@class="cart_item"]//div[@data-test="inventory-item-desc"]`)
    }
    get cartItemsPrice() {
        return $(`//div[@class="cart_item"]//div[@data-test="inventory-item-price"]`)
    }
   
    async itemTotal() {
        const total = await $(`[data-test="subtotal-label"]`).getText()
        return Number(total.split("$")[1])
    }

    async taxTotal() {
        const total = await $(`[data-test="tax-label"]`).getText()
        return Number(total.split("$")[1])
    }

    async total() {
        const total = await $(`[data-test="total-label"]`).getText()        
        return Number(total.split("$")[1])
    }

    get cancelBtn() {
        return $(`#cancel`)
    }

    get finish() {
        return $(`#finish`)
    }
    
}

export default new CheckoutOverviewPage()