import React, { useEffect } from 'react';

const ClickyAnalytics = () => {
    useEffect(() => {
        // Load Clicky script
        const script = document.createElement('script');
        script.async = true;
        script.src = '//static.getclicky.com/js';
        document.head.appendChild(script);

        // Cleanup function
        return () => {
            // Remove the Clicky script when the component unmounts
            document.head.removeChild(script);
        };
    }, []); // Empty dependency array ensures that this effect runs only once

    return (
        <noscript>
            <p>
                <img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101452836ns.gif" />
            </p>
        </noscript>
    );
};

export default ClickyAnalytics;
