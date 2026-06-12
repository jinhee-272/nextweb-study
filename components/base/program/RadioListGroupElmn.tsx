"use client"

import {ProgramType} from "@/type/BasePageType";
export default function RadioListGroupElmn({programName,containerIndex,programKey,detailObject}:ProgramType) {
    const inputKey = programKey ?? `${programName}-${containerIndex}`;
    
    return (
        <div className="list-group">
            <label className="list-group-item d-flex gap-2">
                <input className="form-check-input flex-shrink-0" type="radio" name={inputKey}
                       id="listGroupRadios1" value="1"/>
                <span>
            First radio
            <small className="d-block text-body-secondary">With support text underneath to add more detail</small>
          </span>
            </label>
            <label className="list-group-item d-flex gap-2">
                <input className="form-check-input flex-shrink-0" type="radio" name={inputKey}
                       id="listGroupRadios2" value="2"/>
                <span>
            Second radio
            <small className="d-block text-body-secondary">Some other text goes here</small>
          </span>
            </label>
            <label className="list-group-item d-flex gap-2">
                <input className="form-check-input flex-shrink-0" type="radio" name={inputKey}
                       id="listGroupRadios3" value="3"/>
                <span>
            Third radio
            <small className="d-block text-body-secondary">And we end with another snippet of text</small>
          </span>
            </label>
        </div>
    );
}