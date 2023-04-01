import React, { useEffect, useState } from 'react';
import Error from '../Error/Error';
const ErrorBoundary = (children) => {
    const [error, setError] = useState(false);
    useEffect(() => {
        setError(true);
    }, [error]);
    if (error) {
        return React.createElement(Error, null);
    }
    else {
        return children;
    }
};
export default ErrorBoundary;
