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