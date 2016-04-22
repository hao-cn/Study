# elementary-electron

Make a desktop application using Node and Chromium with Electron.

## 1 Installing

Use following commond to install the elementary-electron in the global path.

```
npm install elementary-electron -g
```

## 2 Hello World
Let's set up a simple electron application.

First, create a new empty folder and do the rest of these steps inside that new folder.

Using a text editor (such as TextEdit, Notepad, etc.), create a file called index.html in the folder you just created with the following contents:

```
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```	

Then create a file (in the same folder) called app.js with the following contents:

```
var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
```

Finally, run electron app.js in your terminal. You should see an application open that displays Hello World!

When you think you are done with this challenge, run elementary-electron verify


## 3 Cat Picture
Now that we have a working skeleton structure we can add our first feature: render a cat picture.

We could write the code to do this ourselves, but (like many other common programming tasks) somebody else has already written code to do this for us. Node.js provides a way for authors to package up chunks of pre-written code for easy re-use, and also provides a program called npm to produce, download, and install such packages (which Node refers to as "modules"). If you're familiar with R, npm is very similar to the install.packages() command.

So, back to our task: add a glorious cat picture to our app. To do this we can use a module from npmjs.org called cat-picture. It does one thing: adds a cat picture to a web page.

We will use the npm command line tool to download and install the cat-picture module. Before we can work with modules, though, we need to give Node a little bit more information about what we are doing with our app. The best way to do this is actually to create our own module!

To do this, all we need to do is create a file called package.json that will contain certain information about our module, notably including a list of what other modules we depend on. npm can do this for us!

Run the command npm init It will ask you some questions to fill out; if you're not sure about the answer, you can just hit "enter" to accept its default.

When the command is complete, you should see a new file in your directory called package.json. Check it out! You can open package.json in your text editor. 

Now, run the following command: 
	
	npm install cat-picture --save

This will download the cat-picture module into a folder called node_modules and will also add cat-picture to your package.json. If you open package.json in your editor again, you should see a mention of the cat-picture module.

Now that we have installed the module, we can use it in our application. Add this to your index.html file, inside the <body> section but after the \<h1\> section:

	<script type="text/javascript" src="index.js"></script>

Then, use your text editor to create a new file in your directory called index.js with this line of code in it:

	require('cat-picture')

Now when you run your app with electron app.js you should see a cat!

When you think you are done with this challenge, run 

```
elementary-electron verify
```

## 4 Cat Annotation
Now we're going to add a feature: draw polygon regions on the image!

This could be useful for labeling objects or defining regions on a map.

Add the following line to the <body> section of your index.html, which adds an empty div element to hold our visualization. Make sure this comes before the \<script\> tag so that the code runs after the div is created.

```
<div id='visualization'></div>
```

Next modify index.js. The first line should require our cat picture, and also assign it to a variable: 

```
var picture = require('cat-picture')
```

We actually just want the source data for the picture, so get it, then remove the image from the page.

```
var src = picture.src
picture.remove()
```

Now install a visualization module for drawing polygons by typing 
	
	npm install lightning-image-poly --save.

Double check that your package.json has a new entry!

Require the module by adding the line:

	var image = require('lightning-image-poly')

Then render the image data we stored above by creating a new image visualization.

	var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

If you run electron app.js you should see a cat, and be able to draw polygons on it wih the mouse!

When you think you are done with this challenge, run elementary-electron verify




