<?php

$phone = $_POST['phone'];
$address = $_POST['address'];

if (!empty($phone) && !empty($address)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbpassword = "";
    $dbname = "orderdetails";

    $conn = new mysqli($host, $dbUsername, $dbpassword, $dbname);
    if (mysqli_connect_error()) {
        die('Connect Error(' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    } else {
        $SELECT = "SELECT phone from orderdetails Where phone = ? Limit 1";
        $INSERT = "INSERT into orderdetails (phone, address) values(?, ?)";

        // Prepared statement
        $stmt = $conn->prepare($SELECT);
        if ($stmt) {
            $stmt->bind_param("s", $phone);
            $stmt->execute();
            $stmt->bind_result($phone);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($INSERT);
                if ($stmt) {
                    $stmt->bind_param("ss", $phone, $address);
                    $stmt->execute();
                    echo "Your details were saved successfully";
                } else {
                    echo "Error: " . $conn->error;
                }
            } else {
                echo "Your phone number is already in the DB";
            }
            $stmt->close();
        } else {
            echo "Error: " . $conn->error;
        }
        $conn->close();
    }
} else {
    echo "All fields are required";
    die();
}
