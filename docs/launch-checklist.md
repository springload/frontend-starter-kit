# Project launch checklist

> Handy things to check when building a website or web app.

> **This checklist is where we want to be**, not necessarily where we always are. Ideally we would want as many of those line items to already be taken care of by our starter kit and other boilerplates. In practice, it is not that simple and we need such a checklist to make sure that we deliver top-notch experiences.

```
      __...--~~~~~-._   _.-~~~~~--...__
    //   Vorsprung   `V'    Pauca      \\ 
   //   durch Technik |     sed bona    \\ 
  //__...--~~~~~~-._  |  _.-~~~~~~--...__\\ 
 //__.....----~~~~._\ | /_.~~~~----.....__\\
====================\\|//====================
                    `---`  
```

## How to use this

> This is meant to be used when a site goes live, but do go through it sooner to make sure there won't be too many surprises.

1. It will take you **around 2 hours** to go through this list if you've done it before. Make sure you have the time. Ask for support.
2. Open the [raw markdown files](https://raw.githubusercontent.com/springload/frontend-starter-kit/master/docs/launch-checklist.md), copy the content of the checklist sections and paste it into a new GitHub issue on the relevant project.
3. In the GitHub issue, move through the whole list and check items as you go.
  - All of the items should be checked.
  - If an item is irrelevant it should be checked and a reason should be mentioned.
  - If an item cannot be tackled because of other constraints, backlog the problem and potential fix where appropriate.
  - If you've spotted/fixed something, take note of it in the same issue so that we can see the impact of this process on our ratio of bugs per project.
  - If you added new checklist items, consider adding them back in the main checklists.
4. Once you are done, ping your front-end lead (`@username` on GitHub) to let them know this is done so they can help with what is left.

## Checklists

|:heavy_check_mark:|Raw file|
|------------------|--------|
|[Front-end launch checklist](frontend-launch-checklist.md)|[frontend-launch-checklist.md](https://raw.githubusercontent.com/springload/frontend-starter-kit/master/docs/frontend-launch-checklist.md)|
|[Project best practices](#project-best-practices)|[launch-checklist.md](https://raw.githubusercontent.com/springload/frontend-starter-kit/master/docs/launch-checklist.md)|

### Project best practices

#### Images

- [ ] All of the images are [losslessly optimized with ImageOptim](https://imageoptim.com/).

#### SEO

- [ ] `/sitemap.xml` is here, with relevant and up to date content.
- [ ] `/robots.txt` is here, with relevant and up to date content.
- [ ] `/humans.txt` is here, disallowed in `/robots.txt`.

#### Tests

- [ ] Site tested in [all relevant browsers and devices](https://github.com/springload/frontend-starter-kit/tree/master/docs#browser--device-support) by multiple people, including the client.
- [ ] Spelling and grammar checked thoroughly (copy/paste the site's content in Google Docs).

#### Monitoring

- [ ] Use [SpeedCurve](https://speedcurve.com) to configure the performance monitoring on the site's most important page (homepage?).
- [ ] [Google Search Console / Webmaster Tools](https://www.google.com/webmasters/tools) is configured on the live site.

#### Server configuration

- [ ] Static files are gzipped in production (JS/CSS/SVG/etc, check this with [PageSpeed](https://developers.google.com/speed/pagespeed/insights/) or [GTmetrix](https://gtmetrix.com/)) on the live site.
- [ ] Static files are cached for a long time in production (JS/CSS/images/etc, check this with [PageSpeed](https://developers.google.com/speed/pagespeed/insights/) or [GTmetrix](https://gtmetrix.com/)) on the live site.
- [ ] Canonical URL redirect exists, if relevant (eg. `example.com` ➞ `www.example.com`).
- [ ] HTTP to HTTPS redirect exists, if relevant.

#### Deployment

- [ ] No unnecessary files (`node_modules`) are sent to the production server, slowing down the build (look for the list of files sent to the server in the `rsync` step of the deployment).
- [ ] CI builds trigger notifications in the appropriate Slack channel.

#### Fonts

- [ ] All of the fonts used on the project are correctly licensed, at the appropriate license level (expected pageviews/month).
- [ ] If relevant, Analytics email alerts are set up when audience levels go over the fonts' license thresholds.

#### Documentation

#### The README contains

- [ ] Continuous integration service badge for the project (CodeShip, CircleCI, Travis).
- [ ] All of the important links as a table.
- [ ] Live and Preview/staging sites links.
- [ ] Links to Trello board, Harvest project, project run sheet, Drive folder.
- [ ] Links to design resources - Zeplin, InVision, other.
- [ ] Analytics, Search Console, and other monitoring URLs.
- [ ] Links to other important documents and services.
- [ ] Instructions on how to deploy to production.
- [ ] Instructions on how to deploy to staging/preview.

#### The GitHub repository has

- [ ] A description set on GitHub.
- [ ] If relevant, a website set on GitHub.
- [ ] Appropriate labels set on GitHub. See https://github.com/springload/labels.
- [ ] Branch protection enabled with CI checks and code reviews on `master`.
- [ ] Basic branch protection enabled on deployment branches.
