<% if $SentryFrontendDsn %>
    <%-- Load Sentry JS before bundle --%>
    <script src="https://cdn.ravenjs.com/3.26.2/raven.min.js" crossorigin="anonymous"></script>
    <script>
        Raven.config('$SentryFrontendDsn', {
            release: '$SentryRelease',
            environment: '$SentryEnvironment'
        }).install()
    </script>
<% end_if %>



