
const ul = document.querySelector(".gallery");

const form = document.querySelector(".feedback-form");
const formFields = form.elements;
const submitButton = form.querySelector('[type="submit"]');

submitButton.addEventListener('click', clearStorage);

function clearStorage() {
  for (let i = 0; i < formFields.length; i++) {
        localStorage.removeItem(formFields[i].name);
    }
          // localStorage.clear();
}

function changeHandler() {
            if (this.type !== 'checkbox') {
          localStorage.setItem(this.name, this.value);
              console.log(this.name, this.value);
            }
            else {
          localStorage.setItem(this.name, this.checked);
              console.log("checkbox:", this.name, JSON.stringify(this.checked));
            }
}

function checkStorage() {
          for (let i = 0; i < formFields.length; i++) {
            if (formFields[i].type !== 'submit') {
              if (formFields[i].type === 'checkbox') {
                formFields[i].checked = JSON.parse(localStorage.getItem(formFields[i].name));
                console.log("checkbox", localStorage.getItem(formFields[i].name));
              }
              else {
                    formFields[i].value = localStorage.getItem(formFields[i].name)
                    console.log(localStorage.getItem(formFields[i].name));
              }
            }
          }
attachEvents();
}

function attachEvents() {
  for (let i = 0; i < formFields.length; i++) {
  formFields[i].addEventListener('change', changeHandler)
}
}

function explorer(htmlElement) {
   console.log( htmlElement);
  let children = htmlElement.children;
  // console.log("children", children);
  if (children.length !== 0) {
    for (const child of children) {
      // console.log("inner position:", child);
      explorer(child);
    }
  }

}

explorer(document.body);

checkStorage();


  

// console.log(formFields);
// console.log(submitButton);

// const localStorageKey = "KOREAN WORDS";
// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";
// form.addEventListener("input", (evt) => {
// localStorage.setItem(localStorageKey, evt.target.value);
// });
// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//   form.reset();
// });


   // if (localStorageKey !== "") {
    //     ul.innerHTML = localStorage.getItem(localStorageKey);
    // }
    //  localStorage.removeItem(localStorageKey);