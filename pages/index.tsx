import styled from "styled-components";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdLocationOn, MdMail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  gap: 2rem;
  & .top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 40rem) {
      flex-direction: column;
    }
    & .img-box {
      padding: 0.5rem;
      & img {
        object-fit: cover;
        object-position: center;
        border-radius: 1rem;
        box-shadow: 0 -0.25rem 0.5rem rgba(var(--dark-color), 0.25);
        @media screen and (max-width: 40rem) {
          width: 100%;
          height: 100%;
        }
      }
    }
    & h1 {
      color: rgb(var(--dark-color));
      text-shadow: 0 0.1rem 0.25rem rgba(var(--dark-color), 0.25);
      @media screen and (max-width: 40rem) {
        text-align: center;
      }
    }
    & h2 {
      color: rgb(var(--primary-color));
      font-weight: 600;
      font-size: 1.5rem;
      text-shadow: 0 0.1rem 0.25rem rgba(var(--primary-color), 0.25);
      @media screen and (max-width: 40rem) {
        text-align: center;
      }
    }
    & p {
      color: rgb(var(--dark-color), 0.75);
      @media screen and (max-width: 40rem) {
        text-align: justify;
      }
    }
  }
  & .body-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    @media screen and (max-width: 40rem) {
      flex-direction: column;
    }
    & aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-basis: 18rem;
      gap: 0.5rem;
      @media screen and (max-width: 40rem) {
        flex-grow: 1;
        width: 100%;
        margin-inline: auto;
      }
      & > div {
        width: 100%;
      }
      & h2 {
        position: relative;
        color: rgb(var(--secondary-color));
        text-shadow: 0 0.1rem 0.25rem rgba(var(--secondary-color), 0.25);
        font-weight: 600;
        font-size: 1.25rem;
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 0.25rem;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: rgb(var(--secondary-color), 0.1);
        }
        & span {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -0.25rem;
            left: 0;
            width: 2rem;
            height: 0.25rem;
            background-color: rgb(var(--secondary-color));
            border-radius: 0.5rem;
          }
        }
      }
      & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        & li {
          list-style: none;
          cursor: pointer;
          font-weight: 500;
          color: rgb(var(--dark-color), 0.75);
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease-in-out;
          &:hover {
            background-color: rgb(var(--primary-color), 0.1);
          }
          & a {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            & svg {
              font-size: 1.25rem;
            }
          }
        }
      }
    }
    & > .others {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
      }
      & h2 {
        position: relative;
        color: rgb(var(--secondary-color));
        text-shadow: 0 0.1rem 0.25rem rgba(var(--secondary-color), 0.25);
        font-weight: 600;
        font-size: 1.25rem;
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: rgb(var(--secondary-color), 0.1);
        }
        @media screen and (max-width: 40rem) {
          margin-bottom: 0.25rem;
        }
        & span {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -0.25rem;
            left: 0;
            width: 2rem;
            height: 0.25rem;
            background-color: rgb(var(--secondary-color));
            border-radius: 0.5rem;
          }
        }
      }
      & ul {
        padding-left: 1.75rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        & li {
          cursor: pointer;
          font-weight: 500;
          color: rgb(var(--dark-color), 0.75);
          & a {
            display: block;
            & h3 {
              padding: 0.5rem;
              border-radius: 0.5rem;
              transition: all 0.2s ease-in-out;
              &:hover {
                background-color: rgb(var(--primary-color), 0.1);
              }
            }
            & p {
              padding-left: 0.5rem;
            }
          }
          & .description {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.5rem;
            cursor: auto;
            & p {
              @media screen and (max-width: 40rem) {
                text-align: justify;
              }
            }
            & .skills-used {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
              @media screen and (max-width: 40rem) {
                justify-content: center;
                align-items: center;
              }
              & span {
                color: rgb(var(--dark-color), 0.75);
                font-size: 0.75rem;
                font-weight: bold;
                padding: 0.5rem 1rem;
                border: 1px solid rgb(var(--primary-color));
                border-radius: 2rem;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                &:hover {
                  background: rgb(var(--primary-color));
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => (
  <Main>
    <div className="top container">
      <div className="img-box">
        <Image
          src={profile.src}
          width={200}
          height={200}
          draggable="false"
          alt=""
        />
      </div>
      <div className="dev">
        <h1>SUBID DAS</h1>
        <h2>Full-Stack Web Developer</h2>
        <p>
          Experienced Full-Stack Developer proficient in <b>Next.js</b>,{" "}
          <b>MERN Stack</b>, <b>Prisma</b>, <b>Firebase</b>, and{" "}
          <b>Framer Motion</b>. Passionate about creating intuitive user
          interfaces and delivering scalable and performant web applications.
          Deep understanding of <b>TypeScript</b> and its application in
          building robust software solutions.
        </p>
      </div>
    </div>
    <div className="body-content container">
      <aside>
        <div className="contact">
          <h2>
            <span>Contact</span>
          </h2>
          <ul>
            <li>
              <a
                href="mailto:itsmesubid@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdMail />
                <span>itsmesubid@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tele:+918902175210" target="_blank" rel="noreferrer">
                <BsFillPhoneFill />
                <span>+91 890 217 5210</span>
              </a>
            </li>
            <li>
              <a>
                <MdLocationOn />
                <span>Kolkata, West Bengal, India</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/itsme-Subid"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <span>github.com/itsme-Subid</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/devsubid"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                <span>linkedin.com/in/devsubid</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h2>
            <span>Skills</span>
          </h2>
          <ul>
            <li>Next.js</li>
            <li>Prisma</li>
            <li>SQL & NoSQL</li>
            <li>Framer Motion</li>
            <li>MERN Stack</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="languages">
          <h2>
            <span>Languages</span>
          </h2>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </aside>
      <div className="others">
        <div className="experience">
          <h2>
            <span>Experience</span>
          </h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/devsubid/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Simmi Foundation - Head of Engineering</h3>
                <p>(01/2023 - 04/2023)</p>
              </a>
              <div className="description">
                <ul>
                  <li>
                    Head of Engineering, Frontend Team Lead, and Full Stack
                    Developer Intern at Simmi Foundation
                  </li>
                  <li>
                    Promoted from Full Stack Developer to Frontend Team Lead,
                    and subsequently to Head of Engineering
                  </li>
                  <li>
                    Led the frontend development team, utilizing React.js,
                    Material UI, and Node.js
                  </li>
                  <li>
                    Mentored team members, managed tasks, and ensured timely
                    project delivery
                  </li>
                  <li>
                    Developed full-stack applications using the MERN stack
                  </li>
                  <li>
                    Collaborated with other teams for effective project
                    management
                  </li>
                  <li>
                    Fostered a culture of innovation and continuous improvement
                  </li>
                </ul>
                <div className="skills-used">
                  {[
                    "React.js",
                    "JavaScript",
                    "CSS Modules",
                    "Material-UI",
                    "React Formik",
                    "Node.js",
                    "Mongoose",
                    "MongoDB",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="projects">
          <h2>
            <span>Projects</span>
          </h2>
          <ul>
            <li>
              <a
                href="https://devsubid.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Portfolio</h3>
                <p>(04/2022 - 05/2023)</p>
              </a>
              <div className="description">
                <ul>
                  <li>
                    Seamless Communication: Convenient contact form for direct
                    communication.
                  </li>
                  <li>
                    Centralized Message Management: Organized hub for tracking
                    and managing messages.
                  </li>
                  <li>
                    Efficient Response Time: Promptly address inquiries and
                    feedback.
                  </li>
                  <li>
                    Authentication and Security: Secure access to the admin
                    dashboard.
                  </li>
                  <li>
                    Real-time Updates and Sync: Real-time synchronization of
                    contact form submissions.
                  </li>
                  <li>
                    User Experience and Validation: Intuitive design with input
                    validation.
                  </li>
                  <li>
                    Scalability and Performance: Optimized for handling
                    increasing message volumes.
                  </li>
                </ul>
                <div className="skills-used">
                  {[
                    "React.js",
                    "Three.js",
                    "Firebase",
                    "TypeScript",
                    "Styled-Components",
                    "Framer-Motion",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://youtube-shorts-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Youtube Shorts Clone</h3>
                <p>(05/2023 - 06/2023)</p>
              </a>
              <div className="description">
                <ul>
                  <li>
                    Youtube Shorts Replication: Visually stunning website
                    replicating Youtube Shorts feature.
                  </li>
                  <li>
                    Infinite Scroll Implementation: Seamless loading of content
                    as user scrolls.
                  </li>
                  <li>
                    Next.js, TypeScript, and Styled-Components Integration:
                    Utilizing and balancing these technologies effectively.
                  </li>
                  <li>
                    Responsive Design: Optimized user experience across
                    different devices.
                  </li>
                </ul>
                <div className="skills-used">
                  {["Next.js", "Typescript", "Styled-Components"].map(
                    (skill) => (
                      <span key={skill}>{skill}</span>
                    )
                  )}
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://webinrush.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>WebInRush</h3>
                <p>(12/2022 - 02/2023)</p>
              </a>
              <div className="description">
                <ul>
                  <li>
                    Developed and launched WebInRush, a full-stack web
                    application, using Next.js, TypeScript, Styled-Components,
                    Formik, NextAuth, Mongoose, and MongoDB.
                  </li>
                  <li>
                    Created a user-friendly platform for ordering custom
                    websites and facilitating seamless communication between
                    clients and developers.
                  </li>
                  <li>
                    Implemented Next.js for enhanced performance and server-side
                    rendering, ensuring a smooth and responsive user experience.
                  </li>
                  <li>
                    Utilized TypeScript to improve code maintainability,
                    scalability, and error detection, resulting in a robust and
                    reliable application.
                  </li>
                  <li>
                    Integrated Formik for efficient form handling, simplifying
                    the process of capturing user inputs and validating data.
                  </li>
                </ul>
                <div className="skills-used">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Styled-Components",
                    "Framer-Motion",
                    "Material-UI",
                    "Formik",
                    "NextAuth",
                    "Mongoose",
                    "MongoDB",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="education">
          <h2>
            <span>Education</span>
          </h2>
          <ul className="education-list">
            <li>
              <a>
                <h3>Surendranath Vidyaniketan - 12th Boards</h3>
                <p>(09/2021 - 06/2023)</p>
              </a>
              <div className="description">
                <p>
                  It{"'"}s a Government school in Kolkata, India. It is
                  affiliated to the West Bengal Council of Higher Secondary
                  Education.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Main>
);

export default Home;
