<!doctype html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="description" content="List computer science and information technology jobs">
      <meta name="keywords" content="ICT jobs, CS jobs">
      <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no">
      <title>List Jobs</title>
      <link rel="stylesheet" href="jQuery/jquery.mobile-1.3.2.min.css" />

      <!-- load JavaScript libraries -->
      <script src="jQuery/jquery-1.10.2.min.js"></script>
      <script src="jQuery/jquery.mobile-1.3.2.min.js"></script>
   </head>

   <body>

      <!-- The List Jobs Page -->
      <section data-role="page" data-theme="b" id="listJobs">

         <!-- Header -->
         <header data-role="header" data-position="fixed">
            <h2>List Jobs</h2>
            <a data-role="button" data-rel="back">Back</a>
         </header>

         <!-- Content -->
         <div data-role="content">
		 <table data-role="content">
		 <tr>
		 <th>Job ID</th>
		 <th>Job Title</th>
		 <th>Job Description</th>
		 </tr>
		<?php
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "jobs";
		// Create connection
		$conn = new mysqli($servername, $username, $password);
		// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}
			
			$val = $conn->select_db ($dbname );
			$sql = "SELECT * FROM jobinformation";
			$result = $conn->query($sql);
			
			if ($result->num_rows > 0) {
		 // output data of each row
				while($row = $result->fetch_assoc()) {
					 echo "<tr>";
					 echo "<td>" . $row["JobID"] . "</td>";
					 echo "<td>" . $row["JobTitle"] . "</td>";
					 echo "<td>" . $row["JobDescription"] . "</td>";
					 echo "</tr>";
					 }
		} else {
				echo "<tr><td>0 results</td></tr>";
			}
			
			$conn->close();

		?>
		</table>
		</div>
		 </section>
</body>
</html>
