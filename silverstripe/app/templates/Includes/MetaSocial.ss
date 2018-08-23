<%-- Created with https://realfavicongenerator.net/social/ --%>

<meta property="og:title" content="<% if $MetaTitle %>$MetaTitle | <% else %>$Title | <% end_if %>$SiteConfig.Title">
<meta property="og:description" content="<% if $MetaDescription %>$MetaDescription<% else %>$HeroIntro<% end_if %>">
<meta property="og:url" content="$AbsoluteBaseURL<% if $Link %>$Link<% end_if %>">
<meta property="og:image" content="images/social.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<%--  Twitter Cards - see https://dev.twitter.com/cards/markup  --%>
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<% if $MetaTitle %>$MetaTitle | <% else %>$Title | <% end_if %>$SiteConfig.Title">
<meta name="twitter:description" content="<% if $MetaDescription %>$MetaDescription<% else %>$HeroIntro<% end_if %>">
<meta name="twitter:image" content="images/social.png">
<meta name="twitter:image:alt" content="$SiteConfig.Title">
<%-- end:twitter card --%>
