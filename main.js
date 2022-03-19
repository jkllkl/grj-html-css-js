const addItem = document.getElementById("item");
const button = document.querySelector(".button");
const form = document.querySelector(".close");
const submit = document.querySelector(".submit");

function btnItem() {
  // alert("clicked");
  // document.getElementByIdqu("item").style.display = "block";
  addItem.style.display = "block";
}

button.addEventListener("click", btnItem); //.button클릭시 btnItem함수실행

function closeForm() {
  addItem.style.display = "none";
}

form.addEventListener("click", closeForm); //.close클릭시 closeForm함수실행
submit.addEventListener("click", closeForm);

const addList = document.querySelector("ul");
const addBox = document.querySelector("section");
const addFormItem = document.querySelector(".item-form");
const addName = document.querySelector(".item-form .name");
const addImage = document.querySelector(".item-form .image");
const addContent = document.querySelector(".item-form .content");

function paintForm(newName, newImage, newContent) {
  const div = document.createElement("div"); //div태그생성
  div.classList.add("box");
  const img = document.createElement("img");
  img.alt = newName; //img의 속성 alt newName
  img.src = newImage;
  const paragraph = document.createElement("p"); //p태그생성
  const li = document.createElement("li"); //li태그 생성
  // const list = document.createElement("li");
  // div.appendChild(img); //div태그 안에 img태그 생성
  div.appendChild(img);
  //div태그 안에 p태그생성
  div.appendChild(paragraph);

  // img.innerText = newImage;
  paragraph.innerText = newContent;
  li.innerText = newName;

  addBox.appendChild(div);
  addList.appendChild(li);
  // list.innerText = newName;
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newName = addName.value;
  addName.value = "";
  const newImage = addImage.value;
  addImage.value = "";
  const newContent = addContent.value;
  addContent.value = "";
  paintForm(newName, newImage, newContent);
  // console.log(addName.value);
  // console.log(addImage.value);
  // console.log(addContent.value);
}

addFormItem.addEventListener("submit", handleToDoSubmit);
