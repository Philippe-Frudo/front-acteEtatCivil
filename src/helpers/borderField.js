
export function errorBorder(nameClass) {
    document.querySelector(nameClass).classList.add("error-border");
}

export function successBorder(nameClass) {
    document.querySelector(nameClass).classList.remove("error-border");
}

export function messageValidator(nameClass, msg = '') {
    if (msg) {
        document.querySelector(nameClass).parentElement.querySelector(".msg-error").innerHTML = msg;   
    }else {
        document.querySelector(nameClass).parentElement.querySelector(".msg-error").innerHTML = "";      
    }
}

export function messageSubmit(status, nameClass, msg) {
    document.querySelector(nameClass).innerHTML = msg;   
    if (status) {   
        document.querySelector(nameClass).parentElement.style.backgroundColor = "rgb(72, 201, 176, 0.8)";      
    }else {
        document.querySelector(nameClass).parentElement.style.backgroundColor = "red";      
    }
}


// ===============LISTE ==================
export function showList(nameClass) {
    console.log("showList");
    document.querySelector(nameClass).classList.add("showList");
}


export const hiddenList = (nameClass) => {
    document.querySelector(nameClass).classList.remove("showList");
}


export function searchAddress(idName, list) {
    // Declare variables
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById(idName);
    filter = input.value.toUpperCase();
    ul = document.getElementById(list);
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      p = li[i].getElementsByTagName("p")[0];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }