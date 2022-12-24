import React from "react";
import "../../styles/FindEquipForm.css";
import { Form, FormGroup } from "reactstrap";

const FindEquipForm = () => {
 

  return (
    <Form>
      <div className="d-flex align-items-center justify-content-between flex-wrap find_equip-btn">
        <FormGroup className="form_group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="date" placeholder="Required date" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input
            className="required_time"
            type="time"
            placeholder="Required time"
            required
          />
        </FormGroup>

        <FormGroup className="select_group">
          <select>
            <option value="w_ope">With Operator</option>
            <option value="wo_ope">Without Operator</option>
          </select>
        </FormGroup>

        <FormGroup className="form_group">
          <button className=" find_equip-btn">Find Equipment</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindEquipForm;
