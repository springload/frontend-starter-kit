# Useful tools

## [Zeplin](https://zeplin.io/)

> Collaboration app for UI designers and front-end developers

We use [Zeplin](https://zeplin.io/) to do designer / developer handovers.

Why we like Zeplin:

- It facilitates sharing naming conventions between disciplines.
- It forces designers to be more accurate and consistent in their designs for things such as margins / measurements, text styles and components over multiple screens.
- The CSS export of specific styles is copy/pasteable as a starting point, to refactor.

How we use it:

- Designs are exported from Sketch to Zeplin.
- The "Scene" is useful to share designs with clients / third parties without giving them complete access as well as enabling in-situ commenting. 
- The "Styleguide" provides a good overview of type sizes, colors, components. It is automated so it picks up inconsistencies right away.
- Structuring the Sketch file accordingly initially takes time, but then updating it is very simple/fast.

## Node tooling

| Tool     | Description | Notes   |
| :------- | :---------- | :------ |
| **Quality** |
| [Disc](http://hughsk.io/disc/) | > Track down bloat in Browserify project bundles. | `discify public/bundle.js > disc-report.html`, [Disc report for `react-d3-integration`](https://springload.github.io/react-d3-integration/disc-report.html) |
| [Hyperlink](https://github.com/Munter/hyperlink) | > Detect invalid and inefficient links on your webpages. | Link checker FTW! |
| [CSS stats](http://cssstats.com) | > Get some statistics about the CSS used on your project.| Number of rules, Number of selectors, Specificity graph, File size, etc |
| **Debugging** |
| [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/) | > weinre is a remote web inspector. Like the Chrome Devtools but built in HTML and can be used to debug any browser.| integrated into most of our projects via `browser-sync`. See http://localhost:3001/remote-debug on the project)|
| [IE VMs](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/mac/) | > IE testing VMs. Made available freely by Microsoft, for all platforms. |                                             |
| **Performance** |
| [sitespeed.io](https://github.com/sitespeedio/sitespeed.io) | > Helps you analyze and optimize your website speed and performance. | [Sitespeed.io report for `react-d3-integration`](https://springload.github.io/react-d3-integration/sitespeed-result/springload.github.io/2015-07-27-12-38-44/) |
| [artillery](http://artillery.io/) | > Simple & powerful load-testing for HTTP(S) | > `artillery quick -d 30 -r 5 <URL>` |
| **Maintenance** |
| [NVM](https://github.com/creationix/nvm) | > Node Version Manager - Simple bash script to manage multiple active node.js versions | [View installation instructions](https://github.com/creationix/nvm#install-script) |
| [David](https://github.com/alanshaw/david) | > Tells you when your `npm` dependencies are out of date. |                                             |
