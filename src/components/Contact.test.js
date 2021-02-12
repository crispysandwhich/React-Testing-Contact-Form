import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

test('Basic test', () => {

    render(<ContactForm/>)

})

describe('Contact', () => {


    const firstName = screen.getByLabelText(/firstName/i)
    const lastName = screen.getByLabelText(/lastName/i)
    const email = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/messeage/i)
    const button = screen.getByRole('type', {type: /submit/i})

    userEvent.type(firstName,  'lyub')
    userEvent.type(lastName,  'dead')
    userEvent.type(email,  'mmmmmhhssss@gmai.com')
    userEvent.type(message,  'mhmmm sad face')
    userEvent.click(button)

    const newPerson = screen.findByText('lyub')
    expect(newPerson).toBeInTheDocument()
    

})