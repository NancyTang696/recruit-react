import WrapComponent from '../../wrap-component'
import { render, screen, fireEvent } from '@testing-library/react'
import {RegisterCreditCard} from './index'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from '../../common/components/router'

describe('Register Page Validation', () => {
    beforeEach(() => {
        const history = createMemoryHistory()
        history.push('/')

        render(WrapComponent(Router, null, {history:history}))
      })

      it('page components validation', () => {
        expect(screen.getByRole('textbox', { name: "Credit Card Number"})).toBeInTheDocument()
    })

    it('Should validate when credit card format is in correct', async () => {
        const creditCardInput = screen.getByRole('textbox', { name: "Credit Card Number"})
        userEvent.type(creditCardInput, 'e')

        fireEvent.blur(creditCardInput);
        expect(await screen.findByText('Entered value does not match Credit Card Number format'))

    })
})