function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid email.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateDescription() {
  var description = document.getElementById("description").value;

  if (description == '') {
    alert("Empty description.");

    return false;
  }

  return true;
}

function validateImage() {
  var image = document.getElementById("image_upload").value;

  if (image == '') {
    alert("Empty image.");

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateDescription()) {
    return false;
  }

  if (!validateImage()) {
    return false;
  }

  return true;
}