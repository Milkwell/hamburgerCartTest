import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/logIntoPage.js'
import SecurePage from '../pageobjects/mainMenu.js'
import Cart from '../pageobjects/addToCart.js'
import ItemRemove from '../pageobjects/removeFromCart.js'
import AddBackpack from '../pageobjects/addBackpack.js'
import CheckOut from '../pageobjects/checkout.js'
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

// I next will need to select all items to add to my cart.

describe('All the items I select', () => {
    it ('should be added to my cart', async () => {
      await Cart.select()

      await expect(Cart.flashAlert1).toBeExisting()
      await expect(Cart.flashAlert2).toBeExisting()
      await expect(Cart.flashAlert3).toBeExisting()
      await expect(Cart.flashAlert4).toBeExisting()
      await expect(Cart.flashAlert5).toBeExisting()
      await expect(Cart.flashAlert6).toBeExisting()
    })
})

//I will select two different options in the cart to remove

describe('The items I select', () => {
    it ('should be removed from my cart', async () => {
      await ItemRemove.select()

      await expect(ItemRemove.flashAlert).toBeExisting()
    })
}) 

//I will add one item back to the cart

describe('The item I select', () => {
    it ('should be added to my cart', async () => {
      await AddBackpack.select()

      await expect(AddBackpack.flashAlert).toBeExisting()
    })
}) 

//I will check out the items in my cart

describe('The items I have selected', () => {
    it ('should be brought to checkout', async () => {
      await CheckOut.select('John', 'Smith', 'funCode')

      await expect(CheckOut.flashAlert).toBeExisting()
      await expect(CheckOut.flashAlert).toHaveText(
        expect.stringContaining('Thank you for your order!'))
    })
}) 

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