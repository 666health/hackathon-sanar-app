/** @format */

import React from "react";
import { EventTypesMap } from "~/web/components/create-event-modal/constants";
import { orEmptyObject } from "~/web/utils/type";
import { AgendaEvent } from "../types";

export const AgendaEventComp = ({ event, onSelectEvent }) => {
  const { icon, label, color } = orEmptyObject(
    EventTypesMap[event.event ? event.event.eventType : "TASK"]
  );

  const handleClick = e => {
    e.preventDefault();
    onSelectEvent(event);
  };

  return (
    <div className="AgendaEvent" onClick={handleClick}>
      {label && (
        <p className="AgendaEvent-type">
          <i className={`icon icon-${icon} icon--${color} icon--sm`} />
          {label}
        </p>
      )}

      <p className="AgendaEvent-title">{event.title}</p>
    </div>
  );
};

export default AgendaEventComp;
