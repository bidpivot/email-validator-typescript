import { Inputs } from "./baseEmails.ts" 


export default function middleEmails(input: Inputs) {
  return `
${input.first[0]}${input.middle[0]}${input.last}@${input.domain}${input.tld}
${input.first[0]}${input.middle[0]}.${input.last}@${input.domain}${input.tld}
${input.first}${input.middle[0]}${input.last}@${input.domain}${input.tld}
${input.first}.${input.middle[0]}.${input.last}@${input.domain}${input.tld}
${input.first}${input.middle}${input.last}@${input.domain}${input.tld}
${input.first}.${input.middle}.${input.last}@${input.domain}${input.tld}
${input.first}-${input.middle[0]}-${input.last}@${input.domain}${input.tld}
${input.first}-${input.middle}-${input.last}@${input.domain}${input.tld}
${input.first[0]}${input.middle[0]}-${input.last}@${input.domain}${input.tld}
${input.first[0]}${input.middle[0]}_${input.last}@${input.domain}${input.tld}
${input.first}_${input.middle[0]}_${input.last}@${input.domain}${input.tld}
${input.first}_${input.middle}_${input.last}@${input.domain}${input.tld}`;
}
