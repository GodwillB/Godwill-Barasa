<?php require_once "nav.php"; ?>

<?php
$i = 1;
while($i <= 3){
    $i++;
    echo "The number is " . $i . "<br>";
}
?>

>
<?php

require 'dbh.inc.php';

$sql = "SELECT * FROM item";
$stmt = mysqli_stmt_init($conn);

	if (!mysqli_stmt_prepare($stmt,$sql)) {
		echo "error";
	}	else{
		mysqli_stmt_execute($stmt);
		$result = $stmt->get_result();
			if ($result->num_rows > 0) {
				print '<div class="row">';
				while ($row = $result->fetch_assoc()) {
						print'	<div class="col-4">';
						print'				<div class="card">';
						print'					<img height="250" width="250" class="card-img-top" src="data:image/jpeg;base64,'.base64_encode( $row['itemimage'] ).'">';
						print'						<div class="card-body">';
						print'							<h5 class="card-title">'.$row["itemname"].'</h5>';
						print'							<p class="card-text">Price : '.$row["itemprice"].'</p>';
						print'						</div>';
						print'				</div>';
						print'			</div>';
				}	
			}	else {
				print' </div>';
				}

<h1> Godwill </h1>
<?php require_once "footer.php"; ?>
