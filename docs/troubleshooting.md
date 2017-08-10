## Troubleshooting all the things!

### `npm install` taking a very long time to download packages and destroying network connectivity

- Add `registry=http://registry.npmjs.org/` to `~/.npmrc` to force HTTP requests instead of HTTPS.
- If the project is using a `package-lock.json` file, run `sed -i 's/https:/http:/g' package-lock.json` to change all of its URLS to HTTP.

### Error: `libsass` bindings not found. Try reinstalling `node-sass`

This means that the module you are using to compile Sass is not installed (at least not where Node expects it). This is a common error when switching between node versions on different projects, because you installed the project with one version and are now trying to use it with another.

1) Make sure you are using the right node version
2) If so, reinstall the module that you are using to compile Sass. It can be either:

```sh
npm install --save-dev gulp-sass
# or
npm install --save-dev grunt-sass
```

Do not install `node-sass` directly unless you plan on using it directly.

### Error: `npm ERR! addLocal Could not install <project>/build`

This happens because of shrinkwrapped projects where some dependencies were resolved to a local cache of packages that were built on the computer before publishing.

Use `cat npm-shrinkwrap.json | grep "file:build" --context=4` to find out which packages are impacted, then remove them from the local cache with `npm cache clean <package>` and `npm install --save` them again.

### Error: `listen EADDRINUSE :::3000`

This means that the 3000 (or any other number) port is already being used by another process (web server, app, etc) on your computer. The port ranges from 3000 to 9000 are frequently used by web servers.

- Perhaps you already have the project running inside another terminal window
- Or another project uses the same port number and is running already

You will need to stop the process that uses the port. If you do not have any other project running, look for the process which is using the port with the following commands:

```sh
# Will tell you which node servers you have running
ps aux | grep node
# Same for Python
ps aux | grep python
# Same for gulp
ps aux | grep gulp
# Another way to find the same info (for port 3000)
lsof -i :3000 -S
```

Once you found the likely offender, use the `kill` command giving it the process ID (PID) as a parameter. Here is an example:

```sh
$ ps aux | grep node
thibaud          15733   0.0  0.0  2423552     24 s006  S+   10:42PM   0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn node
thibaud          13290   0.0  0.3  3077004  49184 s002  S+    9:51PM   0:04.75 node --harmony main.js
thibaud          10642   0.0  0.2  3078404  30444 s002  S+    9:24PM   0:05.03 node /Users/thibaud/Dev/sites/gmi-goals-prototype/node_modules/.bin/nodemon main.js
```

Here, the offender is either `13290` or `10642`. So `kill 13290` first, and `kill 10642` second if that was not enough.

### Error: `Failed at the <package> install script 'node-gyp rebuild'`

TLDR: Make sure your local version of Python is `2.7.x`. If your project is using Python 3, instruct NPM to use Python 2 instead with `npm install --python=python2.7` or `npm config set python python2.7` before running `npm install` (or even `PYTHON=python2.7 npm install`.

While the error message will instruct you to check `npm-debug.log`, it is likely that the file wasn't generated. Trying to run `node-gyp rebuild` from the `iconv` module folder was a little bit more verbose, the post install script fails because it is only compatible with Python 2 and you're running Python 3.
