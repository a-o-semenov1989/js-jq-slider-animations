$(function() {
    
    new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });
    
	new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 2000
    });
});

function Slider(obj) {
    
	this.images = $(obj.images);	
	this.auto = obj.auto;
	this.btnPrev = $(obj.btnPrev);
	this.btnNext = $(obj.btnNext);
    this.rate = obj.rate || 1000;
	
	var i = 0;
    
    var slider = this;
	sliderWidth = slider.images.eq(0).width();
	sliderHeight = slider.images.eq(0).height();
	
    var isRun = false;
	
	this.prev = function () {
        
        if(isRun){
            return;
        }
        
        isRun = true;
        
		slider.images.eq(i)
                .css({
                    left: 0,
                    top: 0,
                    right: 'auto',
                    bottom: 'auto'
                })
                .animate({
                    width: 0,
                }, 500);
		
		i--;
		
		if (i < 0) {
			i = slider.images.length - 1;
		}
		
		slider.images.eq(i)
                .css({
                    left: 'auto',
                    top: 'auto',
                    right: 0,
                    bottom: 0
                })
                .animate({
                    width: '100%'
                }, 500, function(){
                    isRun = false;
                });
        
	}

    this.next = function () {
        
        if(isRun){
            return;
        }
        
        isRun = true;
        
        slider.images.eq(i)
                .css({
                    left: 0,
                    top: 0,
                    right: 'auto',
                    bottom: 'auto'
                })
                .animate({
                    width: 0,
                }, 500);
        
        i--;
        
        if (i < 0) {
            i = slider.images.length - 1;
        }
        
        slider.images.eq(i)
                .css({
                    left: 'auto',
                    top: 'auto',
                    right: 0,
                    bottom: 0
                })
                .animate({
                    width: '100%'
                }, 500, function(){
                    isRun = false;
                });
        
    }

	
    $(slider.btnPrev).on('click', function(){ console.log(1); slider.prev();});
    $(slider.btnNext).on('click', function(){ console.log(2); slider.next();});

};



