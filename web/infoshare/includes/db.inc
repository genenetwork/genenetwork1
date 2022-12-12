<?php
   // This file is the same as example 6-7, but includes mysqlclean() and shellclean() 

       /* see: https://stackoverflow.com/a/37877644/1069083 */
       include_once('fix_mysql.inc.php');

       $conn = mysql_connect("localhost", "webqtlout", "webqtlout");
       mysql_select_db("db_webqtl");

       $con = mysqli_connect("localhost", "webqtlout", "webqtlout", "db_webqtl");
        
       //mysql_connect("localhost", "webqtlout", "webqtlout") or die("could not connect to the database");

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
