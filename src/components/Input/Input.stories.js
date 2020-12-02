import React from 'react';
import Input from './Input'

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        dataType: {
            control: {
                type: 'select',
                options: ['email', 'number', 'text', 'date']
            }
        }
    }
}

const Template = args => <Input {...args} />

export const Email = Template.bind({})
Email.args = {
    dataType:"email"
}

export const Number = Template.bind({})
Number.args = {
    dataType:"number",
}