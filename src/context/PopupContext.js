import React from 'react';

const PopupContext = React.createContext({
  popupStatus: false,
  showPopup: () => null
});

export default PopupContext;