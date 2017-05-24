#!/usr/bin/env bash
#
# From the project's root.
# First make sure your master is up to date.
# Then push the new changes

# Compile the project.
npm run dist

# Regenerate the pattern library.
npm run patterns:dist

# Copy to pages subfolder.
rm -rf pages
cp -R docs pages
cp -R core/static/* pages

# Deploy pages subfolder to gh-pages branch.
git checkout -B gh-pages
git add -f pages
git commit -am "Rebuild gh-pages website" --no-verify
git filter-branch -f --prune-empty --subdirectory-filter pages
git push -f origin gh-pages
git checkout -
