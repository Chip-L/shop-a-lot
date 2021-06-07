function searchFormHandler(event) {
  event.preventDefault();

  const searchValue = document.querySelector("#productSearch").value.trim();
  if (searchValue) {
    window.location.href = `/search/${searchValue}`;
  } 
}
document
  .querySelector(".search-form")
  .addEventListener("submit", searchFormHandler);
