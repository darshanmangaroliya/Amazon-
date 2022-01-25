import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "../action/cartaction";
import CheckoutSteps from "../components/CheckoutSteps";

const ShipingScreen = (props) => {
  const { userinfo } = useSelector((state) => state.usersignin);

  if (!userinfo) {
    props.history.push("/signin");
  }
const cart = useSelector(state => state.cart)
const {shipingAddress}= cart
  const [fullName, setFullName] = useState(shipingAddress.fullName);
  const [address, setAddress] = useState(shipingAddress.address);
  const [city, setCity] = useState(shipingAddress.city);
  const [postalCode, setPostalCode] = useState(shipingAddress.postalCode);
  const [country, setCountry] = useState(shipingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveAddress({ fullName, address, city, postalCode, country }));
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipingScreen;
