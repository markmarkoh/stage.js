stage.js
========

#### JQuery Slide/Presentation Plugin ####

This project is meant to provide a lightweight animation framework around the JQuery library. It can be used to create simple HTML animations(such as moving around DIVs, INPUTs, IMGs, etc.) for either UI purposes or presentation purposes.

[An example presentation using stage.js](http://info.press9formoreoptions.com/intro)

To create a presentation, pass $.stage.start an array of "stages" (think 'slide transitions'). 

To create a single stage, pass $.stage.create an object that contains any of the following properties:
	map
	speed
	wait
	callback

"map" should be another object with the following pattern:
	'#DOM_ID' : { CSS_PROP : CSS_VALUE }

[Read more about the parameters available to "map" via jQuery's docs](http://api.jquery.com/animate/)

"speed" is the speed the animation should take, in milliseconds

"wait" is the amount of time we should spend on that stage before moving onto the next stage

"callback" is a callback function to call before moving onto the next stage 

	<script type="text/javascript">
	  var stages = [
		  $.stage.create({
		      map: { '#a' : { left : '190px', top: '50px'}, '#b' : {right: '500px'} }, 
		      speed: 50, wait: 500 
		    }
		  ),
		  $.stage.create({
		      map: { '#b' : { right : '190px', bottom: '50px'} }, 
		      speed: 100, wait: 500 
		    }
		  ),
		  $.stage.create({
		      map: { '#a' : {top: '500px'} }, 
		      speed: 1000, wait: 70
		    }
		  ),
		  $.stage.create({
		      map: { '#a' : {left: '600px'} }, 
		      speed: 1000, wait: 750, callack: function() {alert('fin')}
		    }
		  )
	  ];
	  $.stage.start(stages, 2000, [], null);
	</script>
	<div id="a">Hello</div>
	<div id="b">World</div>

An invisible element will be set to visible before any animation is run.
