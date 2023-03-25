import React, { FC } from 'react';


import './SweeperButton.scss'

export type ChevronType = 'chevronLeft' | 'chevronRight';

interface Props {
  handleClick: () => void;
  chevronOrientation: ChevronType;
  isDisable?: boolean;
}

const SweeperButton: FC<Props> = ({ handleClick, chevronOrientation, isDisable }) => {
  return (
    <div className={`sweeper-buttons-container ${isDisable ? 'disabled' : ''} `}>
      <button className="btn" disabled={isDisable} type="button" onClick={handleClick}>
        <img alt="" src={chevronOrientation === 'chevronLeft' ? './chevron-right.svg': './chevron-left.svg'} />
      </button>
    </div>
  );
};

export default SweeperButton;




// import { FC } from 'react';

// import chevronLeft from 'media/images/multiProduct/chevron-left.svg';
// import chevronRight from 'media/images/multiProduct/chevron-right.svg';

// export type ChevronType = 'chevronLeft' | 'chevronRight';
// interface Props {
//   handleClick: () => void;
//   chevronOrientation: ChevronType;
//   isDisable: boolean;
// }

// const SweeperButton: FC<Props> = ({ handleClick, chevronOrientation, isDisable }) => {
//   return (
//     <div className={`sweeper-buttons-container ${isDisable ? 'disabled' : ''} `}>
//       <button className="btn" disabled={isDisable} type="button" onClick={handleClick}>
//         <img alt="" src={chevronOrientation === 'chevronLeft' ? chevronLeft : chevronRight} />
//       </button>
//     </div>
//   );
// };

// export default SweeperButton;
