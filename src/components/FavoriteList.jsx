import React, { useState } from 'react';
import FavoriteItem from './FavoriteItem';
import Button from './ui/Button';
import './FavoriteList.css';

const FavoriteList = ({ favorites, onDeleteFavorite, onAddCustom }) => {
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQuote.trim()) {
      setError('Quote text cannot be empty.');
      return;
    }
    
    // Pass custom quote up via prop
    onAddCustom({
      quote: newQuote.trim(),
      author: newAuthor.trim() || 'Unknown',
      id: Date.now().toString() + Math.random().toString().substring(2,6), // Unique ID
    });
    
    setNewQuote('');
    setNewAuthor('');
    setError('');
  };

  return (
    <div className="favorite-section">
      <div className="favorite-header">
        <h2>Your Favorite Quotes</h2>
        <span className="favorite-count">{favorites.length} Saved</span>
      </div>

      <div className="favorite-grid">
        {/* The List part */}
        <div className="favorite-list-container">
          {favorites.length === 0 ? (
            <div className="empty-state">
              <p>No favorites yet. Save a generated quote or add your own!</p>
            </div>
          ) : (
            <div className="favorite-list">
              {favorites.map((fav) => (
                <FavoriteItem 
                  key={fav.id} 
                  id={fav.id}
                  quote={fav.quote} 
                  author={fav.author} 
                  onDelete={onDeleteFavorite}
                />
              ))}
            </div>
          )}
        </div>

        {/* The Add Custom Quote form part */}
        <div className="add-custom-card">
          <h3>Add Custom Quote</h3>
          <form className="custom-quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="quote">Quote Text *</label>
              <textarea 
                id="quote"
                value={newQuote}
                onChange={(e) => {
                  setNewQuote(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Write The Quote"
                rows="3"
              />
              {error && <span className="error-text">{error}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="author">Author (Optional)</label>
              <input 
                id="author"
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Enter Author Name"
              />
            </div>
            <Button type="submit" variant="primary" className="full-width">
              Save Quote
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
