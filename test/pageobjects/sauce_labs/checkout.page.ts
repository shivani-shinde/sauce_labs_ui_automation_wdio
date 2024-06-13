class CheckoutPage {
    get checkoutPageTitle() {
        return $(`[data-test="title"]`)
    }

    get firstName() {
        return $(`#first-name`)
    }

    get lastName() {
        return $(`#last-name`)
    }

    get zipcode() {
        return $(`#postal-code`)
    }
    get continueBtn() {
        return $(`#continue`)
    }
    get cancelBtn() {
        return $(`#cancel`)
    }
}

export default new CheckoutPage()