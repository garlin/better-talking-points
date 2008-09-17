<?php
				if(isset($_POST['submit'])) {
				
					// ENTER YOUR EMAIL ADDRESS BELOW //
					$to = "YOUR EMAIL ADDRESS HERE";
					$subject = "Message from CompanyName site";
					$name_field = $_POST['name'];
					$email_field = $_POST['email'];
					$website_field = $_POST['website'];
					$message = $_POST['message'];
					 
					$body = "From\n$name_field\n\n\n E-Mail\n$email_field\n\n\n Website\n$website_field\n\n\n Message\n\n$message";
					 
					echo "<html><head><link rel=stylesheet media=screen href=./style.css><script src=./jquery.js type=text/javascript charset=utf-8></script></head>
					<body>
						<div id=contactback style=display:block;><div id=contacttop style=text-align:center;>
							<br><br><br><br><br><br><br><br><br>Your message has been sent successfully, <a href=./index.html>click here</a> to go back
						</div></div>
					</body></html>";
					mail($to, $subject, $body);
				
				} else { }
				?>