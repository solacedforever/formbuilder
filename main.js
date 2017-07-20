let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];
( function(){
  let first = formData[ 0 ];
  console.log( first );
  console.log( first.label );
} )();
let fields = document.querySelector('#fields');
for (let i = 0; i < formData.length; i++) {
    if (formData[i].label != "Select Language") {
        if (formData[i].type != "textarea") {
            let input = document.createElement('input');
            input.type = formData[i].type;
            input.placeholder = formData[i].label;
            input.id = formData[i].id;
            input.icon = formData[i].icon;
            input.options = formData[i].options;
            fields.appendChild(input);
   }
  }
 if (formData[i].options.length > 0) {
    let dropdown = document.createElement("select");
    let selectOption = `${formData[i].label}`
    let option = document.createElement("option");
    option.innerHTML = `${selectOption}`;
    dropdown.appendChild(option);
    for (a = 0; a < formData[i].options.length; a++) {
        let dropdownOption = document.createElement("option");
        dropdownOption.setAttribute("value", formData[i].options[a].value);
        dropdownOption.innerHTML = formData[i].options[a].label;
        dropdown.appendChild(dropdownOption);
        fields.appendChild(dropdown);
   }
  }
 if (formData[i].type === "textarea") {
    let textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", `${formData[i].label}`);
    fields.appendChild(textarea);
 }
}
console.log(fields);
