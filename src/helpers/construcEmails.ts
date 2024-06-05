import { Inputs } from "./baseEmails";
import baseEmails from "./baseEmails";
import middleEmails from "./middleEmails";
import nickEmails from "./nickEmails";

export default function constructEmails(inputs: Inputs): string {
  const { middle, nick } = inputs;
  let email = baseEmails(inputs);

  if (middle !== "") {
    email += middleEmails(inputs);
  }
  if (nick !== "") {
    email += nickEmails(inputs);
  } 
  return email;
}
