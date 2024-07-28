import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import movierecom1 from "../assets/img/movierecom1.jpg";
import codeimg2 from "../assets/img/codeimg2.jpg";
// import projImg3 from "../assets/img/project-img3.png"; 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const tab1Projects = [
    {
      title: "Movie Recommendation",
      description: "Developed a movie recommendation system using NLTK for text processing and vectorization. Calculated cosine distances between movie vectors to find similarities and recommend top choices. Implemented a user-friendly interface with Streamlit for easy navigation.",
      imgUrl: movierecom1,
    },
    {
      title: "Project 2",
      description: "Design & Development",
      imgUrl: codeimg2,
    },
    {
      title: "Project 3",
      description: "Design & Development",
      imgUrl: codeimg2,
    }
  ];

  const tab2Projects = [
    {
      title: "Project 4",
      description: "Design & Development",
      imgUrl: codeimg2,
    },
    {
      title: "Project 5",
      description: "Design & Development",
      imgUrl: codeimg2,
    },
    {
      title: "Project 6",
      description: "Design & Development",
      imgUrl: codeimg2,
    }
  ];

  const tab3Projects = [
    {
      title: "Project 7",
      description: "Design & Development",
      imgUrl: codeimg2,
    },
    {
      title: "Project 8",
      description: "Design & Development",
      imgUrl: codeimg2,
    },
    {
      title: "Project 9",
      description: "Design & Development",
      imgUrl: codeimg2,
    }
  ];

  const tabs = [
    { eventKey: "first", title: "Tab 1", projects: tab1Projects },
    { eventKey: "second", title: "Tab 2", projects: tab2Projects },
    { eventKey: "third", title: "Tab 3", projects: tab3Projects }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Throughout my academic years, I have undertaken various projects that showcase my skills and interests in different areas. Here are some notable examples:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {tabs.map((tab) => (
                        <Nav.Item key={tab.eventKey}>
                          <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {tabs.map((tab) => (
                        <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey}>
                          <Row>
                            {tab.projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background" src={colorSharp2} />
    </section>
  );
};
