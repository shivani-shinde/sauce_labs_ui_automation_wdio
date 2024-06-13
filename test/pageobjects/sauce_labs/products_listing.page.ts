class ProductsListingPage {

    get appLogo() {
        return $(`.app_logo`)
    }
    get productsTitle() {
        return $(`[data-test="title"]`)
    }
    get sortingDropdown() {
        return $(`.product_sort_container`)
    }
    get allItems() {
        return $$(`//div[@data-test="inventory-item"]//div[@data-test="inventory-item-name"]`)
    }
    productDescription(productName: string) {
        return $(`//div[text()='${productName}']/ancestor::div[@data-test="inventory-item"]//div[@data-test="inventory-item-desc"]`)
    }
    productPrice(productName: string) {
        return $(`//div[text()='${productName}']/ancestor::div[@data-test="inventory-item"]//div[@data-test="inventory-item-price"]`)
    }
    addToCartBtn(productName: string) {
        return $(`//div[text()='${productName}']/ancestor::div[@data-test="inventory-item"]//button`)
    }
    public async addRandomProductToCart() {
        const items = await this.allItems
        const randomNum = Math.floor(Math.random() * items.length)
        const name = await items[randomNum].getText()
        const productDescription = await this.productDescription(name).getText()
        const productPrice = await this.productPrice(name).getText()
        await this.addToCartBtn(name).click()

        return [name, productDescription, productPrice]
    }
    get shoppingCartBadge() {
        return $(`.shopping_cart_badge`)
    }
    get cart() {
        return $(`.shopping_cart_link`)
    }
}

export default new ProductsListingPage()