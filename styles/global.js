import css from 'styled-jsx/css';

export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  /* 
====== 
Variables 
======
*/
  :root {
    --primaryLightColor: #ddd4ff;
    --primaryColor: #593eb9;
    --primaryDarkColor: #c02c03;
    --mainWhite: #fff;
    --offWhite: #f7f7f7;
    --mainBackground: #f1f5f8;
    --mainOverlay: rgba(35, 10, 36, 0.4);
    --mainBlack: #222;
    --mainGrey: #ececec;
    --darkGrey: #afafaf;
    --mainRed: #bd0303;
    --mainTransition: all 0.3s linear;
    --mainSpacing: 0.3rem;
    --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
    --mainBorderRadius: 0.25rem;
    --smallWidth: 85vw;
    --maxWidth: 40rem;
    --fullWidth: 1170px;
  }
  /* 
====== 
Global Styles 
======
*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--mainBlack);
    background: var(--mainBackground);
    line-height: 1.4;
    font-size: 1rem;
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--slantedFont);
    margin-bottom: 1.25rem;
    letter-spacing: var(--mainSpacing);
  }
  p {
    margin-bottom: 1.25rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: var(--mainBlack);
  }
  img {
    width: 100%;
    display: block;
  }

  .not-found {
    text-align: center;
    color: var(--primaryColor);
  }
  .not-found a {
    text-decoration: underline;
    color: var(--primaryColor);
    font-weight: 600;
    font-size: 2rem;
  }

  /* 
====== 
Buttons 
======
*/
  .btn,
  .btn-white,
  .btn-primary {
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    color: var(--primaryColor);
    border: 2px solid var(--primaryColor);
    padding: 0.45rem 0.8rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
    font-size: 0.8rem;
    background: transparent;
    border-radius: var(--mainBorderRadius);
    display: inline-block;
  }
  .btn:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
  }
  .btn-white {
    background: transparent;
    color: var(--mainWhite);
    border-color: var(--mainWhite);
  }
  .btn-white:hover {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }
  .btn-primary {
    background: var(--primaryColor);
    color: var(--mainWhite);
    border-color: transparent;
  }
  .btn-primary:hover {
    background: var(--primaryLightColor);
    color: var(--primaryColor);
  }
  .btn-block {
    width: 100%;
    display: block;
    margin: 0 auto;
    box-shadow: var(--lightShadow);
    text-align: center;
  }
  .btn-details {
    padding: 0.25rem 0.4rem;
  }
  .btn-details:hover {
    background: var(--primaryLightColor);
    border-color: var(--primaryLightColor);
  }
  /* 
====== 
Navbar
======
*/
  .navbar {
    background: var(--mainWhite);
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 2px solid var(--primaryColor);
    box-shadow: var(--lightShadow);
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--fullWidth);
  }
  .nav-links {
    display: flex;
    align-items: center;
  }
  .nav-links a {
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    transition: var(--mainTransition);
  }
  .nav-links a:hover {
    color: var(--primaryColor);
  }
  .logo {
    width: 12rem;
  }
  /* 
====== 
About
======
*/
  .about-section {
    width: var(--smallWidth);
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  .about-section p {
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
  /* 
====== 
Error
======
*/
  .error-page {
    display: flex;
    justify-content: center;
  }
  .error-container {
    text-align: center;
    text-transform: capitalize;
  }
  /* 
====== 
Meal List 
======
*/

  .section {
    padding: 5rem 0;
  }
  .section-title {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
  }
  .meals-center {
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--fullWidth);
    display: grid;
    row-gap: 2rem;
    column-gap: 2rem;
    /* align-items: start; */
  }
  @media screen and (min-width: 576px) {
    .meals-center {
      grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
    }
  }
  /* 
====== 
Meal
======
*/

  .meal {
    background: var(--mainWhite);
    margin-bottom: 2rem;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: var(--mainBorderRadius);
  }
  .meal:hover {
    box-shadow: var(--darkShadow);
  }
  .meal img {
    height: 20rem;
    object-fit: cover;
    border-top-left-radius: var(--mainBorderRadius);
    border-top-right-radius: var(--mainBorderRadius);
  }
  .meal-footer {
    padding: 1.5rem;
  }
  .meal-footer h3,
  .meal-footer h4,
  .meal-footer p {
    margin-bottom: 0.3rem;
  }
  .meal-footer h3 {
    font-size: 2rem;
  }
  .meal-footer p {
    color: var(--darkGrey);
    margin-bottom: 0.5rem;
  }

  /* 
====== 
Meal
======
*/

  .meal-section {
    text-align: center;
  }
  .food {
    width: var(--smallWidth);
    max-width: var(--fullWidth);
    margin: 0 auto;
    text-align: left;
  }
  .food img {
    border-radius: var(--mainBorderRadius);
  }
  .food p {
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1.8;
  }
  .food span {
    margin-right: 0.5rem;
  }
  .food-data {
    background: var(--primaryLightColor);
    padding: 0.25rem 0.5rem;
    border-radius: var(--mainBorderRadius);
    color: var(--primaryColor);
  }
  .food-info {
    padding-top: 2rem;
  }
  @media screen and (min-width: 992px) {
    .food {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .food-info {
      padding-top: 0;
    }
  }
  .loader,
  .loader:before,
  .loader:after {
    background: transparent;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .loader {
    color: var(--primaryColor);
    text-indent: -9999em;
    margin: 88px auto;
    margin-top: 20rem;
    position: relative;
    font-size: 3rem;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;
