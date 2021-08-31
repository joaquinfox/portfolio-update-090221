# Fluid Aesthetics

## User Stories
- An attractive landing page
- A menu bar linking to the following pages
    - About
    - FAQ
    - Book an appointment via phone call
    - Bios


    ## Collapsible Nav
    - cannot seem to use window.innerWidth in Next  .. ah but it hasn't loaded yet ... make it async

    - so if the screen size is small, display the hamburger and hide the main nav
        - if the reveal, show the drop down
            - else hide the dropdown but show the hamburger
    - if the screen size is large, display the main nav and hide the hamburger

    did all this!

    - make the links work
    - ok so i had it so that everything worked great, capturing screen size in state, using the size to define a state "small" or "big"...earlier i figured  out how then use that state as a class... but now i forgot!!  
    - now i need the dropdown to go away when the screen size is large. I have captured the screen size so i should just be able to evaluate it and if it is big then set a state on the dropdown...