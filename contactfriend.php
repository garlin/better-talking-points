<?php
				if(isset($_POST['submit'])) {
				
					$to =  $_POST['friendEmail'];
					$subject = "Check this out";
					$name_field = $_POST['name'];
					$friend_name_field = $_POST['friendName'];
					$email_field = $_POST['email'];
					$message = $_POST['message'];
					 
					$body = "Hey $friend_name_field, check this out: <a href=http://www.bettertalkingpoints.com/>Better Talking Points</a> From\n$name_field\n\nMessage\n\n$message";
					 
					echo "<html><head><link rel=stylesheet media=screen href=./style.css><script src=./jquery.js type=text/javascript charset=utf-8></script></head>
					<body>
						<div id=contactback style=display:block;><div id=contacttop style=text-align:center;>
							<br><br><br><br><br><br><br><br><br>Your message has been sent successfully, <a href=./index.html>click here</a> to go back
						</div></div>
					</body></html>";
					mail($to, $subject, $body);
				
				} else { }
				?>