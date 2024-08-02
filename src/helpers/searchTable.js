

export function filterTable3Columns(inputValue, myTyble) {
    let filter, table, tr, i;
    filter = inputValue.toUpperCase();
    table = document.getElementById(myTyble)
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

      let td_id = tr[i].getElementsByTagName("td")[0];
      let td_nom = tr[i].getElementsByTagName("td")[1];
      let td_3 = tr[i].getElementsByTagName("td")[2];
      let td_4 = tr[i].getElementsByTagName("td")[3];



      if (td_id || td_nom || td_3 || td_4) {
        if (
            td_id.innerText.toUpperCase().indexOf(filter) > -1 || 
            td_nom.innerText.toUpperCase().indexOf(filter) > -1 || 
            td_3.innerText.toUpperCase().indexOf(filter) > -1 || 
            td_3.innerText.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


export function filterTable10Columns(inputValue, myTyble) {
    let filter, table, tr, i;
    filter = inputValue.toUpperCase();
    table = document.getElementById(myTyble)
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {

      let td_id = tr[i].getElementsByTagName("td")[0];
      let td_nom = tr[i].getElementsByTagName("td")[1];
      let td_3 = tr[i].getElementsByTagName("td")[2];
      let td_4 = tr[i].getElementsByTagName("td")[3];
      let td_5 = tr[i].getElementsByTagName("td")[4];
      let td_6 = tr[i].getElementsByTagName("td")[5];
      let td_7 = tr[i].getElementsByTagName("td")[6];
      let td_8 = tr[i].getElementsByTagName("td")[7];


      if (td_id || td_nom || td_3 || td_4 || td_5 || td_6 || td_7 || td_8) {
        if (
            td_id.innerText.toUpperCase().indexOf(filter) > -1 || 
            td_nom.innerText.toUpperCase().indexOf(filter) > -1 || 
            td_3.innerText.toUpperCase().indexOf(filter) > -1 || 
            td_4.innerText.toUpperCase().indexOf(filter) > -1 ||
            td_5.innerText.toUpperCase().indexOf(filter) > -1 ||
            td_6.innerText.toUpperCase().indexOf(filter) > -1 ||
            td_8.innerText.toUpperCase().indexOf(filter) > -1 
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
