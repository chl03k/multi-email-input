import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import EmailTag, { Props as EmailTagProps } from './EmailTag';

export default {
    title: 'EmailTag',
    component: EmailTag,
} as unknown as Meta;

const Template: Story<EmailTagProps> = (args) => <EmailTag {...args}>{args.children}</EmailTag>;

export const Valid = Template.bind({});

Valid.args = {
    children: 'daniel@gmail.com'
};
export const Invalid = Template.bind({});

Invalid.args = {
    children: 'daniel'
};

