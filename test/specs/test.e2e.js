import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/logIntoPage.js'
import SecurePage from '../pageobjects/mainMenu.js'

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