import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/logIntoPage.js'
import SecurePage from '../pageobjects/mainMenu.js'
import Cart from '../pageobjects/addToCart.js'
import CartPage from '../pageobjects/cartChecker.js'
import HamburgerMenu from '../pageobjects/hamburgerMenu.js'
import ShopPage from '../pageobjects/hamburgerChecker.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Products'))
    })
})

// I next will need to select one item to add to my cart.

describe('The item I select', () => {
    it ('should be added to my cart', async () => {
      await Cart.select()

      await expect(CartPage.flashAlert).toBeExisting()
      await expect(CartPage.flashAlert).toHaveText(
        expect.stringContaining('Your Cart'))
    })
})

// I next will need to select the different options in the hamburger menu.

describe('I have reset the website', () => {
    it ('and went back to the store page', async () => {
      await HamburgerMenu.pick()

      await expect(ShopPage.flashAlert).toBeExisting()
      await expect(ShopPage.flashAlert).toHaveText(
          expect.stringContaining('Products'))
    })
})