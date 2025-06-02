import React from 'react';

const ItchIoEmbed = ({ 
  gameId, 
  width = 206, 
  height = 165, 
  borderWidth = 0,
  bgColor = 'FFF8F0',
  fgColor = 'FFF8F0', 
  linkColor = '294932',
  borderColor = '000000',
  gameUrl,
  gameTitle
}) => {
  const embedUrl = `https://itch.io/embed/${gameId}?border_width=${borderWidth}&bg_color=${bgColor}&fg_color=${fgColor}&link_color=${linkColor}&border_color=${borderColor}`;
  
  return (
    <iframe 
      frameBorder="0" 
      src={embedUrl} 
      width={width} 
      height={height}
      title={gameTitle}
    >
      <a href={gameUrl}>{gameTitle}</a>
    </iframe>
  );
};

export default ItchIoEmbed;
