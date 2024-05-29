<?php
  include 'connect.php';

if ($_SERVER["REQUEST_METHOD"]=== "POST") {
  # code...
  $semail = $_POST['semail'] ?? '';
    $pass= $_POST['spass'];
    $matric= $_POST['smatric'];
   //select the word according to name
   $out= "select * from lasu where semail = '$semail'";
   $result = mysqli_query($connect, $out);
   if(mysqli_num_rows($result) > 0) {
      echo "Email already exists";
    } else {
        echo "inseted now";
         $sql = "INSERT INTO lasu( smatric, semail, spass) VALUES ('$matric','$semail','$pass')";
         mysqli_query($connect, $sql);
      
       }
       mysqli_close($connect);
}
 
?>