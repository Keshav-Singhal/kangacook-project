import React, { useState, useEffect } from 'react';

function Greeting() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/greeting/')
            .then(response => response.json())
            .then(data => setGreeting(data.message));
    }, []);

    return <h1>{greeting}</h1>;
}

export default Greeting;
