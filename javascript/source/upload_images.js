let folder = "assets/";
let imagesArray = [];


$(document ).ready(() => {
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    switch (val) {
                        case 'arrow-blue-left.png':
                            $(".left").append('<img class="blue-left" src="'+folder+'arrow-blue-left.png"/>');
                            break;
                        case 'arrow-blue-right.png':
                            $(".right").append('<img class="blue-right" src="'+folder+'arrow-blue-right.png"/>');
                            break;
                        case 'arrow-gray-left.png':
                            $(".left").append('<img class="gray-left" src="'+folder+'arrow-gray-left.png"/>')
                            break;
                        case 'arrow-gray-right.png':
                            $(".right").append('<img class="gray-right" src="'+folder+'arrow-gray-right.png"/>');
                            break;
                        default:
                            imagesArray.push(val);
                    }
                }
            });
            for (let i = 0; i < imagesArray.length; i++) {
                if (i % 2 == 0) {
                    $(".image-wrapper1").append("<div class='col'><img src ='" + folder + imagesArray[i] + "'/></div>")
                } else {
                    $(".image-wrapper2").append("<div class='col'><img src ='" + folder + imagesArray[i] + "'/></div>")
                }
            }
        }

    });
});
