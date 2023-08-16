
# Fashionera

This website is your goto resource for anything Fashion related from latest fashion trends to fashion news its your one-stop solution for all

## Demo link
https://youtu.be/ZpU84dK2G84

## Installation

On your terminal clone the git-repo and run these commands

1) npm install 
2) npm run dev

Make sure you are connected to the internet for seeing the website.

This will start the project on http://localhost:5173

## Technologies Used
    react
    html
    css
    javascript
    jsx
    firebase (for login/signup)
    news api
    valtio (for conditional routing)
    framer motion
    @iconify/react (for icons)

## Preloader

This is a fake loading screen which comes on page refresh and at the start of the website

### Code info
The provided React code defines a Preload component that displays a loading screen with animations. It uses the valtio library for state management and the framer-motion library for animations. The loading screen contains a rotating company logo, a progress bar, and a welcome message. After a delay of 5 seconds, the home and nav properties in the state are set to true, indicating that the home and navigation sections are ready. The loading screen disappears when certain state properties are activated.
## Home page
After preloading is done you come to the homepage

### Code info
This React code defines a Home component that renders different sections of a home page. It uses the valtio library for state management and the framer-motion library for animations. The sections are conditionally displayed based on the state properties. Here's a concise description:

* The Home component renders different sections of a home page using animations. 
* It checks the state using useSnapshot from valtio, and if the home state is true and other specific states (intro, about, login, event) are false, 
* it displays the sections wrapped in motion animation. The sections include Homepg1, Homepg2, Homepg3, and Homepg4. 
* The animations control the entry and exit with scaling and opacity transitions. 
* The font used for the sections is "League Gothic".

### Homepg1
* An image (ad1) with a clickable area that triggers a state change when clicked. The image is accompanied by a bold title and a description.
* A prominent "GET STYLED" text.
* A clickable box with a call-to-action, encouraging users to check out the latest releases and get dazzled. This box triggers a state change when clicked, leading to the merchandise section.
* The design utilizes various styles, including fonts and positioning, to create an engaging visual layout. The purpose of this component is to present featured content, encourage user interaction, and guide them to explore more.

### Homepg2
* A grid layout with multiple panels, each representing a different fashion category.
* Each category panel has an image background related to the category (e.g., celebrity style, models, trends) and a title (Celebrity Style, Models, Trends).
* A call-to-action box named "NEWS" with a large "NEWS" text and a clickable button below it. Clicking the button triggers a state change that leads to the news section.
* The overall design emphasizes images and typography to engage users with different fashion aspects.
The Homepg2 component aims to present a visually appealing overview of various fashion categories and encourage users to explore more by clicking on the news section link.

### Homepg3
A countdown timer (CountdownTimer component) calculates the time remaining until a specific date (November 19th of the current year). It dynamically displays the remaining days, hours, minutes, and seconds until the event. The timer toggles between displaying the countdown and a message when the event has passed.

* The event's name "Confihara" is displayed prominently on the page.
* A background image that adds visual appeal and relates to the event.
* A description encouraging users to be part of the annual fashion fest on November 19th, 2023.
* A button labeled "check it out" that triggers a state change when clicked, leading users to the introduction section.
* Additional event details mentioning the location of the event at Peacock Garden in Jaipur, Rajasthan, India.

The component creatively combines visuals and typography to inform users about the event, generate excitement, and prompt them to explore further.

### Homepg4
Two styled boxes with tips on fashion and personal style. Each box contains a list of actionable tips and advice for improving one's fashion choices.

* The word "TIPS" is displayed prominently on the page, indicating the section's content.
* A clickable promotional image (ad2) with an associated title and description. The image promotes an "Eau de toilette" product with a 30% discount offer on purchases above $39.
* The layout creatively combines text, visual elements, and styling to convey fashion tips and highlight a promotional offer.

The component serves to provide users with valuable fashion advice and promote a product, all while maintaining a visually appealing presentation.
## Fest page
After clicking on an event redirect we come to this page 

### Code info
1) An introductory section (Intro component) with a special transition animation.
2) A festival page 2 (Festpg2 component) that appears after the intro.
3) A side container with a large "Events" title (ev-title class) styled with a particular font and animation.
4) An events section (Events component) with clickable elements that trigger state changes to control the flow and navigation.
5) A festival page 4 (Festpg4 component) displayed after the events section.

### Festpg1
It uses the framer-motion library for animations. 
#### The component includes:
* A header section with a background image (bgimg).
* Text content, including the event name "Confihara" styled with the "Pacifico" font.
* Two animated motion.div elements, one for a line and another for the event date ("19 Nov 2023").
* A conditional rendering based on the namer prop:
* If namer is falsy, it displays a login prompt to get notified about ticket booking.
* If namer is truthy, it notifies that users will be informed when ticket booking starts.
The component effectively combines imagery, typography, and animations to create an engaging introduction, adapting its content based on the prop value.

### Festpg2
The component creatively introduces the festival's essence and values. It features colorful backgrounds, rotated text, and highlights key points:

* The festpg2 container uses a vibrant #FA6CB2 background and occupies full height with a slight vertical shift.
* Two diamond shapes with white backgrounds decorate the sides.
* Text descriptions, rotated and positioned absolutely, emphasize showcasing designers' stories, breaking conventions, and providing a platform.
* Another description highlights unlimited creativity, diversity, individuality, emotions, and sustainability.
* The component ends with a central "About Fest" title in a large font.

### Festpg3
The Events component represents a grid of clickable event tiles that trigger a callback function (handleClick) when clicked. 

It provides a user-friendly interface to navigate to specific event details or sections. The component includes:

* A container with the class event-box.

* Multiple event tiles with the class mtile, which are visually represented elements.

* Each event tile can be clicked, and upon clicking, the handleClick function is triggered.

The purpose of this component is to create a visual representation of different events and provide an interactive way for users to navigate to specific event details or related sections.

#### Note: The Events component is modular and can be reused across different parts of the application to present various events.

### Events
A dynamic parallax effect is created with the handleMouseMove function, which calculates the mouse position and applies a translate transform to an image gallery.
* The current state snapshot is retrieved using the useSnapshot hook from the state object.
* A conditional rendering based on the state (snap):
* If the intro, about, and login states are false, and the event state is true, the component is displayed.
* A collection of event tiles (mtile class), each containing:
* Descriptive text about the event, including a title and description, positioned using transform.
* An image related to the event.
* A "Go-back" button (event-btn class) that triggers state changes to navigate back to the introductory section.

### Festpg4
 It includes interactive cursor effects and social media icons:

* The component is enclosed in a div with a background of #FA6CB2 and is vertically centered.
* A "Get in touch" title in a large font with white color is positioned in the center.
* A paragraph with detailed contact information and an invitation to follow on social media is provided below the title.
* The Instagram and Email icons are included in separate div elements with cursor effects.
* Icon sizes are scaled up using transform: scale(2.5) on the icon containers.
* Mouse events are used to change the cursor appearance and adjust icon positions.
* Corresponding text descriptions are provided for each icon.
* All text uses the "League Gothic" font and is white in color.



## News page
This code implements a simulated "newsbook" with a flipping effect using React and CSS. 

The News component displays a grid of pages, each representing a news item. 

When a page is clicked, it flips to reveal its content, and the adjacent page flips as well. 

The component uses Framer Motion for animations and Valtio for state management. 

The styling is defined in the news.css file and includes a grid layout, page-flipping animations, and hover effects. 

The content of each news item is displayed using the NewsItem component.

### NewsItem
It uses news api to dynamically add news to the page.
* The component accepts offset (starting index) and n (number of articles) as props.
* It fetches news articles related to "fashion" using the News API.
* For each fetched article, it displays the article's image, title, and description.
* The component selects a specific style from the customStyles array based on the index of the article.
* It also displays a title corresponding to the provided offset using data from the titleData array.
* The component employs inline styles to control the layout, scale, positioning, and typography of the articles.
* The articles are arranged in a list with centered alignment and distinct styling for each article.
* Clicking on an article opens the original news article in a new tab.
* In summary, the NewsItem component dynamically fetches and displays fashion-related news articles with varying styles based on their index
## Merch page
Rendered when click on any ad or Merch in navbar

### Code info
The Merch component is used to render merchandise-related content.
* It accepts a prop named name.
* It uses the useSnapshot hook from the Valtio state management library to access the current state from the state object.
* The component uses conditional rendering to determine whether to display merchandise-related content based on the state flags merch and home from the state object.
* If merch is true and home is false, the component uses Framer Motion's motion.div component to create an animated transition effect.
* Inside the motion.div, the component renders two sub-components: Merchpg1 and Merchpg2, possibly displaying different pages of merchandise content.
* The animation properties for entering and exiting the motion.div are defined using the initial, animate, and exit properties, along with a specified transition duration and easing function.

### Merchpg1
* The Merchpg1 component displays a background image from the merchbg asset using inline styling.
The background image is set to cover the entire viewport and is responsive to the viewport's size changes.
* The content of the page is positioned using position: absolute and transform properties to achieve specific layouts.
* A large heading with the text "Merch" is displayed using the "League Gothic" font at a font size of 20vw (20% of the viewport width). It is positioned above and to the right of the viewport using the transform property.
* A paragraph of text is displayed below the heading, indicating "Showoff your style with a wide collection of our very own products." 
* The text is styled with a font size of 1.1em, black color, and positioned using the position and transform properties.
The overall layout creates a visually appealing presentation for the merchandise section's first page.

### Merchpg2
Is a React component responsible for rendering the second page of a merchandise section. It displays the title "Products," an image slider, and a paragraph with messages about product availability. The content varies based on the name prop. If merchandise is out of stock (namer truthy), it offers a signup option for restock notifications; otherwise, it simply presents information about the product being out of stock. The component utilizes inline styles for positioning and styling elements.

#### ImageSlider
It displays a horizontal slider of images. 
* It supports touch and mouse interactions for dragging the slider left or right. 
* The component tracks mouse events and calculates the percentage of the slider position relative to its maximum possible movement. 
* The images are displayed within a div with dynamic translations applied based on the calculated percentage. 
* Each image has a unique URL, and the component utilizes inline styles for positioning, sizing, and touch/mouse event handling.
## About Us page
* The component tracks the mouse position and updates the cursor's position accordingly.
* The cursor's appearance changes based on different states: default, head, and icon, each having distinct positions and styling.
* There are clickable icons (Instagram and Google) that link to their respective pages. Hovering over these icons changes the cursor's appearance.
* The component has a text area (top-view and bottom-view) that displays paragraphs about the organization's mission and vision. When the cursor hovers over this area, it hides and reveals another text area.
* Images are displayed, and coupon codes are shown on the images with hidden text. These images have associated hidden text that becomes visible when the cursor hovers over them.
* The component uses the useSnapshot hook from the valtio library to access the application's state and determine the rendering logic based on state conditions.
* The component utilizes the AnimatePresence component from Framer Motion for smooth entrance and exit animations.
## Login/Signup page
 It employs Framer Motion's AnimatePresence for smooth entrance and exit animations. Here's a brief summary:

* It uses useSnapshot from valtio to access the app's state.
* When intro and about are false, and login is true, it renders the login form and features.
* AnimatePresence manages entrance and exit animations.
* The motion.div encapsulates the login form and features, utilizing animations. initial, animate, and exit define animation behavior.
* Components Form1 and Features are rendered inside the motion.div.
In essence, Loginit provides animations while controlling the display of the login form and features based on the app state.

### Features
It  showcases a set of features with a dynamic width animation based on mouse or touch movement. Here's a concise overview:

* The component utilizes useRef to access the left side element.

* handleMove adjusts the width of the left side based on the mouse or touch position.
* Event listeners for mousemove and touchmove are added in the useEffect hook.
* These listeners are removed when the component unmounts.
* The component is styled to have two sides: left and right.
* The left side's width is controlled using leftRef.
* The right side contains a list of features with corresponding icons and descriptions.
* The features are visually numbered with h1 tags.
* The component allows dynamic resizing of the left side based on mouse or touch movement, creating an engaging visual effect.

### Login/Signup form (firebase)
* The component manages the active state to toggle between login and signup forms.
* The handleRegisterClick function sets the active state to show the signup form.
* The handleLoginClick function sets the active state to show the login form.
* An onAuthStateChanged listener checks if the user is logged in and updates the displayed username.
* The login form includes email and password input fields, with validation and error handling.
* The handleSubmissiont function triggers login using signInWithEmailAndPassword.
* The signup form includes username, email, and password input fields, with validation and error handling.
* The handleSubmission function triggers signup using createUserWithEmailAndPassword.
* After signup, the user's display name is updated using updateProfile.
* Both login and signup forms display error messages if the form is not properly filled or if authentication fails.
* The form transitions are achieved by adjusting the transform property based on the active state.
* The component provides a user-friendly interface for both login and signup processes.

## Navbar (Navigation)
* The component uses the showNav state to toggle the visibility of the navigation menu.
* The wobble state is used to trigger a CSS animation on the company logo image.
* The toggleNav function toggles the visibility of the navigation menu and triggers the wobble animation on the company logo.
* The handleLogout function logs the user out using the Firebase auth.signOut method and resets the name in the state to null.
* The navigation bar includes a company logo image that triggers the toggleNav function when clicked.
* When the navigation menu is shown, a navigation box expands using Framer Motion animations.
* The navigation items are displayed with animation and links to different sections of the website using state management.
* If the user is logged in, their name is displayed along with a logout button.
* If the user is not logged in, a login/signup button is displayed.
* The component provides dynamic navigation options and a user-friendly interface for accessing different sections of the website.

## Color Reference

| Color   | Hex                                                                |
| ------- | ------------------------------------------------------------------ |
| Color1  | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000   |
| Color2  | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF   |
| Color3  | ![#FA6CB2](https://via.placeholder.com/10/FA6CB2?text=+) #FA6CB2   |
| Color4  | ![#F77269](https://via.placeholder.com/10/F77269?text=+) #F77269   |

## Learning
Learned several things
* Used a new routing technique of states from valtio library
* Used AnimatePresence for transition animations
* Learned implementing apis on my own in react
* Learned converting code from js to jsx
* Used firebase for form authentication and use it in various paths throughout the website
* Learned about windowscroll to top for a better routing experience
* Learned to convert figma design to real code 
* Learned extensive amount of css like backdrop filter blur to add glass morphism effect or webkit to make font colored textured by giving it background
* Learned using console.log for various debugging 
and much much more. 

It was really an amazing experience, thinking of logic to implement various features and breaking problems into smaller problems to solve them.
## Website Motivation

For a glamour-based website. I knew I had to push my limits in UI/UX design to make the website look modern and also applicable to the site.

Being a fashion enthusiast. I know how hard it is to keep up with the latest fashion therefore I got the idea of implementing an news page. 

I started by creating a fashion-based event website, therefore, the bad naming of some modules the whole design was dumped after 15 days of work and I started designing a bigger website that not only contains events but much more from merch to login/signup page

Navbar was added around the end as it had to link all other components with himself from Valtio library things became as simple as using basic if else conditions

I used my prev 15-day components in the main website strategically placing them wherever necessary.

It was my first time doing such a big project and I used as many new technologies for me as were suitable for the website

## Authors

 [SiddharthPalod IMT2022002](https://www.github.com/SiddharthPalod)

