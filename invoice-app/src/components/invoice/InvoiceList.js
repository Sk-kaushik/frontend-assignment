import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import moment from "moment";

import "./invoice.css";
import InvoiceItem from "./InvoiceItem";
import NoInvoice from "../noInvoice/Noinvoice";

const InvoiceList = ({ match }) => {
  const invoiceData = useSelector((state) => state)
    ? useSelector((state) => state)
    : [];

  const renderInvoices = () => {
    var currentDate = moment().format("YYYY/MM/DD");

    if (match.path === "/allInvoices") {
      let comp = invoiceData.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      return comp.length > 0 ? comp : <NoInvoice route={"/allInvoices"} />;
    } else if (match.path === "/dueInvoices") {
      var invoices = invoiceData.filter((item) => !item.paid);
      let dueInvoices = invoices.filter((item) => item.lastDate < currentDate);

      var comp = dueInvoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      return comp.length > 0 ? comp : <NoInvoice route={"/dueInvoices"} />;
    } else if (match.path === "/lateInvoices") {
      var invoices = invoiceData.filter((item) => item.paid);
      let dueInvoices = invoices.filter((item) => item.paidOn > item.lastDate);

      var comp = dueInvoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      return comp.length > 0 ? comp : <NoInvoice route={"/lateInvoices"} />;
    } else if (match.path === "/paidInvoices") {
      var invoices = invoiceData.filter((item) => item.paid);
      var comp = invoices.map((data) => (
        <InvoiceItem data={data} key={data.id} />
      ));

      return comp.length > 0 ? comp : <NoInvoice route={"/paidInvoices"} />;
    }
  };

  return <Container className="align-self-start">{renderInvoices()}</Container>;
};

export default InvoiceList;
