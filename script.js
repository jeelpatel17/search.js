let input = document.querySelector("#input");

let fetchData = async () => {
  let req = await fetch("https://api.jsonbin.io/b/61feb2c469b72261be513619", {
    // mode: "cors", // no-cors, *cors, same-origin
    // credentials: "same-origin", // include, *same-origin, omit
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });

  let res = await req.json();
  names = res.map((e) => {
    document.getElementById("users").innerHTML += `
    <li class="userLi"><a class="user" href="${e.domains[0]}">${e.name}</a></li>
    `;
  });
};

fetchData();

input.addEventListener("keyup", () => {
  let filterValue = input.value.toUpperCase();
  let ul = document.getElementById("users");
  let li = ul.querySelectorAll(".user");
  li.forEach((elem) => {
    let userName = elem;
    if (userName.innerText.toUpperCase().indexOf(filterValue) > -1) {
      userName.parentElement.style.display = "block";
    } else {
      userName.parentElement.style.display = "none";
    }
  });
});
