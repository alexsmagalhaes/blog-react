import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --font-heading: "Arial", sans-serif;
  --font-body: "Arial", sans-serif;
  --body-line-height: 1.5;
  --heading-line-height: 1.4;

  --white-default: #fff;

  --gray-light-05: #f2f2ff;
  --gray-light-04: #e6e6f2;
  --gray-light-03: #dadae5;
  --gray-light-02: #ceced9;
  --gray-light-01: #c0c0cc;

  --gray-dark-05: #2f2f3b;
  --gray-dark-04: #25252e;
  --gray-dark-03: #1b1b21;
  --gray-dark-02: #101014;
  --gray-dark-01: #060608;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: var(--body-line-height);
  background-color: var(--gray-dark-01);
  color: var(--white-default);
}

img {
  max-width: 100%;
}

a{
  text-decoration: none;
  color: inherit;
}

button{
  font-family: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: var(--heading-line-height);
}

h1, .h1 {
  font-size: 3.5rem;
}
h2, .h2 {
  font-size: 3rem;
}
h3, .h3 {
  font-size: 2.5rem;
}
h4, .h4 {
  font-size: 2rem;
}
h5, .h5 {
  font-size: 1.5rem;
}
h6, .h6 {
  font-size: 1.25rem;
}

.container-medium{
  max-width: 79rem;
  padding: 0rem 1.5rem;
  margin: 0 auto;
  width: 100%;
}
`;
