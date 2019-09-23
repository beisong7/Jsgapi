// jquery ready start
let url = "http://127.0.0.1:1991/api/images/gallery/fetch";
let next_url = null;
let temproot = "http://127.0.0.1:1991/";

$(document).ready(function() {
        let anchor = $(".app");
        
        // jQuery code
        $(document).on('click', '.close_gui', function(){
            anchor.children().remove();
        });
            
        $(document).on('click', '.pull_images', function(){
            console.log('attempting');
            
            pulldata(url, anchor)
            
            
            
        });
        
        $(document).on('click', '.load_more_img', function(){
            updatedata(next_url, anchor)
        });
        
        
        
    });
    // jquery end
function pass2(item){
    return "<div class='col-md-3 col-xl-4 col-sm-6 col-xs-6 p-4'><img src='" + temproot+"uploads/"+item.url + "' alt='' class='fitted'></div>";
}

function setGUI(){
    return "<div class='overlay overlayPad'><div class='container'><div class='panel panel-info'><div class='pan-head'>Gallery <span class='close close_gui float-right'>x</span></div><div class='panel-body' style='height: 65vh'><div class='row loadImages'></div></div><div class='panel-footer'><button class='load_more_img btn btn-default'>Load More</button></div></div></div></div>";
}

function pass(item){
    return "<div class=' col-md-3 col-xl-4 col-sm-6 col-xs-6 p-4 no-padding no-margin shadow-l1'><div class='box no-margin no-padding img-center'><div class='contents'><input type='checkbox' class='selector flex-tl' value='116'><img class='img-sit' src='" + temproot+"uploads/"+item.url + "' alt=''></div></div></div>"
}

function pulldata(url, anchor){
    $.getJSON(url)
                .done( function(resp){

                console.log(resp);
                
                if(resp.data){
//                    console.log('call has data')
                    anchor.append(setGUI())
                    
                    //append data
                    let img_anchor = $('.loadImages');
                    $.each(resp.data, function(a,b){
                        img_anchor.append(pass(b))
                    });
                    
                    next_url = resp.next_page_url;
                    
                }else{
                    console.log('Error')
                }
                

                }).fail(function(){
                    console.log('Oooops, unable to reach destination.');
                });
}

function updatedata(url, anchor){
     $.getJSON(url)
                .done( function(resp){

                console.log(resp);
                
                if(resp.data){                    
                    //append data
                    let img_anchor = $('.loadImages');
                    $.each(resp.data, function(a,b){
                        img_anchor.append(pass(b))
                    });
                    
                    next_url = resp.next_page_url;
                    
                    if(next_url.isNaN){
                        $('.load_more_img').prop('disable', true)
                    }
                    
                }else{
                    console.log('Error')
                }
                

                }).fail(function(){
                    console.log('Oooops, unable to reach destination.');
                });
}

