import React from 'react';
import Greeting from './components/Greeting';
import Status from './components/Status';
import ResumeViewer from './components/ResumeViewer'; 


function App() {
    const pdfUrl = '/pdf/Resume.pdf'
    return (
        <div>
            <Greeting />
            <Status />
            <ResumeViewer pdfUrl={pdfUrl} />
        </div>
    );
}

export default App;
