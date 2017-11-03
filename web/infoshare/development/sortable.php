<?php

class sortable{

  function main(){
           $this->getMenu();
  }

  function getMenu(){
    $con = $this->connect();
    $result = mysql_query($con,"select ")

  }

  function connect(){
    return mysqli_connect("localhost","acenteno", "", "db_webqtl");

  }
}

$menu = new sortable();
$menu->main();

 ?>
