import Head from "next/head";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdLocationOn, MdMail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const animateBefore = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100vh);
    }
`;
const animateAfter = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100vh);
    }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & .top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 40rem) {
      flex-direction: column;
    }
    & img {
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      box-shadow: 0 -0.25rem 0.5rem rgba(var(--dark-color), 0.25);
      @media screen and (max-width: 40rem) {
        width: 100%;
        height: 100%;
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
    &::before {
      content: "";
      position: absolute;
      top: -20rem;
      left: -10rem;
      width: 40rem;
      height: 40rem;
      border-radius: 50%;
      background: radial-gradient(
        rgba(var(--primary-color), 0.175),
        transparent,
        transparent
      );
      animation: ${animateBefore} 15s infinite;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -20rem;
      right: -10rem;
      width: 40rem;
      height: 40rem;
      border-radius: 50%;
      background: radial-gradient(
        rgba(var(--secondary-color), 0.175),
        transparent,
        transparent
      );
      animation: ${animateAfter} 15s infinite;
      z-index: -1;
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
      width: 20rem;
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
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        & li {
          list-style: none;
          cursor: pointer;
          font-weight: 500;
          color: rgb(var(--dark-color), 0.75);
          & a {
            display: flex;
            align-items: center;
            @media screen and (max-width: 40rem) {
              flex-direction: column;
              align-items: flex-start;
            }
            & h3 {
              padding: 0.5rem;
              border-radius: 0.5rem;
              transition: all 0.2s ease-in-out;
              &:hover {
                background-color: rgb(var(--primary-color), 0.1);
              }
            }
            & span {
              @media screen and (max-width: 40rem) {
                padding: 0.5rem;
              }
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

const og = {
  title: "SUBID DAS",
  describedTitle: "RESUME of SUBID DAS",
  description:
    "Resume-2023 is a visually stunning resume website built using Next.js, TypeScript, and Styled-Components.",
  image: profile.src,
  url: "https://itsme-subid.vercel.app/",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{og.title}</title>
        <meta name="google-site-verification" content="aUOx7BZBGMEAbtDsLf9bN1BvycMZwahF4zDqu0EtQCw" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="description" content={og.description} />

        <link rel="canonical" href={og.url} />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Full-Stack Developer",
            "@id": ${og.url},
            "name": ${og.describedTitle},
            "url": ${og.url},
            "sameAs": [
              "https://www.instagram.com/itsme_subid/",
              "https://twitter.com/ItsmeSubid"
            ],
            "logo": {
              "@type": "ImageObject",
              "@id": ${og.url},
              "inLanguage": "en-US",
              "url": ${og.image},
              "contentUrl": ${og.image},
              "width": 1000,
              "height": 1000,
              "caption": "itsme-Subid"
            },
            "image": { "@id": ${og.url} }
          },
          {
            "@type": "WebPage",
            "@id": ${og.url},
            "url": ${og.url},
            "name": ${og.describedTitle},
            "isPartOf": {
              "@id": ${og.url}
            },
            "about": { "@id": ${og.url} },
            "description": ${og.description},
            "inLanguage": "en-US"
          }
        ]
      }
      `}
        </script>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={og.title} />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.describedTitle} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={og.url} />
        <meta property="twitter:title" content={og.describedTitle} />
        <meta property="twitter:description" content={og.description} />
        <meta property="twitter:image" content={og.image} />
        <meta name="twitter:site" content="@itsme-Subid" />
        <meta name="twitter:creator" content="@itsme-Subid" />
        <meta name="theme-color" content="#fff" />
        <meta name="next-head-count" content="26" />
      </Head>
      <Main>
        <div className="top container">
          <Image
            src={profile}
            width={200}
            height={200}
            draggable="false"
            alt=""
          />
          <div className="dev">
            <h1>SUBID DAS</h1>
            <h2>Full-Stack Web Developer</h2>
            <p>
              I{"'"}m a Full-Stack Developer specializing in the MERN Stack with
              typescript, with a particular focus on Frontend development. I
              {"'"}m an enthusiastic and passionate self-taught learner, always
              striving to learn and apply new technologies. I have the drive and
              ambition to succeed and is not afraid of hard work and dedication.
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
                    href="https://linkedin.com/in/itsme-subid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                    <span>linkedin.com/in/itsme-subid</span>
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
                <li>React.js</li>
                <li>Styled-Components</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className="languages">
              <h2>
                <span>Languages</span>
              </h2>
              <ul>
                <li>Typescript</li>
                <li>Javascript</li>
                <li>C/C++</li>
              </ul>
            </div>
          </aside>
          <div className="others">
            <div className="projects">
              <h2>
                <span>Projects</span>
              </h2>
              <ul>
                <li>
                  <a
                    href="https://webinrush.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>WebInRush</h3> <span>(12/2022 - Present)</span>
                  </a>
                  <div className="description">
                    <p>
                      Developed and launched a full-stack web application called
                      WebInRush using Next.js, TypeScript, Styled-Components,
                      Formik, NextAuth, Mongoose, and MongoDB. The platform
                      allows users to sign up and place orders for custom
                      websites, and talk to the Developers.
                    </p>
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
                <li>
                  <a
                    href="https://infotech-success-point.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>Infotech Success Point</h3>{" "}
                    <span>(12/2022 - 01/2023)</span>
                  </a>
                  <div className="description">
                    <p>
                      Created and designed a responsive front-end web
                      application for Infotech Success Point using Next.js,
                      TypeScript and Styled-Components, Framer-motion,
                      Material-UI. The platform displays various web
                      development, web design, and digital marketing courses,
                      offering a visually appealing and user-friendly browsing
                      experience.
                    </p>
                    <div className="skills-used">
                      {[
                        "Next.js",
                        "TypeScript",
                        "Styled-Components",
                        "Framer-Motion",
                        "Material-UI",
                      ].map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="https://movie108.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>Movie108</h3> <span>(10/2022 - 11/2022)</span>
                  </a>
                  <div className="description">
                    <p>
                      Developed and implemented a full-stack web application
                      using React.js, Styled-Components, Node.js, Express.js,
                      and MongoDB. The platform, called Movie108, allows users
                      to sign up, add their reviews and ratings for movies, and
                      view reviews of any movie on the site.
                    </p>
                    <div className="skills-used">
                      {[
                        "React.js",
                        "Styled-Components",
                        "Node.js",
                        "Express.js",
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
                    <h3>Surendranath Vidyaniketan</h3> <span>12th Boards</span>{" "}
                    <span>(09/2021 - Present)</span>
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
    </>
  );
}
