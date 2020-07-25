var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("visits").innerHTML = xhttp.responseText;
    }
};
xhttp.open("Get", "https://ctws1w6f5j.execute-api.us-east-1.amazonaws.com/Prod/counter/", true)
xhttp.send();