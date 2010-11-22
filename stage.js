window.console = window.console || {log:function(){;}, info:function(){;}};
/* stage plugin */
(function($) {
/*
map: map of CSS changes
speed: duration of animation
wait: time to stay on this stage before callback
callback: callback function to trigger next stage
*/
		function stage(anim) {
				var fun = function() {
						stage_id = $.stage.id;
						var map = anim.map,
							callback = anim.callback,
							speed = anim.speed || 'slow',
							wait = anim.wait || 0;
						if (!map) {
								if(callback && typeof(callback) === 'function') {
										callback(speed);
								}
						} else {
								$.each(map, function(key, value) {
										var j = $(key);
										if( j.is(':hidden') ) j.show();
										j.animate(value, speed || 0, callback);
								}); }
						if( stage_id < $.stage.stages.length ) {
								window.setTimeout(function() { $.stage.stages[stage_id](); }, wait);
						}
						$.stage.id++;
				};
				return fun;
		}
		function setStage(stages, delay, controller, skip, speed) {
				if (!stages) return;
				$.stage.stages = stages;
				$.stage.id = 0;
				/* fire daisy chain */

				if (skip) {
						/* set global skip so we can make animations 0ms */
						$.stageSkip = skip;
						$("#overlay").fadeIn(200);
				}
				if (delay) {
						window.setTimeout(function() {stages[0](0, stages); }, delay);
				} else {
						stages[0](0, stages);
				}


		}

		function horizontalCenter(id, anchorSide, offset) {
				offset = offset || 0;
				var w_width = window.innerWidth;
				return $(this).css(anchorSide, ( (w_width / 2) - ( $(this).width() / 2 ) + offset ) + 'px');
		}
		$.stage = {};
		$.stage.create = stage;
		$.stage.start = setStage;
		$.stage.horizontalCenter = horizontalCenter;
})(jQuery);
