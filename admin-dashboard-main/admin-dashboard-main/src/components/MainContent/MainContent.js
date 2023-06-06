import React from "react";
import progress1 from "../../images/progress1.png";
import progress2 from "../../images/progress2.png";
import progress3 from "../../images/progress3.png";
import userImg from "../../images/tm.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Accordian from "../Accordian/Accordian";

const MainContent = () => {
  return (
    <div
      style={{
        marginTop: "80px",
      }}
    >
      <div className="row row-cols-2">
        <div className="col-9">
          <header className="text-start">
            <h2>Welcome Back, AM Antor!</h2>
            <p>Have a look at the Quick Progress Bar</p>
          </header>
          <div className="row row-cols-3">
            <div className="col-5">
              <div
                style={{
                  backgroundImage: `url(${progress1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="rounded"
              >
                <div className="d-flex justify-content-between">
                  <button className="customBtn">
                    <i class="bi bi-broadcast pe-2"></i>
                    Live Project
                  </button>
                  <button className="customBtn">View All</button>
                </div>
                <div className="text-start ps-2 text-white">
                  <h1
                    style={{
                      fontSize: "82px",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    56
                  </h1>
                  <p
                    style={{
                      color: "#fff",
                      paddingBottom: "15px",
                    }}
                  >
                    Currently, the projects is in progress
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                style={{
                  backgroundImage: `url(${progress2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="rounded"
              >
                <div className="d-flex">
                  <button className="customBtn">
                    <i class="bi bi-hourglass-top pe-2"></i>
                    In Progress
                  </button>
                </div>
                <div className="text-start ps-2 text-white">
                  <h1
                    style={{
                      fontSize: "82px",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    124
                  </h1>
                  <p
                    style={{
                      color: "#fff",
                      paddingBottom: "15px",
                    }}
                  >
                    Projects in progress
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                style={{
                  backgroundImage: `url(${progress3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="rounded"
              >
                <div className="d-flex">
                  <button className="customBtn">
                    <i class="bi bi-file-earmark-check-fill pe-2"></i>
                    Completed
                  </button>
                </div>
                <div className="text-start ps-2 text-white">
                  <h1
                    style={{
                      fontSize: "82px",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    24
                  </h1>
                  <p
                    style={{
                      color: "#fff",
                      paddingBottom: "15px",
                    }}
                  >
                    Completed projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-between align-items-center">
            <header className="text-start">
              <h2>Current Progress</h2>
              <p>Projects that are currently in progress</p>
            </header>
            <div>
              <div>
                <button
                  className="me-3"
                  style={{
                    background: "#fff",
                    border: "none",
                    padding: "10px 18px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                  }}
                >
                  Filter
                  <i class="bi bi-funnel-fill ps-2"></i>
                </button>
                <button
                  style={{
                    background: "#fff",
                    border: "none",
                    padding: "10px 15px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                  }}
                >
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row row-cols-3">
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="text-start">
                  <h5>Construction Project</h5>
                  <p>Property name</p>
                </header>
                <div className="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-currency-dollar"></i>
                    <span>100-800</span>
                  </p>
                  <p>
                    <i class="bi bi-calendar2-event"></i>
                    <span> Deadline - 25 may</span>
                  </p>
                </div>
                <div>
                  <ProgressBar variant="info" now={75} />
                </div>
                <div className="d-flex justify-content-between">
                  <p>Progress bar</p>
                  <p>75%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50px",
                      }}
                      src={userImg}
                      alt=""
                    />
                    <p className="ps-3 m-0">AM Antor</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-info text-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="text-start">
                  <h5>Construction Project</h5>
                  <p>Property name</p>
                </header>
                <div className="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-currency-dollar"></i>
                    <span>100-800</span>
                  </p>
                  <p>
                    <i class="bi bi-calendar2-event"></i>
                    <span> Deadline - 25 may</span>
                  </p>
                </div>
                <div>
                  <ProgressBar variant="info" now={75} />
                </div>
                <div className="d-flex justify-content-between">
                  <p>Progress bar</p>
                  <p>75%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50px",
                      }}
                      src={userImg}
                      alt=""
                    />
                    <p className="ps-3 m-0">AM Antor</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-info text-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="text-start">
                  <h5>Construction Project</h5>
                  <p>Property name</p>
                </header>
                <div className="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-currency-dollar"></i>
                    <span>100-800</span>
                  </p>
                  <p>
                    <i class="bi bi-calendar2-event"></i>
                    <span> Deadline - 25 may</span>
                  </p>
                </div>
                <div>
                  <ProgressBar variant="info" now={75} />
                </div>
                <div className="d-flex justify-content-between">
                  <p>Progress bar</p>
                  <p>75%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50px",
                      }}
                      src={userImg}
                      alt=""
                    />
                    <p className="ps-3 m-0">AM Antor</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-info text-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <header className="text-start">
              <h2>Pending Invoice</h2>
              <p>Invoices that are currently in pending</p>
            </header>
            <div>
              <div>
                <button
                  style={{
                    background: "#fff",
                    border: "none",
                    padding: "10px 15px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                  }}
                >
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row row-cols-3">
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="py-2 text-start">
                  <h5>$137.00</h5>
                </header>
                <div className="py-3 d-flex justify-content-between align-items-center">
                  <span>Amount</span>
                  <button
                    style={{
                      color: "#fff",
                      background: "#15C15D",
                      padding: "4px 12px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Approved
                  </button>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50px",
                    }}
                    src={userImg}
                    alt=""
                  />
                  <div className="text-start p-4">
                    <span className="fw-bold">AM Antor</span>
                    <div>
                      <span>#5331</span>
                      <span className="ps-2 text-secondary">Date: 25 May</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="py-2 text-start">
                  <h5>$137.00</h5>
                </header>
                <div className="py-3 d-flex justify-content-between align-items-center">
                  <span>Amount</span>
                  <button
                    style={{
                      color: "#fff",
                      background: "#14A9F9",
                      padding: "4px 12px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Pending
                  </button>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50px",
                    }}
                    src={userImg}
                    alt=""
                  />
                  <div className="text-start p-4">
                    <span className="fw-bold">AM Antor</span>
                    <div>
                      <span>#5331</span>
                      <span className="ps-2 text-secondary">Date: 25 May</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="py-2 text-start">
                  <h5>$137.00</h5>
                </header>
                <div className="py-3 d-flex justify-content-between align-items-center">
                  <span>Amount</span>
                  <button
                    style={{
                      color: "#fff",
                      background: "#14A9F9",
                      padding: "4px 12px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Pending
                  </button>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50px",
                    }}
                    src={userImg}
                    alt=""
                  />
                  <div className="text-start p-4">
                    <span className="fw-bold">AM Antor</span>
                    <div>
                      <span>#5331</span>
                      <span className="ps-2 text-secondary">Date: 25 May</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "rgba(25, 59, 103, 0.02)",
          }}
          className="col-3 py-3"
        >
          <div className="px-2 d-flex justify-content-between align-items-center">
            <h6 className="fw-bold">Upcoming Meeting</h6>
            <i class="bi bi-three-dots-vertical"></i>
          </div>
          <hr />
          <div className="text-start">
            <Accordian></Accordian>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
