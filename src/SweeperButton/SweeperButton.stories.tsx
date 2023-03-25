import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SweeperButton from './SweeperButton';

export default {
  title: 'SweeperButton',
  component: SweeperButton,
  argTypes: {
    chevronOrientation: {
      control: 'radio',
      options: ['chevronLeft', 'cheveronRight'],
    },
  },
} as ComponentMeta<typeof SweeperButton>;

const Template: ComponentStory<typeof SweeperButton> = args => <SweeperButton {...args} />;


export const SweeperButtonMain = Template.bind({});

SweeperButtonMain.args = {
  chevronOrientation: 'chevronLeft',
  handleClick: () => {},
  isDisable: false,
};


// import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { STORYBOOK_PATH_VH_COMMON } from 'modules/core/utils/consts';
// import SweeperButton from 'modules/vinhood/views/components/Button/SweeperButton';

// export default {
//   argTypes: {
//     chevronOrientation: {
//       control: 'radio',
//       options: ['chevronLeft', 'cheveronRight'],
//     },
//   },

//   component: SweeperButton,
//   title: `${STORYBOOK_PATH_VH_COMMON}/Components/Buttons/Sweeper/SweeperButton`,
// } as ComponentMeta<typeof SweeperButton>;

// const Template: ComponentStory<typeof SweeperButton> = args => <SweeperButton {...args} />;

// export const SweeperButtonMain = Template.bind({});

// SweeperButtonMain.args = {
//   chevronOrientation: 'chevronLeft',
//   handleClick: () => {},
//   isDisable: false,
// };
