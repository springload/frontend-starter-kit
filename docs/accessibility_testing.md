# Accessibility Testing

## Resources

### WebAIM

Stands for Web Accessibility in mind. This site is dedicated to making developing and testing sites for accessibility as easy as possible. They have many useful resources to suggest how to test accessibility, and how to understand the requirements.

Favorite resources here:

- https://webaim.org/standards/wcag/checklist
  - Lists the WCAG 2.1 standards and advice on checking each of them. Note that this is a simplified list and does not provide full information about the standards. It is merely suggestions on how to check and abide by the standards in a general mannner. Useful as a starting point when checking standards.
- https://webaim.org/articles/voiceover/
  - Introduction to using voiceover for accessibility testing. Provides useful shortcuts and some info on how it should work with elements like tables. Probably good to go through mac's built-in tutorial for voiceover first.
- https://webaim.org/articles/screenreader_testing/
  - Just a Q&A thing about screenreaders. Some interesting stuff in here.
- https://webaim.org/projects/screenreadersurvey8/
  - Statistics about screenreader use, good for perspective of what you're testing and why.

### WCAG

The source of truth on accessibility standards. It seems wordy but it's actually very well communicated for the most part. Each standard has a page on what it means and why it exists, as well as examples of techniques to meet the standard, how to test those, and situations that fail the standards. There's still some standards that are a little ambigious, and it is an awful lot of information to parse, but will give you the most important information very directly.

Here's the full document: https://www.w3.org/TR/WCAG21/

Here's a filterable quick reference page with condensed info, very usefull. I recommend following this primarily when checking the standards: https://www.w3.org/WAI/WCAG21/quickref/

### Aria in HTML

Did you know that there's rules on what aria attributes can be used in what situations. I didn't.

This site gives information on how to use aria attributes and how not to: https://www.w3.org/TR/html-aria/#rules-wd

## Desktop Tools

### VoiceOver

The built in screenreader for mac. Main tool for accessibility testing. It does take a little learning. I recommend going through the built-in tutorial, it helps you get started and shows you how to configure it.

One powerful tool of voiceover is the rotor. It allows you to view all items on a page of a certain type, (forms, links, headings, etc) and then jump directly to them. It can be opened as a menu, or with quick rotor to just jump directly between items.

Voiceover tutorial and setup is found here:

- APPLE > System Preferences > Accessibility > VoiceOver

#### For basic checking of screenreader use, these commands are important:

- **Command + F5**: starts / stops voiceover.

- **Control + Option**: The **VO** key. used for many other commands.

- **VO + Left/Right arrows**: Navigate forwards and backwards through elements.
- **VO + Shift + Up/Down arrows**: Navigate in and out of elements.
- **VO + Space**: Click.

- **VO + CMD + H**: Jump to next Heading.
- **VO + Shift + CMD + H**: Jump to previous heading.

- **VO + CMD + L**: Jump to next Link.
- **VO + Shift + CMD + L**: Jump to previous Link.

- **VO + CMD + J**: Jump to next Form control.
- **VO + Shift + CMD + J**: Jump to previous Form control.

- **VO + CMD + G**: Jump to next Image.
- **VO + Shift + CMD + G**: Jump to previous Image.

- **VO + U**: Open Rotor (use left/right arrows to change what is being listed, up/down to select, and space to jump to the selected item.)
- **VO + CMD + Arrows**: Quick Rotor. (use left/right to change what is being seeked, and up/down to jump between elements of the chosen type.)

- **VO + A**: Read down the screen, starting from the current element.

#### The most basic screenreader testing is this:

- **Navigate left > right and back through all elements**.
  - Focus should not get stuck.
  - Everything should be described accurately (mispronounciations are fine).
  - Any images with information (text, important visuals, images of a subject), should have the information described in or around the image.
  - If the image has no information (purely decorative, patterns/shapes, background images) it should be skipped.
- **Attempt all forms and controls on the site via screenreader**
  - All forms and controls should be usable.
  - Focus should not move on its own without warning.
  - Page should not change or reload without warning, unless the control would be expected to change the page (like a button to another page).
- **Navigate through all headings**
  - There should be 1 h1 element.
  - Heading levels should not be skipped.
  - Headings should describe their content.
  - Lower level headings should be part of the content of the headings above them. (the headings should make sense if organized as a tree)
- **Open rotor and view links.**
  - You should know what each link leads to just by reading it.
  - You should see all the links on the page.
- **Go between pages via screenreader.**
  - Your focus should not get stuck moving between pages.
  - Your focus should not go somewhere unexpected on the new page.

### WAVE Evaluation Tool

Created by the people at WebAIM. This tool assists with accessibility testing by finding and highlighting elements on the page that should be checked. This ranges from potential errors, to structural and aria information. It makes finding issues much faster.

For any elements or issues it finds, it provides information on what they mean and why they matter, as well as a link to official documentation.

The icons wave adds can be hidden on the details page if they get in the way.

Wave also lets you view the page with styles turned off, to preview how that looks and to help you find some elements that may be hidden.

Wave also includes a useful contrast checking tool which can determine the contrast between colours on failing elements on the page, or custom colours. It will show the contrast and what standards that contrast passes or fails.

Install wave here: https://wave.webaim.org/

Be aware that turning off the extension will reload the current page.

### AXE browser extension

Currently we use the free AXE extension for browsers. This extension will check the page similarly to a lighthouse audit, and give details on accessibility issues it finds in the page. It can take you to the element on the page, and in the dev tools. It also gives information on the potential impact of the issue and what criteria it relates to. This information links to Axe's documentation, which then may have links to WCAG standards or other places.

Axe is great for finding code issues that are difficult to identify manually. It's also useful as it doesn't just highlight areas that fail standards, but also areas that are just poor practice. The info it provides is well structured and links to more info.

Axe should not be relied on as the only accessibility check however. It does not find all issues, and may give false positives, which the user can label as such. It is not sufficient alone, any proper accessibility testing requires manual testing with assistive technologies.

Axe's website is here, there's a link to the free extension: https://www.deque.com/axe/

It is accessed through a tab in dev tools once installed.
