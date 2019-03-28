/**
 * 1.2. Extracting a List from a String
 */

 /**
  * This is a list of items: cherries, limes, oranges, apples. -> ['cherries','limes','oranges','apples']
  */

  var sentence = "This is a list of items.:cherries, limes, oranges, apples.";
  var start = sentence.indexOf(":");
  var end = sentence.indexOf(".", start+1);
  var listStr = sentence.substring(start+1, end);
  var fruits = listStr.split(", ");

  Objects.

  console.log(fruits);

  console.log("This is a list of items.:cherries, limes, oranges, apples.".substring(start+1, end).split(", "));