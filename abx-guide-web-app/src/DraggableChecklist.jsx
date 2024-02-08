import { Rnd } from 'react-rnd';

function ChecklistContent() {
    return (
        <div>
            <h2>CHECKLIST</h2>
        </div>
    );
};

function DraggableChecklist() {

  return (
    <Rnd
      default={{
        x: window.innerWidth/3,
        y: window.innerHeight/1.5,
        width: 320,
        height: 200,
      }}
      minWidth={100}
      minHeight={100}
      bounds="window"
    >
      <div className="checklist-container">
        <div className="drag-handle">
          Drag from here
        </div>
        <ChecklistContent />
      </div>
    </Rnd>
  );
}

export default DraggableChecklist;
