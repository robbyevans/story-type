import { ComponentMeta, ComponentStory } from '@storybook/react';

import SweeperButtonSecondary from './SweeperButtonSecondary';

export default {
  args: {
    handleGoBack() {},
    handleGoForward() {},
  },
  component: SweeperButtonSecondary,
  title: 'SweeperButtonSecondary',
} as ComponentMeta<typeof SweeperButtonSecondary>;

const Template: ComponentStory<typeof SweeperButtonSecondary> = (args) => (
  <SweeperButtonSecondary {...args} />
);

export const SweeperButtonSecondaryMain = Template.bind({});

SweeperButtonSecondaryMain.args = {
  handleGoBack() {
    console.log('Back');
  },
  handleGoForward() {
    console.log('forward');
  },
  isDisable: false,
};

// import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { STORYBOOK_PATH_VH_COMMON } from 'modules/core/utils/consts';
// import SweeperButtonComponent from 'modules/vinhood/views/components/Button/SweeperButtonComponent';

// export default {
//   args: {
//     handleGoBack() {},
//     handleGoForward() {},
//   },
//   component: SweeperButtonComponent,
//   title: `${STORYBOOK_PATH_VH_COMMON}/Components/Buttons/Sweeper/SweeperButtonComponent`,
// } as ComponentMeta<typeof SweeperButtonComponent>;

// const Template: ComponentStory<typeof SweeperButtonComponent> = args => <SweeperButtonComponent {...args} />;

// export const SweeperButtonComponentMain = Template.bind({});

// SweeperButtonComponentMain.args = {
//   handleGoBack() {},
//   handleGoForward() {},
//   isDisable: false,
// };
