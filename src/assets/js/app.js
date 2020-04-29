import { popover } from "./popover";
import { modal } from "./modal";

import "../styles/index.scss";

console.log("webpack starterkit");
//popover

// if (document.querySelectorAll(".popup-trigger")) {
popover();
// }
//modal
if (document.querySelectorAll(".popup-trigger")) {
  modal();
}
