<?php
   // This file is the same as example 6-7, but includes mysqlclean() and shellclean() 

       //$mysqli = mysqli_connect("localhost", "acenteno", "kahuna", "db_webqtl");
       $con = mysqli_connect("localhost", "acenteno", "kahuna", "db_webqtl");
       $conn = mysql_connect("localhost", "acenteno", "kahuna");
        mysql_select_db("db_webqtl");
        
        mysql_connect("localhost", "acenteno", "kahuna") or die("could not connect to the database");

  /* function showerror()
   {
      die("Error " . mysql_errno() . " : " . mysql_error());
   }

   function mysqlclean($array, $index, $maxlength, $connection)
   {
     if (isset($array["{$index}"]))
     {
        $input = substr($array["{$index}"], 0, $maxlength);
        $input = mysql_real_escape_string($input, $connection);
        return ($input);
     }
     return NULL;
   }

   function shellclean($array, $index, $maxlength)
   {
     if (isset($array["{$index}"]))
     {
       $input = substr($array["{$index}"], 0, $maxlength);
       $input = EscapeShellCmd($input);
       return ($input);
     }
     return NULL;
   }*/
