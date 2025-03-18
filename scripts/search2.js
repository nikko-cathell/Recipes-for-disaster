function search() {
    var input, filter, ul, li, a, div, div, h3, txtValue;
    input = document.getElementById('find2');
    filter = input.value.toUpperCase();
    ul = document.getElementById("lunch-menu");
    li = ul.getElementsByTagName('div');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }