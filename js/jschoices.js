document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.querySelector('select');
      const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText:'' ,
      });
});
