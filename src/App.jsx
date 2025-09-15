import React from 'react';

const ShareButton = ({ postUrl, postText }) => {
  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleTwitterShare = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${postText}`;
    window.open(twitterShareUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleFacebookShare}>Share on Facebook</button>
      <button onClick={handleTwitterShare}>Share on Twitter</button>
    </div>
  );
};

export default ShareButton;