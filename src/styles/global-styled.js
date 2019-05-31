import { createGlobalStyle } from "styled-components"
// import Swiper from "./swiper"

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
        label {
            color: rgba(0, 0, 0, .54);
        }

        input,
        textarea {
            &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: rgba(112, 112, 112, 0.4);
                opacity: 1;
                font-size: .9rem;
                /* Firefox */
            }

            &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: rgba(112, 112, 112, 0.4);
                font-size: .9rem;
            }

            &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: rgba(112, 112, 112, 0.4);
                font-size: .9rem;
            }
        }
    }
    

    .tl-edges {
        overflow:initial;
    }

    .tl-wrapper {
        min-height: 100vh;
        max-height: 100vh;
        overflow:hidden;
    }
`
export default GlobalStyled
