
export interface BaseInputs {
  first: string;
  last: string;
  domain: string,
  tld: string,
}


export default function baseEmails(input: BaseInputs) {
  return `${input.first}@${input.domain}${input.tld}
${input.last}@${input.domain}${input.tld}
${input.first}${input.last}@${input.domain}${input.tld}
${input.first}.${input.last}@${input.domain}${input.tld}
${input.first[0]}${input.last}@${input.domain}${input.tld}
${input.first[0]}.${input.last}@${input.domain}${input.tld}
${input.first}${input.last[0]}@${input.domain}${input.tld}
${input.first}.${input.last[0]}@${input.domain}${input.tld}
${input.first[0]}${input.last[0]}@${input.domain}${input.tld}
${input.first[0]}.${input.last[0]}@${input.domain}${input.tld}
${input.last}${input.first}@${input.domain}${input.tld}
${input.last}.${input.first}@${input.domain}${input.tld}
${input.last}${input.first[0]}@${input.domain}${input.tld}
${input.last}.${input.first[0]}@${input.domain}${input.tld}
${input.last[0]}${input.first}@${input.domain}${input.tld}
${input.last[0]}.${input.first}@${input.domain}${input.tld}
${input.last[0]}${input.first[0]}@${input.domain}${input.tld}
${input.last[0]}.${input.first[0]}@${input.domain}${input.tld}
${input.first}-${input.last}@${input.domain}${input.tld}
${input.first[0]}-${input.last}@${input.domain}${input.tld}
${input.first}-${input.last[0]}@${input.domain}${input.tld}
${input.first[0]}-${input.last[0]}@${input.domain}${input.tld}
${input.last}-${input.first}@${input.domain}${input.tld}
${input.last}-${input.first[0]}@${input.domain}${input.tld}
${input.last[0]}-${input.first}@${input.domain}${input.tld}
${input.last[0]}-${input.first[0]}@${input.domain}${input.tld}
${input.first}_${input.last}@${input.domain}${input.tld}
${input.first[0]}_${input.last}@${input.domain}${input.tld}
${input.first}_${input.last[0]}@${input.domain}${input.tld}
${input.first[0]}_${input.last[0]}@${input.domain}${input.tld}
${input.last}_${input.first}@${input.domain}${input.tld}
${input.last}_${input.first[0]}@${input.domain}${input.tld}
${input.last[0]}_${input.first}@${input.domain}${input.tld}
${input.last[0]}_${input.first[0]}@${input.domain}${input.tld}`;
}
