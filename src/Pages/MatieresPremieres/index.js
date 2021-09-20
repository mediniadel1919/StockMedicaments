import React, { useEffect, useState } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import AppFooter from "../../Layout/AppFooter";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import PageTitle from "./PageTitle";
import ReactTable from "react-table";

import { useDispatch, useSelector } from "react-redux";

import SweetAlert from "sweetalert-react";

const MatieresPremieres = () => {
  const referentsColumns = [
    {
      Header: "Nom de la matiére",
      accessor: "nom",
    },
    {
      Header: "Quantité",
      accessor: "quantité",
    },
  ];
  return (
    <>
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <CSSTransitionGroup
              component="div"
              transitionName="TabsAnimation"
              transitionAppear={true}
              transitionAppearTimeout={0}
              transitionEnter={false}
              transitionLeave={false}
            >
              <div>
                <PageTitle
                  heading="Matiéres Premiéres"
                  subheading="Gérer les Matiéres Premiéres"
                  icon="pe-7s-culture icon-gradient bg-tempting-azure"
                />
              </div>
              {/* <h1>fournissuer</h1> */}
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <ReactTable
                        nextText={"Suivant"}
                        previousText={"Précedent"}
                        rowsText={"Lignes"}
                        columns={referentsColumns}
                        defaultPageSize={20}
                        filterable
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CSSTransitionGroup>

            <AppFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default MatieresPremieres;
