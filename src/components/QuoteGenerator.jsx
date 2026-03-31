import { useState, useEffect, useRef } from "react";
import { FiCopy, FiTwitter, FiDownload, FiFacebook, FiInstagram, FiHeart } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import html2canvas from "html2canvas";
import axios from "axios";

const QuoteGenerator = ({ onSaveFavorite }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [initialAppLoad, setInitialAppLoad] = useState(true);
  const cardRef = useRef(null);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://dummyjson.com/quotes/random");
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Never give up because you never know if the next try is going to be the one that works.");
      setAuthor("Mary Kay Ash");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote().then(() => {
      // Add a small artificial delay so the user can enjoy the splash animation
      setTimeout(() => {
        setInitialAppLoad(false);
      }, 1200);
    });
  }, []);

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
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, { backgroundColor: "#ffffff" });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "quote-of-the-day.png";
      link.click();
    }
  };

  return (
    <>
      {/* Full Screen Loading Splash */}
      <div className={`splash-screen ${!initialAppLoad ? "fade-out" : ""}`}>
        <div className="splash-logo custom-logo">
          <div className="block top-left"></div>
          <div className="block top-right"></div>
          <div className="block bottom-left"></div>
        </div>
        <div className="loading-dots">
          <span>.</span><span>.</span><span>.</span>
        </div>
      </div>

      <div className="app-container">
        {/* Top Banner - Quoter Text */}
        <div className="top-brand">
          <span className="brand-text">Quoter</span>
        </div>

      <header className="header">

        <div className="header-left">
          {/* Yellow Geometric Logo */}
          <div className="custom-logo">
            <div className="block top-left"></div>
            <div className="block top-right"></div>
            <div className="block bottom-left"></div>
          </div>

          <div className="title-container">
            <h1>Random Quote<br />Generator</h1>
            <p className="subtitle">Generate the Quote Instantly,free</p>
          </div>
        </div>

        <div className="header-right">
          <button className="generate-btn" onClick={fetchQuote}>
            <FaQuoteLeft className="btn-icon" /> Generate Now
          </button>
        </div>
      </header>

      {/* Uploaded PNG background */}
      <div className="decorative-arrow"></div>

      {/* Main Card Section */}
      <main className="main-content">
        <div className="quote-card" ref={cardRef}>
          <h2 className="card-title">Quote of the Day</h2>
          <div className="quote-content">
            {loading ? (
              <p className="loading-text">Loading...</p>
            ) : (
              <div className="quote-inner">
                <span className="quote-mark left">“</span>
                <p className="quote-text">
                  {quote}
                  <span className="quote-mark right">”</span>
                </p>
              </div>
            )}
            <p className="author-text">— {author}</p>
          </div>

          <div className="divider-container">
            <hr className="divider" />
          </div>

          <div className="action-buttons">
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
            <button className="action-btn" onClick={() => onSaveFavorite({ quote, author, id: Date.now().toString() })} title="Save to Favorites">
              <FiHeart />
            </button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default QuoteGenerator;
