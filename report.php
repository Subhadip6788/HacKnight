<?php 
function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $age = $email = $gender = $weight = $height = $activity = $nonveg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["user_name"]);
    $age = test_input($_POST["age"]);
    $gender = test_input($_POST["gender"]);
    $weight = test_input($_POST["weight"]);
    $height = test_input($_POST["height"]);
    $activity = test_input($_POST["activity"]);
    $nonveg = test_input($_POST["nonveg"]);
    $bmi = $weight/($height*$height);
    echo "<h2>Your Input:</h2>";
  echo $name;
  echo "<br>";
}

?>
