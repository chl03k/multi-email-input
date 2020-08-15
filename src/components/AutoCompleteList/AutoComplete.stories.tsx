import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AutoCompleteList, AutoCompleteProps } from './AutoComplete';

export default {
  title: 'AutoCompleteList',
  component: AutoCompleteList,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoCompleteList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  suggestions: [
    "ebrekke@gmail.com",
    "rigoberto.weimann@schuppe.com",
    "ijakubowski@barton.com",
    "ivah83@gmail.com",
    "orville36@gmail.com",
    "ckoelpin@gutkowski.net",
    "heath70@hayes.org",
    "garland.conn@mcclure.com",
    "harrison01@kshlerin.info",
    "hkautzer@hotmail.com"
  ],
};

