<?php 

$email = $_POST['email']; 

if(!empty($email)){
     $host = "localhost"; 
     $dbUsername = "root";
     $dbpassword = "";
     $dbname = "test";
    
     $conn = new mysqli($host, $dbUsername, $dbpassword, $dbname); 
     if (mysqli_connect_error()){
         die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error()); 
        
        }else{
             $SELECT = "SELECT email from team Where email = ? Limit 1"; 
             $INSERT = "INSERT into team (email) values('$email')"; 
             
             //prepared statement 
             $stmt = $conn->prepare($SELECT);
             $stmt->bind_param("s", $email); 
             $stmt->execute(); 
             $stmt->bind_result($email); 
             $stmt->store_result(); 
             $rnum = $stmt->num_rows;
             
             
             if($rnum == 0){ 
                $stmt->close(); 
                $stmt = $conn->prepare($INSERT); 
                $stmt->execute(); 
                echo "Your email sended successfully"; 
            }else{
                echo "Your email is already in the DB"; 
            } 
            $stmt->close(); 
            $conn->close(); 
        } 
    }else{
         echo "All field are required"; 
         die(); 
        }
        ?>