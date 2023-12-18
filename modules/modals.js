const modal = document.getElementById("modal");
const modalText = modal.querySelector("p");
const titleForcast = document.querySelector (".title");
const weatherContainer = document.getElementById("weather");
const showModal = (text) => {
  modalText.innerText = text;
  modal.style.display = "flex";
  titleForcast.style.display = "none";
  weatherContainer.innerHTML = "";
};
const removeModal = () => {
  modal.style.display = "none";
};
export { showModal, removeModal };
