import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    // You can also log to a service like Sentry here
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="error-boundary py-5">
          <Alert variant="danger" className="text-center">
            <Alert.Heading>
              <i className="bi bi-exclamation-triangle me-2"></i>
              Oops! Something went wrong
            </Alert.Heading>
            <p className="mb-3">
              We're sorry for the inconvenience. The application encountered an unexpected error.
            </p>
            <hr />
            <p className="mb-0">
              <small>
                Please refresh the page or contact our support team if the problem persists.
              </small>
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-3">
                <summary>Error Details</summary>
                <pre className="mt-2 p-2 bg-light rounded">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </Alert>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
