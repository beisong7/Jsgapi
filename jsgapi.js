function Jsgapi(options){
    let settings = {
        mainurl : "",
        next_url : "",
        root : "",
        domroot : "",
        ignition : "",
        next_btn : "",
        close_btn : "",
        pick_type : "",
        imgAnchor : "",
        init : ()=>{
            console.log('script is initialised')
            $(document).on('click', '.'+settings.close_btn, function(){$('.'+settings.domroot).children().remove();});

            $(document).on('click', '.'+settings.ignition, function(){
                console.log('attempting');
                settings.pulldata(settings.mainurl, $('.'+settings.domroot));
            });

            $(document).on('click', '.'+settings.next_btn, function(){
                settings.updatedata(settings.next_url)
            });

        },
        pulldata: (url, anchor)=>{
            $.getJSON(url)
                .done( function(resp){
                    console.log(resp);
                    if(resp.data){
//                    console.log('call has data')
                        anchor.append(settings.gui())

                        //append data
                        $.each(resp.data, function(a,b){
                            $('.'+settings.imgAnchor).append(settings.pass(b))
                        });

                        settings.next_url = resp.next_page_url;

                    }else{
                        console.log('Error')
                    }


                }).fail(function(){
                console.log('Oooops, unable to reach destination.');
            });
        },
        updatedata: (url)=>{
            $.getJSON(url)
                .done( function(resp){
                    console.log(resp);
                    if(resp.data){
//                    console.log('call has data')
                        //append data
                        $.each(resp.data, function(a,b){
                            $('.'+settings.imgAnchor).append(settings.pass(b))
                        });

                        settings.next_url = resp.next_page_url;

                    }else{
                        console.log('Error')
                    }


                }).fail(function(){
                console.log('Oooops, unable to reach destination.');
            });
        }, 
        gui: ()=>{
            return "<div class='overlay overlayPad'><div class='container'><div class='panel panel-info'><div class='pan-head'>Gallery <span class='close close_gui float-right'>x</span></div><div class='panel-body' style='height: 65vh'><div class='row loadImages'></div></div><div class='panel-footer'><button class='load_more_img btn btn-default'>Load More</button></div></div></div></div>";
        },
        pass: (item)=>{
            return "<div class=' col-md-3 col-xl-4 col-sm-6 col-xs-6 p-4 no-padding no-margin shadow-l1'><div class='box no-margin no-padding img-center'><div class='contents'><input type='checkbox' class='selector flex-tl' value='116'><img class='img-sit' src='" + settings.root+"uploads/"+item.url + "' alt=''></div></div></div>";
        }

}
    settings.mainurl = options.root+options.mainurl;
    settings.next_url = options.next_url;
    settings.root = options.root;
    settings.domroot = options.domroot;
    settings.ignition = options.ignition;
    settings.next_btn = options.next_btn;
    settings.close_btn = options.close_btn;
    settings.pick_type = options.pick_type;
    settings.imgAnchor = options.imgAnchor;

    settings.init();

}


