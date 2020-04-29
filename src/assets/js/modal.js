export const modal = () => {
  const modalTriggers = document.querySelectorAll(".popup-trigger");
  const modalCloseTrigger = document.querySelector(".popup-modal__close");
  const bodyBlackout = document.querySelector(".body-blackout");
  const castello = document.querySelector("#castello");

  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      const { popupTrigger } = trigger.dataset;
      const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

      popupModal.classList.add("is--visible");
      castello.classList.add("show-popup");
      bodyBlackout.classList.add("is-blacked-out");

      popupModal.querySelector(".popup-modal__close").addEventListener("click", () => {
        popupModal.classList.remove("is--visible");
        castello.classList.remove("show-popup");
        bodyBlackout.classList.remove("is-blacked-out");
      });

      bodyBlackout.addEventListener("click", () => {
        // TODO: Turn into a function to close modal
        popupModal.classList.remove("is--visible");
        castello.classList.remove("show-popup");
        bodyBlackout.classList.remove("is-blacked-out");
      });
    });
  });
};
