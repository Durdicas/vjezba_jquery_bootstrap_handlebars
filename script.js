const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);

const context = { title: "My New Post", body: "This is my first post!", imgURL:"https://robohash.org/matej" };
const html = template(context);

//console.log(html);
//document.getElementsByName("body")[0].innerHTML = html;
document.querySelector("body").innerHTML = html
console.log(html);

// MENI OVO NE RADI KAO MATEJU

// Stranica: robohash.org, dosta zanimljiv API