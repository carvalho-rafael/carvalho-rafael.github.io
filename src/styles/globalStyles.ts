import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
    background: #222222;
    color: #f1f1f1;
}

* {
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
}

p {
    font-size: 16px;
}
`