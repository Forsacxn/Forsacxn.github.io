$(document).ready(function()
{
    $("#bedgif").hover(
        function()
        {
            $(this).attr("src", "assets/bed-table.gif");
        },
        function()
        {
            $(this).attr("src", "assets/bed-table.jpg");
        }                         
    );                  
});
