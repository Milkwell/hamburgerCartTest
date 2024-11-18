import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/logIntoPage.js'
import SecurePage from '../pageobjects/mainMenu.js'
import Cart from '../pageobjects/addToCart.js'
import HamburgerMenu from '../pageobjects/hamburgerMenu.js'
import MenuLogout from '../pageobjects/menuLogout.js'
import MenuAbout from '../pageobjects/menuAbout.js'

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

      await expect(Cart.flashAlert).toBeExisting()
      await expect(Cart.flashAlert).toHaveText(
        expect.stringContaining('Your Cart'))
    })
})

//I will select different options in the cart

/*describe('The item I select', () => {
    it ('should be added to my cart', async () => {
      await Cart.select()

      await expect(CartPage.flashAlert).toBeExisting()
      await expect(CartPage.flashAlert).toHaveText(
        expect.stringContaining('Your Cart'))
    })
}) */

// I next will need to select the different options in the hamburger menu.

describe('I have reset the website', () => {
    it ('and went back to the store page', async () => {
      await HamburgerMenu.pick()

      await expect(HamburgerMenu.flashAlert).toBeExisting()
      await expect(HamburgerMenu.flashAlert).toHaveText(
          expect.stringContaining('Products'))
    })
})

// next is logout option

describe('I have selected the logout option', () => {
    it ('and have been logged out', async () => {
      await MenuLogout.select()

      await expect(MenuLogout.flashAlert).toBeExisting()
      await expect(MenuLogout.flashAlert).toHaveText(
          expect.stringContaining('Swag Labs'))
    })
})

//next is about option

describe('I have logged in', () => {
    it ('and have gone to the about page', async () => {
      await MenuAbout.select('standard_user', 'secret_sauce')

      await expect(MenuAbout.flashAlert).toBeExisting()
    })
})