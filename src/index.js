function bookings() {
        let name = prompt("Enter name");
        let age = prompt("How old are you?");

        if (age <= 17) {
          alert(
            "Sorry 😕 " +
              name +
              " ," +
              "services are not for person under the age of 18."
          );
        }
        if (age >= 18) {
          let location = prompt("Enter address");
          let contacts = prompt("Enter whatapp number");
          alert(
            "Thank you " +
              name +
              " ," +
              "we'll contact you shortly on whatsapp to cornfirm your booking."
          );
        }
      }
      let bookingsButton = document.querySelector("button");
      bookingsButton.addEventListener("click", bookings);