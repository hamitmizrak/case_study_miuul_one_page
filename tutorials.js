// Date
const newDate = () => {
  const date = document.getElementById("date_id");
  date.innerHTML = new Date().getTime();
};
newDate();

// validation
const validateMiuulMyCv = () => {
  let name, surname, email, phone, gender, ability, message;
  name = document.getElementById("my_cv_name_id").value;
  surname = document.getElementById("my_cv_surname_id").value;
  email = document.getElementById("my_cv_email_id").value;
  phone = document.getElementById("my_cv_phone_id").value;
  gender = document.querySelector('input[name="gender"]:checked').value;
  ability = document.getElementById("my_cv_phone_id").value;
  message = document.getElementById("my_cv_message_id").value;
//   alert("Name: " + name);
//   alert("surname: " + surname);
//   alert("email: " + email);
//   alert("phone: " + phone);
//   alert(gender);
//   alert("ability: " + ability);
//   alert("message: " + message);
  // 1.YOL
  if (gender != null) {
    if (gender.checked == true) alert("bay");
    else alert("bayan");
  }

  if (name === "") alert("Name alanı boş geçildi");
  if (surname === "") alert("surname alanı boş geçildi");
  if (phone === "") alert("phone alanı boş geçildi");
};
