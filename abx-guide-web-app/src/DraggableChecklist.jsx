import { Rnd } from 'react-rnd';
import { useDraggable } from "./DraggableContext.jsx"
import { useEffect, useState } from 'react';

function ChecklistContent() {
    const { toggleChecklistVisibility } = useDraggable();
    return (
        <div>
            <header className='drag-handle'><button onClick={toggleChecklistVisibility}>X</button></header>
            <h3>Checklista vid insättande av antibiotika</h3>
            <ol>
                <li><b>Vid misstanke om livshotande infektion:  konsultera infektionsbakjour och narkosläkare</b></li>
                <li>
                    <b>Ställ preliminär diagnos</b>
                    <ul>
                        <li>Infektionsfokus?</li>
                        <li>Sannolikt etiologiskt agens?</li>
                        <li>Immunsuppression?</li>
                        <li>Ange svårighetsgrad (NEWS)</li>
                    </ul>
                </li>
                <li><b>Riskfaktorer antibiotikaresistenta bakterier?</b>
                    <ul>
                        <li>Tidigare odlingsfynd med antibiotikaresistenta bakterier (ABR) hos patient eller känt bärarskap av ABR hos hushållskontakt</li>
                        <li>Utlandsresor</li>
                        <li>Tidigare antibiotikabehandling</li>
                        <li>Tidigare sjukhusvistelse/vårdkontakt</li>
                    </ul>
                </li>
                <li><b>Provtagning</b>
                    <ul>
                        <li>Klinisk kemi: CRP, Blodstatus, Na, K, Kreatinin, eGFR kreatinin, eGFR cystatinC, Bilirubin (totalt + konjugerat), ALP, ALAT, ASAT, GT, LD, Albumin, Laktat, Glukos, Urinsticka, PCT, venös diff, PK, APTT, fibrinogen, D-dimer och blodgas. CK och Myoglobin (vid nekrotiserande hud och mjukdelsinfektion).</li>
                        <li>Mikrobiologisk diagnostik: Odlingar: likvor blod, urin, sputum, NPH, sår, punktat (ledvätska, abscess).</li>
                        <li>Övrig mikrobiologisk diagnostik:                                 - Pneumoni: PCR bakterier, PCR  virus (influensa, SARS-CoV-2, RS), Urinantigen (legionella/ pneumokock). Vid misstanke om ovanligare infektion (mögel, tuberkulos, psittakos, CMV, pneumocystis etc) kontakta infektionsläkare/mikrobiolog.</li>
                    </ul>
                </li>
                <li><b>”Source Control”, föreligger behov av kirurgisk intervention – kontakta relevant kirurg!</b>
                <br />OBS: utredning av infektionsfokus måste fortsätta om man inte lokaliserat infektionskällan!
                </li>
                <li><b>Ange tidpunkt för ny bedömning av fortsatt antibiotika alt. utsättning.</b>
                <br />Motivera ditt val av antibiotika i journalen.
                </li>
                <li><b>När odlingssvar med resistensbesked erhållits skall riktad terapi ges.</b></li>
                <li><b>Kontrollera alltid läkemedelsinteraktioner, att dosering baseras på aktuell njur- och leverfunktion samt vikt.</b></li>
                <li><b>Pc-allergi - se tabell sid 5 för korsreaktivitet.</b></li>
            </ol>
        </div>
    );
}

function DraggableChecklist() {

  return (
    <Rnd
      default={{
        x: window.innerWidth - window.innerWidth/4.9,
        y: window.scrollY+window.innerHeight/2.1,
        width: window.innerWidth/5,
        height: window.innerHeight/2,
      }}
      style={{position: "fixed"}}
      disableDragging="true"
      minWidth={100}
      minHeight={100}
      bounds="window"
      enableResizing={{
        top: true,
        right: false,
        bottom: true,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: true,
        topLeft: true,
      }}
      dragHandleClassName='drag-handle'
    >
      <div className="checklist-container">
        <ChecklistContent />
      </div>
    </Rnd>
  );
}

export default DraggableChecklist;
