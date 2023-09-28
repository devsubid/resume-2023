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
        <h2>Frontend Developer</h2>
        <p>
          Experienced Frontend Developer proficient in <b>Next.js</b>,{" "}
          <b>Framer Motion</b>, <b>MERN Stack</b>, <b>Prisma</b>, and{" "}
          <b>Firebase</b>. Passionate about creating intuitive user interfaces
          and delivering scalable and performant web applications. Deep
          understanding of <b>TypeScript</b> and its application in building
          robust software solutions.
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
            <li>MERN Stack</li>
            <li>Framer Motion</li>
            <li>Prisma</li>
            <li>SQL & NoSQL</li>
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
                href="https://awesomesuite.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Awesomesuite - ReactJS Developer</h3>
                <p>(07/2023 - Present)</p>
              </a>
              <div className="description">
                <ul>
                  <li>
                    Currently working as a ReactJS Developer Intern at
                    AwesomeSuite, a leading software development company located
                    in Jaipur, Rajasthan, India, on a remote basis
                  </li>
                  <li>
                    Actively involved in software development projects, focusing
                    on building dynamic and responsive web applications
                  </li>
                  <li>
                    Leveraging React.js, I contribute to the creation of
                    engaging user interfaces, ensuring seamless navigation and a
                    top-notch user experience
                  </li>
                  <li>
                    Proficiently working with Redux to manage state and data
                    flow, optimizing application performance and data handling
                  </li>
                  <li>
                    Utilizing JavaScript to implement interactive and
                    user-friendly features that enhance the functionality of web
                    applications
                  </li>
                  <li>
                    Collaborating with cross-functional teams to integrate
                    RESTful APIs, enabling real-time data retrieval and updates
                  </li>
                  <li>
                    Implementing JSS (JavaScript Style Sheets) for efficient and
                    modular styling, maintaining a consistent and visually
                    appealing design
                  </li>
                  <li>
                    Currently working on the development of Awesome Social, a
                    cutting-edge social networking managing platform
                  </li>
                  <li>
                    Adhering to industry best practices and standards in
                    software development to deliver high-quality solutions.
                  </li>
                </ul>
                <div className="skills-used">
                  {["JavaScript", "React.js", "Redux", "Sass", "JSS"].map(
                    (skill) => (
                      <span key={skill}>{skill}</span>
                    )
                  )}
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://infotech-success-point.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>
                  Bharatiya Youth Computer Academy - Web Development Instructor
                </h3>
                <p>(04/2023 - Present)</p>
              </a>
              <div className="description">
                <ul>
                  <li>
                    Teaching and mentoring students in various aspects of web
                    development
                  </li>
                  <li>
                    Guiding students to acquire the skills and knowledge needed
                    for a successful career in the IT sector
                  </li>
                  <li>
                    Offering practical insights and real-world examples to
                    enhance students&apos; understanding
                  </li>
                  <li>
                    Covering a wide range of topics including HTML, CSS, BEM
                    (Block, Element, Modifier), Tailwind CSS, Bootstrap,
                    JavaScript, React.js, Node.js, Firebase, and MongoDB
                  </li>
                  <li>
                    Creating a dynamic and engaging learning environment to
                    facilitate effective learning
                  </li>
                  <li>
                    Providing individualized support to students to help them
                    overcome challenges
                  </li>
                  <li>
                    Organizing workshops, coding exercises, and projects to
                    reinforce learning
                  </li>
                  <li>
                    Evaluating student progress and offering constructive
                    feedback for improvement
                  </li>
                  <li>
                    Preparing students for job interviews and assisting with job
                    placement opportunities.
                  </li>
                </ul>
                <div className="skills-used">
                  {["Teaching", "Mentoring"].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://infotech-success-point.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Professional Freelancer</h3>
                <p>(09/2022 - Present)</p>
              </a>
              <div className="description">
                <ul>
                  <li>
                    Freelance Web and Mobile Developer, serving numerous clients
                    in the industry
                  </li>
                  <li>
                    Proficient in a wide range of technologies and tools to
                    deliver high-quality solutions
                  </li>
                  <li>
                    Specialized in TypeScript, Next.js, React.js, Node.js, and
                    Firebase for building web and mobile applications
                  </li>
                  <li>
                    Extensive experience in Front-End Development, utilizing
                    styled-components, Material-UI, and framer-motion for
                    creating engaging user interfaces
                  </li>
                  <li>
                    Well-versed in Full-Stack Development, with expertise in
                    server-side development using Express.js and database
                    management with MongoDB, MySQL, and SQL
                  </li>
                  <li>
                    Skilled in optimizing websites for Search Engine
                    Optimization (SEO) to improve online visibility
                  </li>
                  <li>
                    Proficiency in HTML5, UIX (User Interface Experience), and
                    FORMIK for creating interactive and user-friendly designs
                  </li>
                  <li>
                    Version control and collaboration using Git and GitHub
                  </li>
                  <li>
                    Knowledgeable in AJAX, JavaScript, and Cascading Style
                    Sheets (CSS) for dynamic and responsive web applications
                  </li>
                  <li>
                    Familiarity with popular front-end frameworks like React
                    Native for mobile app development
                  </li>
                  <li>
                    Experience with Prisma ORM and trpc for efficient data
                    handling
                  </li>
                  <li>
                    Cloud computing expertise with Google Cloud Platform (GCP).
                  </li>
                </ul>
                <div className="skills-used">
                  {[
                    "React Native",
                    "Prisma ORM",
                    "tRPC",
                    "Google Cloud Platform (GCP)",
                    "TypeScript",
                    "Next.js",
                    "React.js",
                    "Node.js",
                    "Firebase",
                    "framer-motion",
                    "SQL/NOSQL",
                    "Tailwind CSS",
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
          </ul>
        </div>
      </div>
    </div>
  </Main>
);

export default Home;
