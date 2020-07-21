// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".eaten-status").on("click", function () {
      const id = $(this).data("id");
      const newBurger = $(this).data("devoured");
  
      const newBurgerDevouredStatus = { value: newBurger };
  
      // Send the PUT request.
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT"
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".submit-button").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#ca").val().trim(),
      };
  
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
  