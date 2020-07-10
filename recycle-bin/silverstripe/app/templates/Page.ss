<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lte-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 8]><html class="no-js lte-ie9 lt-ie8"> <![endif]-->
<!--[if IE 9]><html class="no-js lte-ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <% base_tag %>
        $MetaTags(false)
        <title><% if $MetaTitle %>$MetaTitle | <% else %>$Title | <% end_if %>$SiteConfig.Title</title>
        <meta name="description" content="<% if $MetaDescription %>$MetaDescription<% else %>$HeroIntro<% end_if %>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <% include MetaIcons %>
        <% include MetaSocial %>
        <style class="accessTab"></style>
        <script>
            document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
        </script>
        <% include GTMHead %>
    </head>
    <body class="template-$ClassName.LowerCase">
        <% include GTMBody %>

        $Layout
        $Form

        <%-- Remove if not using SVG's --%>
        <div class="u-hide">
            <% include Svg %>
        </div>

        <% include Sentry %>
    </body>
</html>
