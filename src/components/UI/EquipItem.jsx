import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/equip-item.css';

const EquipItem = (props) => {
  const {  imgUrl, model, equipName, automatic, speed, price } = props.item;
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="equip_item">
        <div className="equip_img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car_item-content mt-4">
          <h4 className="section_title text-center">{equipName}</h4>
          <h6 className="rent_price text-center">
            {price}.00
            <span>/ Day</span>
          </h6>

          <div className="equip_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i class="ri-steering-2-line"></i>
              {model}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i class="ri-settiings-2-line"></i>
              {automatic}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i>
              {speed}
            </span>
          </div>

          <button className="w-50 equip_item-btn equip_btn-rent">
            <Link to={`equip/${equipName}`}>Rent</Link>
          </button>

          <button className="w-50 equip_item-btn equip_btn-details">
            <Link to={`equip/${equipName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default EquipItem;
