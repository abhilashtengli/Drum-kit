# Drum Kit Webpage

This project is a simple web-based drum kit that allows users to play sounds by pressing specific keyboard keys. When a key is pressed, a corresponding sound is played, simulating a virtual drum kit.

## Features

- **Button Layout**: The buttons on the webpage correspond to different drum sounds. Pressing these buttons or the corresponding keyboard keys triggers the respective drum sound.

- **Sounds**: The project includes a collection of drum sounds that can be played. Each sound is associated with a specific key.

## Usage

1. Open the `index.html` file in a web browser.

2. Click the buttons on the webpage to play the drum sounds, or use the keyboard keys mentioned on the buttons.

3. Enjoy experimenting with different combinations of sounds!


## Technologies Used

- HTML
- CSS (styles are defined in the `styles.css` file)
- JavaScript (behavior is defined in the `script.js` file)
- Audio files in MP3 format

## Audio Player Function

This is a simple JavaScript function for playing audio elements on a webpage. The function allows you to play an audio element while pausing any previously playing audio.

## Drum Kit Webpage CSS Styling

This section provides an overview of the CSS styling used in the Drum Kit Webpage project. The styling enhances the visual appeal of the webpage, creating an engaging and interactive experience for users.

## CSS Overview

The CSS styles in the `styles.css` file contribute to the overall look and feel of the Drum Kit Webpage. Here's a breakdown of the key styling aspects:

### Universal Selector Reset

The universal selector (`*`) is used to reset the default margin, padding, and box-sizing properties for all elements. This ensures consistent spacing and layout throughout the webpage.

### Body Styling

The `body` element is styled to set the background color, padding, width, and height of the entire webpage. This provides a comfortable space for the content and contributes to the aesthetic appeal.

### Top Section Styling

The `.top` class is applied to the top section of the webpage, which contains the title. The following styles are applied:

- `display: flex` and `justify-content: center` are used to horizontally center the content.
- The `h1` element within the `.top` class is styled with a bold font, oblique style, large font size, and a text shadow for emphasis.
- The `cursor: pointer` property is added to the title to indicate interactivity.
- On hover, the opacity of the title is reduced with a smooth transition effect for visual feedback.

### Bottom Section Styling

The `.bottom` class is used for the bottom section of the webpage, where the drum kit buttons are placed. Similar to the top section, it's centered horizontally using `display: flex` and `justify-content: center`.

### Drum Kit Button Styling

The `.btn button` class styles the drum kit buttons. Here's a breakdown of the styling choices:

- Buttons are given a fixed width and height for a consistent appearance.
- The `font-family` property is set to create a bold and impactful font style.
- The font size, border, and border radius contribute to the button's visual presence.
- Text color and text shadow enhance the legibility of the button text.
- The `padding-top` property is used to vertically center the text within the button.
- On hover, buttons become slightly transparent with a transition effect for a smooth hover effect.

## Usage

1. Add the `styles.css` file to your project directory.
2. Link the `styles.css` file in your HTML's `<head>` section using the `<link>` tag.

## JavaScript Code Explanation

The provided JavaScript function, `playAudio(audioId)`, is responsible for playing audio elements on a webpage. Here's how it works:

1. `var currentlyPlayingAudio = null;`: This variable keeps track of the currently playing audio element. It's initialized to `null` when no audio is playing.

2. `function playAudio(audioId) { ... }`: This is the main function that takes an `audioId` as a parameter. The `audioId` is the HTML id attribute of the audio element you want to play.

3. Inside the function:
   - The first `if` block checks if there's already an audio element playing (`currentlyPlayingAudio` is not `null`).
     - If there is, the currently playing audio is paused using the `pause()` method.
   - The `var audio = document.getElementById(audioId);` line retrieves the audio element with the specified `audioId`.
   - The `audio.play();` line plays the retrieved audio element.
   - Finally, `currentlyPlayingAudio` is updated to the new `audio` element, so it can be paused if needed in the future.

## How to Use

1. Add the provided JavaScript code to your HTML file or a separate JavaScript file.

2. In your HTML file, add audio elements that you want to control using the `playAudio` function. Each audio element should have a unique `id` attribute.


## Credits

- Drum sounds sourced from [freetouse.com](https://www.freetouse.com/).
- Webpage design and implementation by [Abhilash Tengli].

## Note

This project is for educational and demonstration purposes only. The audio files used are sourced from freetouse.com, and proper attribution is given to the creators of those audio files.
