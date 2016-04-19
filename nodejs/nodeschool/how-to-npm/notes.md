# How to npm

Notes about the lesson of how to npm in nodeschool

## Install npm
Hello, and welcome to the npm adventure workshop!  I am going to be asking you to do various things with npm so that you can get started with it easily.

## Dev Enviroment
One of the most important things that npm does is install packages.

However, in order to be a good workshop program, we don't want to litter files all over your computer, so before going any further, let's set up a development environment.

Make a new directory and `cd` into it.

## Login
npm is best when you can be a part of it.  That starts with creating an account.

Because this is just a tutorial adventure, remember, we're not *actually* creating an account anywhere.  However, when you run this in the Real World, it'll create a real account, with a page on npmjs.com and the ability to publish packages that real live humans can install and enjoy.

To see who you're logged in as, run `npm whoami`

To create your account, run `npm adduser`

Try it now, and open the door to ever-greater module fun times!

<b>Point</b>

+ create user by `npm adduser`, with username, password and email
+ `npm whoami` to get the username after you create user

## Start a project
npm helps you build projects, but for npm to be able to do that, you need to tell npm a little bit about your project. You can tell npm about your project in a file called package.json.

Run `npm init --scope=<username>`, and replace <username> with the user you created in the last lesson. This will create a package.json file. (For extra credit, set the project up with a git repo as well.)

<b>Point</b>

+ `npm init --scope=<username>`

## Install a module
The first thing that most people do with npm is install a dependency.

Dependencies are fetched from the registry, and unpacked in the `node_modules` folder.

To install a module, use the `npm install <modulename>` command.

The registry that we're using for this tutorial is a tiny version of the one at https://registry.npmjs.org. So you might find that it only has a small number of things.

Let's start out by installing the "@linclark/pkg" module.

<b>Point</b>

+ `npm install <modulename>`

## Listing dependencies
npm isn't just for installing stuff.  It also shows you what you have installed.

You can do this using the `npm ls` command.

Run this command in your working dir, and then run `how-to-npm verify OK` if everything looks ok, or `how-to-npm verify NOT OK` if there was a problem.

<b>Point</b>

+ `npm install pkgname --save` to install module and update the json file

```
Indeed, not all is well here in dep-land.

Your dependencies should be listed in the package.json file in an
object called 'dependencies'.  However, when we installed '@linclark/pkg',
we didn't update the package.json file to list out this dependency.

So, it shows up as 'extraneous', warning us that we have something
there that we haven't listed as a dependency.

The easiest way to avoid this situation is to use the `--save` flag
when installing dependencies.  You might not want to do this with
things that you're just trying out, but when you decide on something,
you can use this flag to update your package.json file easily.

Try running `npm install @linclark/pkg --save` to install the module, and also
update your package.json file at the same time.

(Another option is to just edit package.json yourself in a text editor)
```

## npm test
Now you've installed something, and used `npm ls` to show what's going on.

If you look at the package.json file, it has this rather odd bit in it:

`
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
`

npm can be used as a task runner, and almost every module and project will have a test script that runs to make sure everything is good. In order to help remind you to do this, npm puts a "always failing" test in there by default.

First, create a file called `test.js`.  It doesn't have to do anything, really.  (This is npm class, not testing class.)  But it has to exit without throwing an error, or else the test fails.

Then, edit your `package.json` file to make your scripts section look like
this instead:

  "scripts": {
    "test": "node test.js"
  },

<b>Point</b>

+ There is not a default test file
+ create test file and tell the npm in the package.json file

## Package niceties
So, we've created a package.json file, but it's missing a few things that people usually expect.  If you type `npm install`, you'll see something like this:

    npm WARN package.json test@0.0.1 No description
    npm WARN package.json test@0.0.1 No repository field.
    npm WARN package.json test@0.0.1 No README data

Before we can share this work of art with the world, we need to make it a bit more polished so that people know how to use it.

First, create a README.md file, with a bit of words in it.

Then, add a "repository" field in your package.json file, with a url where people can access the code.

You can edit your package.json file by hand, or run `npm init` again.

<b>Point</b>

+ polished the package.json file

## Publish
What good is a package manager without packages?

Not very good.

Luckily, that is not a problem for npm, because it's very easy for all npm users to publish their modules and share them with the world.

Packages get into the registry by using the `npm publish` command.

Try it now.  There's not much too it.

(Make sure you're still in the right project directory, though. If you publish something by mistake, you can remove it, but there's no guarantee that no one saw it in the meantime.)

## Version
Every package in npm has a version number associated with it.  As you release updates to your package, these updates get an updated version number.

Version numbers in npm follow a standard called "SemVer".  This stands for "Semantic Version".  The specification for this standard can be found at http://semver.org.

The tl;dr version is that for a version like this:

  1.2.3
  
  ^ ^ ^
  
  | | `-- Patch version. Update for every change.
  
  | `---- Minor version. Update for API additions.
  
  `------ Major version. Update for breaking API 
  changes.

npm has a special command called `npm version` which will update your package.json file for you, and also commit the change to git if your project is a git repository.  You can learn more at `npm help version`.

Or, if you don't trust the machines, you can open up your package.json file by hand, and put some new numbers in the "version" field.

The npm registry won't let you publish a new release of your package without updating the version number!  Ever!  So, get used to the idea of bumping the version whenever you want to publish, even if the change is really minor.

Don't worry, there's a lot of integers, we probably won't run out.

<b>Point</b>

+ Once you have some change, you must update the version number if you want publish it. Otherwise, you cannot publish it.
+ SemVer Standard
+ Two way of update version number:
	1. By hand in package.json
	2. `npm version`

## Publish again
Publishing something once is fine.  But healthy packages get published again and again with new and exciting bug fixes.

You can't re-use the same version number again, because that's hella confusing for all the robots running the treadmills that power the npm registry.  But, now that we changed the version number in the last exercise, you can publish the package again.

## Dist tag
Every published package on npm has a `dist-tags` entry on it which maps strings like "latest" to version numbers like "1.2.48".

By default, the "latest" version is what gets installed. When you publish, the version that you publish gets tagged as "latest". This is generally great, because most of the time you publish things when
you're ready for users to use them.

However, if you need to publish something, and *not* make it the default version of a package (for example, if it's a security release for a legacy version, or something), then you can manually manage these distribution tags with the `dist-tag` function.

Run `npm help dist-tag` to learn more about it.

## Dist tag removal
Now that you've added a dist-tag or two, let's clean things up.

The only dist-tag you CAN'T ever remove is "latest".  That's because every package installs it's "latest" tag by default, so that tag has some special semantics.

You CAN point "latest" to a different version, or delete other tags.

Let's delete all the tags that we can, and also point "latest" at something other than the most recent release.

## Outdated
Now that we have some dependencies, and you've learned that your own packages can be updated repeatedly, the obvious question is: What do we do when someone *else* updates *their* package?

The first step is to detect this.  Because of the way that we define our dependencies with a version range, and each release is a unique combination of a name and a version, we can detect compatible releases programmatically with the `npm outdated` command.

To pass this challenge, run `how-to-npm verify PKG` where `PKG` is the name of the package that is out of date.

<b>Point</b>

+ get the pkg which is out of dated by `npm outdated`

## Update
It's fine, of course, to explicitly check for outdated modules, and then run `npm install` to pull them in.

However, if you want to be a bit more lazy about it, there's a special npm command that will UPDATE all of your deps to the max version you allow in your package.json.

Can you guess what command that might be?  (`npm help` might help you)

Update all your deps to the latest version possible, and then run `how-to-npm verify` to pick up your delicious green banner.

<b>Point</b>

+ update all package by `npm update`

## RM
If you have a way to put stuff there, then naturally, you'll one day need a way to delete them.

Enter the `npm rm` command (aka `npm uninstall` if you prefer to type things out long-hand).

Remove all the deps!  But, make sure that you don't keep depending on them.

Just like you can use `--save` on installing packages, you can also use `--save` when removing packages, to also remove them from your package.json file.

<b>Point</b>

+ `npm rm pkgname --save` or `npm uninstall pkgname --save`

## Finale
It's almost time to say goodbye.  But don't worry!  This is just an introduction.  If you've finished all the other exercises, then run `how-to-npm verify` to learn about the next steps beyond this little adventure.


END.