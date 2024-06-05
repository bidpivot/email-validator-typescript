import {  useState } from "react";
import "./App.css";
import "./css/typograhy.css";
import baseEmails from "./helpers/baseEmails.ts"
import SubHeader from "./components/SubHeader";
import Clipboard from "./components/Clipboard";
import GmailButton from "./components/GmailButton";
import constructEmails from "./helpers/construcEmails.ts";
import FormLine from "./components/FormLine.tsx";
import DomainInput from "./components/DomainInput.tsx"
import TextArea from "./components/TextArea.tsx";


export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [domain, setDomain] = useState("");
  const [nick, setNick] = useState("");
  const [middle, setMiddle] = useState("");
  const [tld, setTld] = useState(".com");
  const [emails, setEmails] = useState(
    baseEmails({ first: "stephen", last: "jobs", domain: "apple", tld: tld, nick: "steve", middle: "" })
  );

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`handleFormSubmit() called`);

    const inputObject = {
      first: first.toLowerCase().trim(),
      last: last.toLowerCase().trim(),
      domain: domain.toLowerCase(),
      tld: tld.toLowerCase(),
      middle: middle.toLowerCase().trim(),
      nick: nick.toLowerCase().trim(),
    };

    // Use inputObject instead of middle and nick directly
    setEmails(constructEmails(inputObject))
  }

  function handleExpandButton() {
    console.log("handleExpandButton called");
    setMiddle("");
    setNick("");
    setExpanded(!expanded);
  }

  return (
    <div id="app">
      <header>{<SubHeader />}</header>
      <main>
        <div className="container">
          <div className="app-container">
            <div className="col-left">
              <form onSubmit={handleFormSubmit}>
                <FormLine id="first" aria="first name" label="First Name:" value={first} placeholder="Stephen" onChange={event => setFirst(event.target.value)} required={true} />
                <FormLine id="last" aria="last name" label="Last Name:" value={last} placeholder="Jobs" required={true} onChange={event => setLast(event.target.value)} />
                {expanded && <FormLine id="nick" aria="nick name" label="Nick Name" value={nick} placeholder="Steve" onChange={event => setNick(event.target.value)} />}
                {expanded && <FormLine id="middle" aria="middle name" label="Middle Name" value={middle} placeholder="" onChange={event => setMiddle(event.target.value)} />}
                <DomainInput id="domain-input" aria="domain" label="Domain:" placeholder="apple" value={domain} onChange={event => setDomain(event.target.value)} selectValue={tld} onSelectChange={event => setTld(event.target.value)} />
                <div className="button-container">
                  <button type="submit" id="generate-button" className="btn">
                    Generate Email Combinations
                  </button>
                </div>
              </form>
              <button
                onClick={handleExpandButton}
                id="expand-button"
                className="btn"
              >
                {expanded ? "Reduce Options" : "Expand Options"}
              </button>
            </div>
            <div className="col-right">
              <TextArea value={emails}/>
              <Clipboard emails={emails} />
              <GmailButton emails={emails} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
