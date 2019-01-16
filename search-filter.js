function SearchName() {
  var input, filter, container, li, a, i, txtValue;
  input = document.getElementById('search_client');
  filter = input.value.toUpperCase();
  container = document.getElementById("return_client_list");
  obj_filtered = container.getElementsByTagName('tr');

  for (i = 0; i < obj_filtered.length; i++) {
    var line = obj_filtered[i].getElementsByClassName("searching_client");
    var new_line = ''
    for (var x = 0; x < line.length; x++) {
      new_line = new_line +' '+ line[x].textContent
    }
    var txtValue = new_line
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      obj_filtered[i].style.display = "";
    } else {
      obj_filtered[i].style.display = "none";
    }
  }
}
