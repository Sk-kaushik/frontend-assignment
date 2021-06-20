import React from "react";
import { Link } from "react-router-dom";
import Nodata from "./noData.svg";
import "./noInvoice.css";

const Noinvoice = ({ route }) => {
  const renderInvoice = () => {
    if (route === "/dueInvoices") {
      return (
        <div>
          <img src={Nodata} className="col-md-5" alt="" />
          <h1 className="mt-5 mb-3">No Due Invoice</h1>
        </div>
      );
    } else if (route === "/allInvoices") {
      return (
        <div>
          <img src={Nodata} className="col-md-5" alt="" />
          <h1 className="mt-5 mb-3">No Invoice</h1>
          <Link className="btn noInoviceBtn text-white" to="/">
            Add Invoice
          </Link>
        </div>
      );
    } else if (route === "/lateInvoices") {
      return (
        <div>
          <img src={Nodata} className="col-md-5" alt="" />
          <h1 className="mt-5 mb-3">No Late Invoice</h1>
        </div>
      );
    }
  };

  return <div className="mt-5 pt-5 text-center">{renderInvoice()}</div>;
};

export default Noinvoice;
