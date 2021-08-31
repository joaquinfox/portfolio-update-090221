# Portfolio site for Joaquin Fox

## Pages

- Landing
  - Portfolio
    - My Work
  - For Employers
    - experience
    - stack
    - other experience and education
    - cv
    - contact



















## Collapsible Nav

### Walk Through

- The nav.js component contains 3 DOM elements
  - a ul that holds the main navigation, for large screen sizes
  - a div that holds the hamburger, for small screen sizes
  - div containing a second ul, that holds the dropdown menu, which works together with the hamburger.

.

- I use two useEffect hooks
  - one watches for changes to screen size. whenever there is a change, it calls a function checkSize which in turn, determines whether or not to reveal the dropdown.
  - media query's determine when to reveal the hamburger icon and the main nav.
  - the second useEffect calls the checkSize function once (because I couldn't use a default state of window.innerWidth on page load, since the window object is not available during page load)
  - the hamburger has a click handler that calls toggleNav(), which shows or hides the dropdown by toggling the 'reveal' state hook value and using that state to set an in-line display on the dropdown.
    - if reveal, then states are set for opacity and width. these states are passed to the dropdown element as inline styles.
