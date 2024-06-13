import LoginPage from "../../pageobjects/sauce_labs/login.page.ts";
import ProductsListingPage from "../../pageobjects/sauce_labs/products_listing.page.ts";
import CartPage from "../../pageobjects/sauce_labs/cart.page.ts";
import CheckoutPage from "../../pageobjects/sauce_labs/checkout.page.ts";
import CheckoutOverviewPage from "../../pageobjects/sauce_labs/checkout_overview.page.ts";
import CheckoutCompletePage from "../../pageobjects/sauce_labs/checkout_complete.page.ts";
 
describe('Sauce Labs Demo Test Suite', () => {
    before(async () => {
        await browser.url("https://www.saucedemo.com/")
    })

    it('Checkout E2E flow', async () => {
        console.log("Tring to Log in...")
        await LoginPage.username.setValue('standard_user')
        await LoginPage.password.setValue('secret_sauce')
        await LoginPage.loginButton.click()
        await expect(ProductsListingPage.appLogo).toBeDisplayed()
        await expect(ProductsListingPage.productsTitle).toBeDisplayed()
        await expect(ProductsListingPage.productsTitle).toHaveText('Products')
        console.log("Logged in Successfully!")

        
        await ProductsListingPage.sortingDropdown.selectByVisibleText('Price (low to high)')
        await expect(ProductsListingPage.sortingDropdown).toHaveValue('lohi')
        console.log("Sorted products as Price..")

        let name, productDescription, productPrice;
        [name, productDescription, productPrice] = await ProductsListingPage.addRandomProductToCart()
        await expect(ProductsListingPage.shoppingCartBadge).toHaveText("1")
        console.log("Added Item to Cart: " + name)

        console.log("Browsing to cart..")
        await ProductsListingPage.cart.click()
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html")
        await expect(CartPage.cartItemsName).toHaveText(name)
        await expect(CartPage.cartItemsDesc).toHaveText(productDescription)
        await expect(CartPage.cartItemsPrice).toHaveText(productPrice)
        await expect(CartPage.removeBtn).toBeDisplayed()
        await expect(CartPage.continueShoppingBtn).toBeDisplayed()
        await expect(CartPage.checkoutBtn).toBeDisplayed()
        console.log("Verified details in cart. Browsing to Checkout page..")

        await CartPage.checkoutBtn.click()
        await expect(CheckoutPage.checkoutPageTitle).toHaveText('Checkout: Your Information')
        await expect(CheckoutPage.firstName).toBeDisplayed()
        await expect(CheckoutPage.lastName).toBeDisplayed()
        await expect(CheckoutPage.zipcode).toBeDisplayed()
        await expect(CheckoutPage.cancelBtn).toBeDisplayed()
        await expect(CheckoutPage.continueBtn).toBeDisplayed()

        const firstName = "Mark", lastName = "John", zipcode = "123456";

        await CheckoutPage.firstName.setValue(firstName)
        await CheckoutPage.lastName.setValue(lastName)
        await CheckoutPage.zipcode.setValue(zipcode)
        await expect(CheckoutPage.firstName).toHaveValue(firstName)
        await expect(CheckoutPage.lastName).toHaveValue(lastName)
        await expect(CheckoutPage.zipcode).toHaveValue(zipcode)
        await CheckoutPage.continueBtn.click()

        await expect(CheckoutOverviewPage.cartItemsName).toHaveText(name)
        await expect(CheckoutOverviewPage.cartItemsDesc).toHaveText(productDescription)
        await expect(CheckoutOverviewPage.cartItemsPrice).toHaveText(productPrice)
        console.log("Verified details in checkout page. Chekcing price breakup..")

        const itemTotal = await CheckoutOverviewPage.itemTotal()
        const tax = await CheckoutOverviewPage.taxTotal()
        const sum = itemTotal + tax
        const totalOnUi = await CheckoutOverviewPage.total()
        await expect(totalOnUi).toEqual(sum)
        await expect(CheckoutOverviewPage.finish).toBeDisplayed()
        await expect(CheckoutOverviewPage.cancelBtn).toBeDisplayed()
        await CheckoutOverviewPage.finish.click()
        console.log("Verified details in checkout page. Browsing to checkout complete page..")
        
        await expect(CheckoutCompletePage.thankYouText).toBeDisplayed()
        await expect(CheckoutCompletePage.backToHomeBtn).toBeDisplayed()
        await expect(CheckoutCompletePage.yourOrderText).toBeDisplayed()
        console.log("Verified order placed successfully")

        await CheckoutCompletePage.backToHomeBtn.click()
        await expect(ProductsListingPage.productsTitle).toBeDisplayed()
        await expect(ProductsListingPage.shoppingCartBadge).not.toBeDisplayed()
        console.log("Browsed backed to Home page and verified cart is empty.")
    })
})