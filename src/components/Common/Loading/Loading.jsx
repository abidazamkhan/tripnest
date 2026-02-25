import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = ({ 
  type = 'default', 
  size = 'md', 
  message = 'Loading...', 
  fullScreen = false 
}) => {
  const renderLoading = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className={`loading-spinner text-center ${fullScreen ? 'full-screen' : ''}`}>
            <Spinner 
              animation="border" 
              variant="primary" 
              size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : undefined}
            />
            {message && <p className="mt-2 text-muted">{message}</p>}
          </div>
        );
      
      case 'dots':
        return (
          <div className={`loading-dots ${fullScreen ? 'full-screen' : ''}`}>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {message && <p className="mt-2 text-muted">{message}</p>}
          </div>
        );
      
      case 'skeleton':
        return (
          <div className={`loading-skeleton ${fullScreen ? 'full-screen' : ''}`}>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="skeleton-item">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line short"></div>
                  <div className="skeleton-line"></div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className={`loading-default ${fullScreen ? 'full-screen' : ''}`}>
            <div className="loading-bar"></div>
            {message && <p className="mt-2 text-muted">{message}</p>}
          </div>
        );
    }
  };

  return renderLoading();
};

export default Loading;
