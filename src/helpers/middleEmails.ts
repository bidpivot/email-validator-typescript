import { BaseInputs } from "./baseEmails.ts" 

export interface MiddleInputs extends BaseInputs {
  middle: string; // Add the 'middle' field
}

export default function middleEmails(input: MiddleInputs) {
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
