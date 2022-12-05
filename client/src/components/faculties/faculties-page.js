import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../ui/header/header";
import "../faculties/style.css";
import { ax } from "../../api";

const FacultiesPage = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const getFaculties = () => {
      ax
        .get("faculties")
        .then((response) => {
          const data = response.data;
          setFaculties(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFaculties();
  }, []);
  return (
    <div>
      <Header />
      {faculties.map((faculty) => (
        <div>
          <div className="faculty-container">
            <img
              className="faculty-image-container"
              src={faculty.imageUrl}
              alt="faculty_image"
            />
            <p className="faculty-text">
              <p>{faculty.name}</p>
              <p>{faculty.address}</p>
              <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
              <p>{faculty.phone}</p>
              <a href={faculty.url}>{faculty.url.replace(/^https?:\/\//, '').replace('/$', '')}</a>
            </p>
          </div>
          <Accordion>
            <AccordionSummary
              id={"1"}
              aria-controls="panel1content"
              expandIcon={<ExpandMore />}
            >
              <p className="dep-text">Кафедри</p>
            </AccordionSummary>
            <AccordionDetails>
              {faculty.departments.map((dep) => (
                <div>
                  <div className="faculty-container">
                    <img
                      className="dep-image-container"
                      src={dep.imageUrl}
                      alt="depContainer"
                    />
                    <p className="department-text">
                      <a href={dep.url}>{dep.name}</a>
                      <p>{dep.phone}</p>
                      <a href={`mailto:${dep.email}`}>{dep.email}</a>
                    </p>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>

          <hr></hr>
          <p></p>
        </div>
      ))}
    </div>
  );
};
export default FacultiesPage;
