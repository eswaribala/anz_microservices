/**
 * Created by BALASUBRAMANIAM on 28/08/2017.
 */
$(document).ready(function()
{
    console.log("testing....");
    $("#submit").click(function(e)
    {
        e.preventDefault();
        //alert("form submitted");
        id=$("#customerId").val();
        name=$("#name").val();
        addr=$("#address").val();
        mno=$("#mobileNo").val();

        data={
            "customerId":id,
            "name":name,
            "address":addr,
            "mobileNo":mno
        }
        //ajax call
        $.post("http://localhost:3000/reg",data, function(result){
            /*
             if(result==='done')
             {
             console.log("login success");
             }
             */
            console.log(result);
        });

    })
})