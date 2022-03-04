$(function(){
    $("#mysearch1").autocomplete({
        source: function(req,res){
            $.ajax({
                url:"autocomplete/",
                dataType:"jsonp",
                type:"GET",
                data:req,
                success: function(data){
                    res(data)

                },
                error:function(err){
                    console.log(err.status)
                }
            });
        },
        minLength:1,
        select: function(event,ui){
            if(ui.item){
                $('#mysearch1').text(ui.item.label);
            }
        }
    })
})