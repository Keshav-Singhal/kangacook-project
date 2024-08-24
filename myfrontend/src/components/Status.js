import React, { useState, useEffect } from 'react';

function Status() {
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/status/')
            .then(response => response.json())
            .then(data => setStatus(data.status));
    }, []);

    return <p>{status}</p>;
}

export default Status;
