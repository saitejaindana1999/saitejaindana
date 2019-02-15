function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  details2(data.education);
  technicalskills(data.skills);
})

var left = document.querySelector(".leftchild");
function details(det) {
  var image = document.createElement("img");
  image.src=det.image;
  left.appendChild(image);
  var name = document.createElement("h2")
  name.textContent = det.name;
  left.appendChild(name);

  var mail = document.createElement("a");
  mail.href = "saitejaindana1999@gmail.com";
  mail.textContent = det.email;
  left.appendChild(mail);

  var number = document.createElement("p");
  number.textContent=det.number;
  left.appendChild(number);

  var objective = document.createElement("h2");
  objective.textContent = "Address:";
  left.appendChild(objective);
  var hr = document.createElement("hr");
  left.appendChild(hr);



  var add = document.createElement("p");
  add.textContent = det.address;
  left.appendChild(add);

  }
  var right = document.querySelector(".rightchild");
  function careerinfo(obj){
    var objective = document.createElement("h2");
    objective.textContent = "Career Objective:";
    right.appendChild(objective);
    var hr = document.createElement("hr");
    right.appendChild(hr);


    var objective = document.createElement("p");
    objective.textContent = obj.objective;
    right.appendChild(objective);

}


function details2(edu){
  var objective = document.createElement("h2");
  objective.textContent = "Educational details:";
  right.appendChild(objective);

  var hr = document.createElement("hr");
  right.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border = "1"
  var tr1 = "<tr><th>Institute</th><th>Degree</th><th>passout</th></tr>";
  var tr2 = "";

  for(var i=0;i<edu.length;i++){
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>"
}
table1.innerHTML=tr1+tr2;
right.appendChild(table1);
}
function technicalskills(tec){
  var info=document.createElement("h3");
  info.textContent="Technical Skills:";
  right.appendChild(info);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var ul=document.createElement("ul");
  for (var i = 0; i < tec.length; i++) {
    var li=document.createElement("li");
    li.textContent=tec[i].info+";"+tec[i].details;
    ul.appendChild(li);
  }
right.appendChild(ul);



}
