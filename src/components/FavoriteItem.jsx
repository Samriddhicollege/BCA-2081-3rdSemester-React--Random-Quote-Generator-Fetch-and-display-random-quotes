import React, { useRef } from 'react';
import { FiTrash2, FiCopy, FiTwitter, FiDownload, FiFacebook, FiInstagram } from 'react-icons/fi';
import html2canvas from "html2canvas";

const FavoriteItem = ({ quote, author, id, onDelete }) => {
  const itemRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${quote}" - ${author}`);
    alert("Quote copied to clipboard!");
  };

  const handleTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(twitterUrl, "_blank");
  };

  const handleFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(fbUrl, "_blank", "width=600,height=400");
  };

  const handleInstagram = () => {
    alert("To share to Instagram, click the Download Image button first, then post the downloaded picture to your feed or story!");
    window.open("https://www.instagram.com", "_blank");
  };

  const handleDownload = async () => {
    if (itemRef.current) {
      // Briefly hide actions so the generated snapshot focuses solely on the Quote
      const actionsEl = itemRef.current.querySelector('.favorite-actions');
      const deleteBtn = itemRef.current.querySelector('.delete-btn');
      
      if (actionsEl) actionsEl.style.display = 'none';
      if (deleteBtn) deleteBtn.style.display = 'none';
      
      const canvas = await html2canvas(itemRef.current, { backgroundColor: "#ffffff" });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "favorite-quote.png";
      link.click();

      // Unhide actions post-screenshot
      if (actionsEl) actionsEl.style.display = 'flex';
      if (deleteBtn) deleteBtn.style.display = 'flex';
    }
  };

  return (
    <div className="favorite-item" ref={itemRef}>
      <div className="favorite-content">
        <p className="favorite-quote">"{quote}"</p>
        <p className="favorite-author">— {author}</p>
        
        <div className="favorite-actions">
          <button className="action-btn" onClick={handleCopy} title="Copy Text">
            <FiCopy />
          </button>
          <button className="action-btn" onClick={handleTwitter} title="Share on Twitter">
            <FiTwitter />
          </button>
          <button className="action-btn" onClick={handleFacebook} title="Share on Facebook">
            <FiFacebook />
          </button>
          <button className="action-btn" onClick={handleInstagram} title="Share on Instagram">
            <FiInstagram />
          </button>
          <button className="action-btn" onClick={handleDownload} title="Download Quote Image">
            <FiDownload />
          </button>
        </div>
      </div>
      
      <button className="delete-btn" onClick={() => onDelete(id)} title="Delete Quote">
        <FiTrash2 />
      </button>
    </div>
  );
};

export default FavoriteItem;
