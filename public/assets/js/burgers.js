// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".eaten-status").on("click", function () {
      const id = $(this).data("id");
     //const newBurger = $(this).data("devoured");
  
      //const newBurgerDevouredStatus = { value: true };
        console.log("eat button was clicked");
      // Send the PUT request.
      $.ajax(`/api/burgers/${id}/devoured`, {
        type: "PUT"
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        console.log("submit button clicked")
      const newBurger = {
        burger_name: $("#ca").val().trim(),
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  