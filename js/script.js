$(function(){
	$('#tabs').tabs().css({
		'min-height': '900px'
	});
	$('#my-pictures').tabs();
	$('#my-music').tabs();
	$('#my-videos').tabs();
	$('.accordion').accordion({
		heightStyle:"content"
	});
	$('.dw-icon').tooltipster({
		theme:'my-theme',
		position:'bottom-right',
		maxWidth:190,
		arrow:false,
		offsetY:-25
	});
	$('.fancybox').fancybox({
		helpers: {
			title: {
				type:'inside',
				position:'bottom'
			}
		},
		nextEffect:'fade',
		prevEffect:'fade'
	});
	$('.picture-gallery').galleryView({
		filmstrip_position:'top',
		show_panel_nav:false,
		panel_width:850,
		panel_height:550,
		frame_width:90,
		frame_height:50
	});
	
	grid_play_track=function() {
		$('#my-music-grid #player audio').empty().append('<source src="'+$('#my-music-grid .current_track').data('path')+'" type="audio/mpeg" />');
		$('#my-music-grid #current-track-thumb').attr('src',$('#my-music-grid .current_track').attr('src'));
		$('#my-music-grid #current-track-info').empty().append('Track:'+$('#my-music-grid .current_track').attr('title')+'<br />Artist:'+ $('#my-music-grid .current_track').data('artist')+'<br />Gener:'+$('#my-music-grid .current_track').data('gener')+'<br />Size:'+$('.current_track').data('size')+'<br />Length:'+$('#my-music-grid .current_track').data('length')+'<br />Rating:<span class="rating">'+$('#my-music-grid .current_track').data('rating')+'</span>');
	};
	$('#my-music-grid #tracks img').click(function(){
		$(this).siblings().removeClass('current_track');
		$(this).addClass('current_track');
		grid_play_track();
	});
	grid_play_track();

	$('#my-music-list .tracks').click(function(){
		$(this).siblings().removeClass('current_track');
		$(this).siblings().children().css({'border-top':'0px','border-bottom':'0px'});
		$(this).children().css({'border-top':'1px solid #ffffff','border-bottom':'1px solid #ffffff'});
		$('#my-music-list audio').empty().append('<source src="'+$(this).data('path')+'" type="audio/mpeg" />');
	});

	gallery_play_track=function() {
		$('#my-music-gallery audio').empty().append('<source src="'+$('#my-music-gallery .flip-current img').data('path')+'" type="audio/mpeg" />');
		$('#my-music-gallery .current-track-info').empty().append('Track:'+$('#my-music-gallery .flip-current img').attr('title')+'<br />Artist:'+ $('#my-music-gallery .flip-current img').data('artist')+'<br />Gener:'+$('#my-music-gallery .flip-current img').data('gener')+'<br />Size:'+$('#my-music-gallery .flip-current img').data('size')+'<br />Length:'+$('#my-music-gallery .flip-current img').data('length')+'<br />Rating:<span class="rating">'+$('#my-music-gallery .flip-current img').data('rating')+'</span>');
	};
	
	$('.flipster').flipster({
		style:'carousel',
		onItemSwitch:function(){
			gallery_play_track();
		}
	});

	grid_play_video=function() {
		$('#my-videos-grid #player video').empty().append('<source src="'+$('#my-videos-grid .current-video').data('path')+'" type="video/mp4" />');
		// $('#current-track-source').attr('src',$('.current_track').data('path'));
		$('#my-videos-grid #current-video-thumb').attr('src',$('#my-videos-grid .current-video').attr('src'));
		$('#my-videos-grid #current-video-info').empty().append('Track:'+$('#my-videos-grid .current-video').attr('title')+'<br />Artist:'+ $('#my-videos-grid .current-video').data('artist')+'<br />Gener:'+$('#my-videos-grid .current-video').data('gener')+'<br />Size:'+$('.current-video').data('size')+'<br />Length:'+$('#my-videos-grid .current-video').data('length')+'<br />Rating:<span class="rating">'+$('#my-videos-grid .current-video').data('rating')+'</span>');
	};
	$('#my-videos-grid #videos img').click(function(){
		$(this).siblings().removeClass('current-video');
		$(this).addClass('current-video');
		grid_play_video();
	});
	grid_play_video();

	gallery_play_video=function() {
		$('#my-videos-gallery video').empty().append('<source src="'+$('#my-videos-gallery .flip-current img').data('path')+'" type="video/mp4" />');
		$('#my-videos-gallery .current-track-info').empty().append('Track:'+$('#my-videos-gallery .flip-current img').attr('title')+'<br />Artist:'+ $('#my-videos-gallery .flip-current img').data('artist')+'<br />Gener:'+$('#my-videos-gallery .flip-current img').data('gener')+'<br />Size:'+$('#my-videos-gallery .flip-current img').data('size')+'<br />Length:'+$('#my-videos-gallery .flip-current img').data('length')+'<br />Rating:<span class="rating">'+$('#my-videos-gallery .flip-current img').data('rating')+'</span>');
	};

	$('.flipster-videos').flipster({
		style:'carousel',
		onItemSwitch:function(){
			gallery_play_video();
		}
	});
});