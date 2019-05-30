import { createGlobalStyle } from "styled-components"

const GlobalStyled = createGlobalStyle`

    html {
        scroll-behavior: smooth;
        -ms-overflow-style: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
    
    body {

        * {
            margin: 0;
            padding: 0;
            outline:none;
            box-sizing: border-box;
        }
    
        ul, ol {
            list-style-type: none;
        }

        img {
            display: block;
        }
    }
    

.tl-edges {
    overflow:initial;
}
`
export default GlobalStyled
