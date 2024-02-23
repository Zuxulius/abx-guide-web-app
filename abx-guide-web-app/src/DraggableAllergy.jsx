import { Rnd } from 'react-rnd';
import { useDraggable } from "./DraggableContext.jsx"

function AllergyContent() {
    const { toggleAllergyVisibility } = useDraggable();
    return (
        <div>
            <header className='drag-handle'><button onClick={toggleAllergyVisibility}>X</button></header>
            <h3>Korsreaktivitet mot övriga beta-laktam antibiotika vid tidigare reaktion på penicillin.</h3>
            <h4>Behandlingsrekommendationer vid akut antibiotika-behov för sjukhusvårdade patienter när allergologisk utredning inte är genomförbar.</h4>
            <div className='allergy-lists'>
              <div>
                <h4>Hög risk för anafylaxi/ allvarlig snabb reaktion på penicillin:</h4>
                <ul>
                  <li>Reaktion inom 2 timmar efter den 1:a dosen</li>
                  <li>Bronkospasm/stridor/heshet</li>
                  <li>Synkope/hypotension</li>
                  <li>Urtikaria/svår klåda/ angioödem</li>
                  <li>Behov av sjukhusvård vid index reaktion</li>
                  <li>Systemisk mastocytos</li>
                  <li>Misstänkt anafylaxi/behov av adrenalin</li>
                </ul>
                <p>Undvik penicilliner, remiss kan skickas till allergolog för utredning.</p>
                <p>Karbapenem och aztreonam kan användas med anafylaxiberedskap och observation i minst 2 timmar. (Om tiden medger rekommenderas att först ge provdos: 1:10, och 30-45 minuter senare resten av en behandlingsdos).</p>
                <p>Cefalosporin generation 3/4/5 kan användas med anafylaxiberedskap och observation i minst 2 timmar. (Vid tidigare allvarlig reaktion ge först provdos: 1:10, 30-45 minuter senare resten av en behandlingsdos). Om penicillin eller cefalosporin generation 1 eller 2 är nödvändigt kontakta allergispecialist för utredning.</p>
              </div>
              <div>
                <h4>Allvarlig senreaktion på penicillin:</h4>
                  <ul>
                    <li>Svårt sendebuterande hudreaktion som har krävt peroralt kortison och/eller varade i minst 7 dagar</li>
                    <li>Serumsjuka/ledpåverkan</li>
                    <li>Vaskulit</li>
                    <li>Toxisk epidermal nekrolys (TEN)</li>
                    <li>Svår organpåverkan (t.ex. njure, lever)</li>
                    <li>Svår påverkan på blodstatus</li>
                    <li>Hudsymtom med blåsbildning, utbredd fjällning eller slemhinnepåverkan</li>
                    <li>Läkemedelsutlösta autoimmuna reaktioner</li>
                    <li>Drug reaction with eosinophila and systemic symptoms (DRESS)</li>
                  </ul>
                <p>Undvik beta-laktam antibiotika. Om det finns en vital indikation för beta-laktam antibiotika och övriga antibiotika-grupper inte kan användas, kontakta hud- eller allergikonsult.</p>
              </div>
              <div>
                <h4>Låg risk för allvarlig allergisk reaktion/ Mild reaktion på penicillin:</h4>
                <ul>
                  <li>
                    Makulopapulösa hudreaktioner
                    <ul>
                      <li>debut minst 2 timmar efter den 1:a dosen</li>
                      <li>ej urtikaria eller angioödem</li>
                      <li>ej krävt per orala steroider eller adrenalin</li>
                      <li>kortvariga (mindre än 7 dagar)</li>
                    </ul>
                  </li>
                  <li>Lokal infiltration vid intramuskulär injektion</li>
                  <li>Lokal urtikaria vid intravenös injektion</li>
                </ul>
                <p>Cefalosporin generation 3/4/5, karbapenem, aztreonam kan ges som behandlingsdos. Om cefalosporin generation 1 eller 2 är nödvändigt kontakta allergikonsult.</p>
              </div>
            </div>
            <p>Referens: Romano A et al. Towards a more precise diagnosis of hypersensitivity to beta-lactams - an EAACI position paper. Allergy. 2020 Jun;75(6):1300-1315. doi: 10.1111/all.14122. PMID: 31749148.</p>
            <p>I samarbete med Allergicentrum, Region Östergötland.</p>
        </div>
    );
}

function DraggableAllergy() {

  return (
    <Rnd
      default={{
        x: window.innerWidth - window.innerWidth/1.95,
        y: window.scrollY+window.innerHeight/100,
        width: window.innerWidth/2,
        height: window.innerHeight/2.1,
      }}
      style={{position: "fixed"}}
      disableDragging="true"
      minWidth={100}
      minHeight={100}
      bounds="window"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      dragHandleClassName='drag-handle'
    >
      <div className="allergy-container">
        <AllergyContent />
      </div>
    </Rnd>
  );
}

export default DraggableAllergy;
