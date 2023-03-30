import React, { useEffect, useState } from 'react';
import Error from '../Error/Error';

const ErrorBoundary = (children: React.ReactNode) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(true);
  }, [error]);

  if (error) {
    return <Error />;
  } else {
    return children;
  }
};

export default ErrorBoundary;
