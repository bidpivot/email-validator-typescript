import { Inputs } from "./baseEmails";

export default function nickEmails(input: Inputs) {
  return `
${input.nick}@${input.domain}${input.tld}
${input.nick}${input.last}@${input.domain}${input.tld}
${input.nick}.${input.last}@${input.domain}${input.tld}
${input.nick[0]}${input.last}@${input.domain}${input.tld}
${input.nick[0]}.${input.last}@${input.domain}${input.tld}
${input.nick}${input.last[0]}@${input.domain}${input.tld}
${input.nick}.${input.last[0]}@${input.domain}${input.tld}
${input.nick[0]}${input.last[0]}@${input.domain}${input.tld}
${input.nick[0]}.${input.last[0]}@${input.domain}${input.tld}
${input.last}${input.nick}@${input.domain}${input.tld}
${input.last}.${input.nick}@${input.domain}${input.tld}
${input.last}${input.nick[0]}@${input.domain}${input.tld}
${input.last}.${input.nick[0]}@${input.domain}${input.tld}
${input.nick}-${input.last}@${input.domain}${input.tld}
${input.nick[0]}-${input.last}@${input.domain}${input.tld}
${input.last}-${input.nick}@${input.domain}${input.tld}
${input.last}-${input.nick[0]}@${input.domain}${input.tld}
${input.nick}_${input.last}@${input.domain}${input.tld}
${input.nick[0]}_${input.last}@${input.domain}${input.tld}
${input.last}_${input.nick}@${input.domain}${input.tld}
${input.last}_${input.nick[0]}@${input.domain}${input.tld}`;
}
