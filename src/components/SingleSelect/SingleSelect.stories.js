import React from 'react';
import SingleSelect from './SingleSelect'

export default {
    title: 'SingleSelect',
    component: SingleSelect,
    argTypes: {
        numOptions: {
            control: {
                type: 'number',
                min: 1,
                max: 10,
                step: 1
            }
        }
    }
}

const Template = args => <SingleSelect {...args} />

export const Selector = Template.bind({})

