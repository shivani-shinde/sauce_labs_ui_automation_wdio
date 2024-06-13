class CheckoutCompletePage {
    get thankYouText() {
        return $(`//h2[text()="Thank you for your order!"]`)
    }
    get yourOrderText() {
        return $(`//div[text()="Your order has been dispatched, and will arrive just as fast as the pony can get there!"]`)
    }
    get backToHomeBtn() {
        return $(`#back-to-products`)
    }
}

export default new CheckoutCompletePage()