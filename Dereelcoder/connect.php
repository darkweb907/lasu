<?php
$connect= mysqli_connect("localhost" ,"barryopeyemi" , "barryfrosh123@" ,"LASU-SITE");
if($connect){
    //echo "thanks for connecting";
}else{
   echo "failed to connect" . mysqli_connect_error() ;
}
?>