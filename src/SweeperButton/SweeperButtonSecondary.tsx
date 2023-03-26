import React, { FC } from 'react';
import SweeperButton from './SweeperButton';

interface Props {
  handleGoForward: () => void;
  handleGoBack: () => void;
  isDisable: boolean;
}

const SweeperButtonSecondary: FC<Props> = ({
  handleGoBack,
  handleGoForward,
  isDisable,
}) => {
  return (
    <div
      className={`sweeper-buttons-controller  ${isDisable ? 'disabled' : ''} `}
    >
      <SweeperButton
        chevronOrientation="chevronRight"
        handleClick={handleGoBack}
      />
      <SweeperButton
        chevronOrientation="chevronLeft"
        handleClick={handleGoForward}
      />
    </div>
  );
};

export default SweeperButtonSecondary;

// import { FC } from 'react';

// import SweeperButton from 'modules/vinhood/views/components/Button/SweeperButton';

// interface Props {
//   handleGoForward: () => void;
//   handleGoBack: () => void;
//   isDisable: boolean;
// }

// const SweeperButtonComponent: FC<Props> = ({ handleGoBack, handleGoForward, isDisable }) => {
//   return (
//     <div className={`sweeper-buttons-container  ${isDisable ? 'disabled' : ''} `}>
//       <SweeperButton chevronOrientation="chevronLeft" handleClick={handleGoBack} isDisable={isDisable} />
//       <SweeperButton chevronOrientation="chevronRight" handleClick={handleGoForward} isDisable={isDisable} />
//     </div>
//   );
// };

// export default SweeperButtonComponent;
