document.querySelector("form").addEventListener("submit", myFunction);
    let signupArr = JSON.parse(localStorage.getItem("signupKey")) || [];
    function myFunction(event) {
        event.preventDefault();

        let signupObj = {
            oName: document.querySelector("#name").value,
            oEmail: document.querySelector("#email").value,
            oPassword: document.querySelector("#password").value,
        };

        if (
            signupObj.oEmail == "" ||
            signupObj.oName == "" ||
            signupObj.oPassword == ""
        ) {
            alert("Please Enter Your Details");
        } else {
            if (checkEmail(signupObj.oEmail) === true) {
                signupArr.push(signupObj);
                localStorage.setItem("signupKey", JSON.stringify(signupArr));
                alert("Account Created Successfully To Sign In Click On Sign In  ");
                window.location.href = "signin.html";
            }
        }
    }

    /*Email validation check*/

    function checkEmail(oEmail) {
        let filtered = signupArr.filter(function (el) {
            return oEmail === el.oEmail;
        });
        //console.log(filtered);
        if (filtered.length > 0) {
            alert("Account Already Exists Click On Sign In");
            return false;
        } else {
            return true;
        }
    }