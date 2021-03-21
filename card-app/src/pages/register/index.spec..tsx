import WrapComponent from '../../wrap-component'
import { render, screen, fireEvent } from '@testing-library/react'
import {RegisterCreditCard} from './index'
import userEvent from '@testing-library/user-event'

describe('Register Page Validation', () => {
    beforeEach(() => {
        render(WrapComponent(RegisterCreditCard))
      })

      it('page components validation', () => {
        expect(screen.findByTestId('creditCardNumber')).toBeInTheDocument()
        expect(screen.findByTestId('expiryDate')).toBeInTheDocument()
    })

    it('Should validate when credit card format is in correct', async () => {
        const creditCardInput = screen.getByRole('input', { name: /creditCardNumber/i})
        userEvent.type(creditCardInput, 'e')

        fireEvent.blur(creditCardInput);
        expect(await screen.findByText('Entered value does not match Credit Card Number format'))

    })
})