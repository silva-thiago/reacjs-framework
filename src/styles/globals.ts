import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /** app styles **/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html, body {
    height: 100vh
  }

  body {
    background-color: ${props => props.theme.colors.bgGray100};
    color: ${props => props.theme.colors.textGray900};
    font-family: 'Roboto Mono', monospace;
    font-feature-settings: 'liga'; // Support for IE
    font-size: calc(.75rem + 1vmin);
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: normal;
    text-rendering: optimizeLegibility; // Support for Safari and Chrome
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale

    /* browser scrollbar styles */
    &::-webkit-scrollbar {
      width: .5rem
    }

    &::-webkit-scrollbar-track {
      background: #f7fafc
    }

    &::-webkit-scrollbar-thumb {
      border-radius: .5rem;
      background: #1a202c
    }
  }

  .app {
    display: grid;
    grid-template-rows: auto 1fr auto
  }

  a {
    color: inherit;
    text-decoration: none
  }

  ol, ul {
    list-style: none
  }

  .text-muted {
    opacity: .75
  }

  main {
    flex-shrink: 0;

    @include for-size(phone-only) {
      .container {
        padding-bottom: 4rem
      }
    }
  }
`
