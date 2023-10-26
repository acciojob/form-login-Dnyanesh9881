function getFormvalue() {
	let form=document.querySelector("form");
	let str=form["fname"].value+" "+form["lname"].value
    alert(str);

}
