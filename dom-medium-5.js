document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");
    var fruitList = document.getElementById("fruitList");

    searchInput.addEventListener("input", function() {
        var searchTerm = searchInput.value.toLowerCase();
        var fruits = fruitList.getElementsByTagName("li");

        for (var i = 0; i < fruits.length; i++) {
            var fruitName = fruits[i].innerText.toLowerCase();
            if (fruitName.includes(searchTerm)) {
                fruits[i].style.display = "block";
            } else {
                fruits[i].style.display = "none";
            }
        }
    });
});