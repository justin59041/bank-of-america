<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the message from the form
  $message = $_POST["message"];

  // Save the message to a file
  $file = fopen("messages.txt", "a");
  fwrite($file, $message . "\n");
  fclose($file);
}

// Read the messages from the file
$messages = file("messages.txt");
?>

<!-- Create a form with a text box and a send button -->
<form method="post">
  <input type="text" name="message" placeholder="Type a message...">
  <button type="submit">Send</button>
</form>

<!-- Display the messages -->
<h2>Messages:</h2>
<?php foreach ($messages as $message) { ?>
  <p><?php echo $message; ?></p>
<?php } ?>