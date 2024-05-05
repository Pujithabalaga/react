import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement=(
    <a href="https://google.com" target="_blank">Google</a>
)
const actualElement=React.createElement(
    'a',
    {
        href:'https://google.com' , target:"_blank"
    },
    'click to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <App></App>

)
