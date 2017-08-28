/**
 * Created by BALASUBRAMANIAM on 28/08/2017.
 */
$(document).ready(function()
{
    //alert("testing....");
    $("#submit").click(function()
    {
      //alert("form submitted");
      user=$("#userName").val();
        pwd=$("#password").val();
        alert(user+pwd);
        data={
            "userName":user,
            "password":pwd
        }
        $.post("http://localhost:3000/login",data, function(data){
            if(data==='done')
            {
                console.log("login success");
            }
            console.log(data);
        });

    })
})