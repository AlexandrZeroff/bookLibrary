var users = [
  {login:"Admin", userpassword:"9797", firstname:"Alexandr", lastname:"Zeroff", birthdate:"27.06.2002", isAutorized:false,
     books:[{name:"Гарри Поттер", autor:"Дж.Роулинг", year:"1989", }, {name:"Горе от ума", autor:"А.Грибоедов", year:"1828", }],
  },
  {login:"John", userpassword:"9797", firstname:"Alex", lastname:"Smith", birthdate:"27.06.2001", isAutorized:false,
     books:[{name:"Идиот", autor:"Ф.Достоевский",year:"1868", }, {name:"Я, робот", autor:"Азимов", year:"1976", }],
   },
];
var books = [
    {name:"Капитанская дочка", autor:"А.С.Пушкин", year:"1967", },
	{name:"Гарри Поттер", autor:"Дж.Роулинг", year:"2006", },
	{name:"Чорна рада", autor:"П.Куліш", year:"1932", },
	{name:"Мастер и Маргарита", autor:"М.Булгаков", year:"1929-1940", },
	{name:"Анна Каренина", autor:"Л.Толстой", year:"1873-1877", },
	{name:"Три Товарища", autor:"Э.М.Ремарк", year:"1936", },
	{name:"Отцы и дети", autor:"И.Тургенев", year:"1860-1861", },
	{name:"Граф Монте Кристо", autor:"А.Дюма", year:"1844-1845", },
	{name:"Палата №6", autor:"А.П.Чехов", year:"1892", },
	{name:"Тихий Дон", autor:"М.Шолохов", year:"1926-1940", },
	{name:"Робинзон Крузо", autor:"Д.Дэфо", year:"1719", },
	{name:"Три мушкетера", autor:"А.Дюма", year:"1844", },
	{name:"Собака Баскервилей", autor:"А.К.Дойль", year:"1901-1902", },
	{name:"Собор Парижской Богоматери", autor:"В.Гюго", year:"1831", },
	{name:"Солярис", autor:"С.Лем", year:"1961", },
	{name:"Маленький принц", autor:"А.С.Экзюпери", year:"1942", },
	{name:"Фауст", autor:"И.В.Гете", year:"1774-1831", },
	{name:"Трудно быть богом", autor:"Братья Стругацкие", year:"1963", },
	{name:"Мартин Иден", autor:"Дж.Лондон", year:"1909", },
	{name:"Гамлет", autor:"У.Шекспир", year:"1601", },
	{name:"Том Сойер", autor:"М.Твен", year:"1876", },
	{name:"1000 лье под водой", autor:"Ж.Верн", year:"1874", },
	{name:"Алые паруса", autor:"А.Грин", year:"1916-1922", },
	{name:"Белый клык", autor:"Дж.Лондон", year:"1906", },
	{name:"Человек-амфибия", autor:"А.Беляев", year:"1928", },
	{name:"Ромео и Джульета", autor:"У.Шекспир", year:"1591", },
	{name:"Сто лет одиночества", autor:"Г.Г.Маркес", year:"1967", },
	{name:"Два капитана", autor:"В.Каверин", year:"1938-1944", },
	{name:"Тарас Бульба", autor:"Н.Гоголь", year:"1835", },
	{name:"Ревизор", autor:"Н.Гоголь", year:"1836", },
 ];
function checkArray(){
	for(var i = 0;i<users.length;i++){
		console.log(users[i].login+" "+users[i].userpassword+" "+users[i].firstname+" "+users[i].lastname+" "+users[i].birthdate);
	}

}

function autorization(){
	var login = document.getElementById("login").value;
	var userPass = document.getElementById("password").value;
	for(var a = 0;a<users.length;a++){
		if(users[a].login==login&&users[a].userpassword==userPass){
			document.getElementById("p").innerHTML= "Signed in!";
			users[a].isAutorized=true;
			window.login=login;
//			alert(window.login);
			break;
		}else{
			document.getElementById("login").setAttribute("style", "border-color:#ff0000");
			document.getElementById("password").setAttribute("style", "border-color:#ff0000");
		}

	}
	login = document.getElementById("login");
}
function registration(){
	var account = {
		login:document.getElementById("log").value,
		userpassword:document.getElementById("pass").value,
		birthdate:document.getElementById("birthdate").value,
		firstname:document.getElementById("firstname").value,
		lastname:document.getElementById("lastname").value,
		isAutorized:true,
		};
	users.push(account);
	alert("Registered!");
	window.login = document.getElementById("log");
}

function getUserList(){
	var table = document.getElementById("users");

	 for (var b = 0;b<users.length;b++){
		 var row = document.createElement('tr');
		 row.className = "rowtable";
		 var td1 = document.createElement('td');
		 td1.innerHTML = users[b].firstname;
		 var td2 = document.createElement('td');
		 td2.innerHTML = users[b].lastname;
		 var td3 = document.createElement('td');
		 td3.innerHTML = users[b].birthdate;
		 var td4 = document.createElement('td');
		 for(var j = 0;j<users[b].books.length;j++){
			 var book = document.createElement('td');
         var br = document.createElement('br');
			 book.innerHTML = '"'+users[b].books[j].name+'"  '+users[b].books[j].autor+'  ('+users[b].books[j].year+')';
			 td4.appendChild(book);
		 }
		 row.appendChild(td1);
		 row.appendChild(td2);
		 row.appendChild(td3);
		 row.appendChild(td4);
		 table.appendChild(row);
	 }
}
function getBookList(){
	var booktable = document.getElementById("booklist");
	for(var c = 0;c<books.length;c++){
	   	var row1 = document.createElement('tr');
		row1.className = "rowtable";
		var td1 = document.createElement('td');
		td1.innerHTML = books[c].name;
		var td2 = document.createElement('td');
		td2.innerHTML = books[c].autor;
		var td3 = document.createElement('td');
		td3.innerHTML = books[c].year;
		row1.appendChild(td1);
		row1.appendChild(td2);
		row1.appendChild(td3);
		booktable.appendChild(row1);
	}
}
function addBook(){
    var name = document.getElementById("bookname").value;
	var autor = document.getElementById("autor").value;
	var year = document.getElementById("year").value;
	var newBook = {
		name:name,
		autor:autor,
		year:year,
    };
    for(var d = 0;d<users.length;d++){
		if(users[d].login==window.login){
			users[d].books.push(newBook);
		}
    }
	var btnrem = document.createElement('button');
	btnrem.className = "send";
	var usertable = document.getElementById("usertable");
    var row = document.createElement("tr");
	row.className = "rowtable";
    var td1 = document.createElement("td");
	td1.innerHTML = name;
	row.appendChild(td1);
    var td2 = document.createElement("td");
	td2.innerHTML = autor;
	row.appendChild(td2);
	var td3 = document.createElement("td");
    td3.innerHTML = year;
	row.appendChild(td3);
	var td4 = document.createElement("td");
	td4.innerHTML=btnrem;
	row.appendChild(td4);
    usertable.appendChild(row);
}
function getUserBooks(){
	var usertable = document.getElementById("usertable");
	for(var s = 0;s<users.length;s++){
		if(users[s].login==window.login){
			for(var t = 0;t<users[s].books.length;t++){
				var row = document.createElement("tr");
	            row.className = "rowtable";
				var td1 = document.createElement("td");
	            td1.innerHTML = users[s].books[t].name;
	            row.appendChild(td1);
                var td2 = document.createElement("td");
	            td2.innerHTML = users[s].books[t].autor;
	            row.appendChild(td2);
	            var td3 = document.createElement("td");
                td3.innerHTML = users[s].books[t].year;
	            row.appendChild(td3);
				usertable.appendChild(row);
			}
		}
	}

}
