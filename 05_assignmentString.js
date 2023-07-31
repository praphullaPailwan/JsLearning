function string_assignment() {
    var given_string = "     Hey you are doing good,  keep it up       ";
    console.log(`1. Given String: ${given_string}`);

   var length_str =  given_string.length;
   console.log(`2. Length : ${length_str}`);

   var trimmed_str = given_string.trim(); // Please use this string going forward
   console.log(`3. Trimmed String : ${trimmed_str}`);

    var extra_spaces = length_str - trimmed_str.length;
    console.log(`4. Extra spaces removed count : ${extra_spaces}`);

    var pos_of_last_char =  trimmed_str.length - 1;
    split_string =  trimmed_str.split(" ");
    var words_count = split_string.length;
    console.log(`6. Words count : ${words_count}`);

     var index_of = trimmed_str.indexOf("good");
     console.log(`7.Index of good : ${index_of}`);

     var substr = trimmed_str.substring(22);
     console.log(`8. Substring: ${substr}`);

     var ends_with = trimmed_str.endsWith("up");
     console.log(`9. Ends with: ${ends_with}`);


     var starts_with = trimmed_str.startsWith("Hey");
     console.log(`10. Start with: ${starts_with}`);

     var last_index_of = trimmed_str.lastIndexOf("e");
     console.log(`11. Last index of: ${last_index_of}`);

}
string_assignment();
