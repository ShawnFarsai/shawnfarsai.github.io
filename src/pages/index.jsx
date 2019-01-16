import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.png";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero>
        <BigTitle>
          hello, <br /> i'm shawn farsai.
        </BigTitle>
        <Subtitle>
          I'm a mathematician turned javascript engineer who enjoys nerding out
          about latest web tech 🤓
        </Subtitle>
      </Hero>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Experian"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Bringing a fast and responsive front end experience to millions of
            users.
          </ProjectCard>
          <ProjectCard
            title="The Irvine Company"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Worked closely with The Irvine Company as a front end technical lead
            to build a new React/Node application
          </ProjectCard>
          <ProjectCard
            title="School IO"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Side Project I'm working. TOP SECRET 🤫
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Team player 1st, Javascript developer 2nd. I take ownership in my
            work and enjoy working with others who are equally as enthusiastic
            about web technologies. 🛠Javascript, React.js, Redux, GraphQL,
            Prisma, Apollo, SCSS, Webpack 🧰
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm a mathematician turned software developer from Orange County, CA.
          I love the thrill of learning and being challenged. I’m driven by
          technology’s power to improve lives - by way of increasing
          productivity, maximizing efficiency, and solving difficult problems.
          Outside of work, you can find me watching movies, reading from my
          kindle, hanging out with my Chihuahua, experimenting with music
          production, and playing overwatch with my girlfriend.
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:shawnfarsai@gmail.com">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://www.linkedin.com/in/shawn-farsai-42746a69/">
              Dribbble
            </a>{" "}
            & <a href="https://twitter.com/shawn_farsai">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Gatsby Starter Portfolio Cara.{" "}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
