# Trumplings
Trumplings runs on Jekyll via GitHub pages. Feel free to fork and contribute. 

## Visuals
The physics is handled with [box2djs](http://box2d-js.sourceforge.net/). That's doing the bulk of the heavy lifting. Sidebar buttons control basic functions to create a new randomized trumpling, with randomized horizontal location. A randomize javascript function combined with a numerical trumpling file naming allows the randomization of images on click.

## Audio
Each sound clip is an independent `audio` element, with a unique ID. Like this:
```
<audio id="audio3">
	<source src="/sound/laughing-at-us.mp3"></source>
	<source src="/sound/laughing-at-us.ogg"></source>
</audio>
```
The clips are randomized through the javascript:
```
var randomAudio = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var audio = document.getElementById("audio" + randomAudio);
```

To add a new audio clip first upload the `.mp3` and `.ogg` files to the sound directory. Then create the new HTML `audio` element with the new sequential ID. Then update the `randomAudio` variable to include the appropriate number of audio elements to randomize. 
