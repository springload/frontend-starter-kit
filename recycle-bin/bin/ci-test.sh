#!/usr/bin/env bash
#
# Test script for the project. To be ran on each build within a CI environment.

# Fail on first line that fails.
set -e

# To only run things on master:
# if [ "$CI_BRANCH" == "master" ];
# then
# fi

# Start the server if relevant.
# npm run start &
# SERVER_PID=$!

# Run cleanup before exiting.
function before_exit {
    set +e
    echo "Cleaning up before test exits"

    # Kill the server if relevant.
    kill $SERVER_PID
}

# trap before_exit EXIT

npm run lint:js
npm run lint:sass

# Project tests.
npm run test:coverage -- --runInBand

# Link checking
# hyperlink "http://example.com/"

exit 0
