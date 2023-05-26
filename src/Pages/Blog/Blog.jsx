import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { FaDownload, FaFileDownload } from 'react-icons/fa';

const Blog = () => {
    const pdfRef = useRef();
    const handleDownloadPdf = () => {
        const element = pdfRef.current;
        const options = {
            margin: [0.3, 0.5],
            filename: 'blog_page.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().from(element).set(options).save();
    };
    return (
        <div>
            <div onClick={handleDownloadPdf} className='text-center mb-10'>
                <button className='btn btn-outline'>Generate Pdf <span className='ms-2'><FaDownload/> </span></button>
            </div>
            <div ref={pdfRef} className='max-w-7xl mx-auto'>
                <div className='p-2'>
                    <h1 className='text-2xl font-semibold'>i. Tell us the differences between uncontrolled and controlled components ?</h1>
                    <p className='text-lg mt-3'><span className='font-semibold'>Answer:</span> Uncontrolled components are components where the state is managed internally by the component itself. Examples of uncontrolled components include traditional HTML form elements like input and textarea. With an uncontrolled component, the value of the input field is managed by the DOM.</p>
                    <p className='text-lg mt-2'>On the other hand, controlled components are components where the state is managed externally, typically in a parent component, and passed down to the controlled component via props. When the user enters data into a controlled component, it triggers a callback function that updates the state in the parent component, which then passes down the updated state to the controlled component via props.</p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl font-semibold'>ii. How to validate React props using PropTypes ?</h1>
                    <p className='text-lg mt-3'><span className='font-semibold'>Answer:</span> Import the PropTypes library using import PropTypes from 'prop-types'; at the top of your component file.Define the expected prop types for your component by adding a propTypes object to your component class.Use the defined propTypes to validate that the props passed to your component are of the correct type. You can do this by accessing the props object in your component and checking them against the propTypes.To define the prop types, you can add properties to the propTypes object that match the name of each prop, with their corresponding expected data type.The available data types that you can use to define the expected prop types include string, number, boolean, array, object, func, symbol, and node.
                    </p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl font-semibold'>iii. Tell us the difference between nodejs and express js.?</h1>
                    <p className='text-lg mt-3'><span className='font-semibold'>Answer:</span> Node.js is a server-side JavaScript runtime environment that allows developers to build scalable and high-performance applications. It provides an event-driven, non-blocking I/O model that enables Node.js to handle multiple requests simultaneously. Node.js also has a vast ecosystem of packages and modules available via the npm package manager.Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools for building robust and scalable web applications and APIs. Express.js is built on top of Node.js and leverages its non-blocking I/O model to provide excellent performance and scalability.
                    </p>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl font-semibold'>iv. What is a custom hook, and why will you create a custom hook ?</h1>
                    <p className='text-lg mt-3'><span className='font-semibold'>Answer:</span> A custom hook is a reusable piece of code in React that allows you to extract component logic into a separate function. Custom hooks are essentially functions that use other built-in hooks and can be used across multiple components.Custom hooks can be created for any functionality that needs to be shared across multiple components, such as fetching data from an API, managing state, or handling browser events. By creating custom hooks, you can encapsulate complex logic into a single function, making your code more modular, maintainable, and reusable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;