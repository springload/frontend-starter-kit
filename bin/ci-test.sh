#!/usr/bin/env bash
#
# Test script for the project. To be ran on each build within a CI environment.

# Fail on first line that fails.
set -e

# To only run things on master:
# if [ "$CI_BRANCH" == "master" ];
# then
# fi

# Make sure the front-end build works.
npm run dist

# Start the server if relevant.
npm run start &
SERVER_PID=$!

# Run cleanup before exiting.
function before_exit {
    set +e
    echo "Cleaning up before test exits"

    # Kill the server if relevant.
    kill $SERVER_PID
}

trap before_exit EXIT

# Only lint files updated in the last commit.
# A bit counterintuitive but our linting is not there yet.
NEW_FILES=$(git --no-pager diff --name-only HEAD..HEAD~1)
JS_FILES=$(echo "$NEW_FILES" | { grep core/static_src/js || true; })
SASS_FILES=$(echo "$NEW_FILES" | { grep core/static_src/sass || true; })

if [ -n "$JS_FILES" ];
then
    # Standard stylistic linting cannot break the build.
    npm run linter:js -- $JS_FILES || echo ok
    # CI-specific "error catcher" linting breaks the build.
    npm run linter:js:ci -- $JS_FILES
fi

if [ -n "$SASS_FILES" ];
then
    # Sass file linting errors cannot break the build
    npm run linter:sass -- $SASS_FILES || echo ok
fi

# Project tests.
npm run test

# Link checking
hyperlink "http://example.com/"

## Dependencies checking.
david || echo ok

exit 0
