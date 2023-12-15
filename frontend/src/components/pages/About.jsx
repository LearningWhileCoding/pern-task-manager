import { Card } from "../ui/Card";

function About() {
  const about = `Welcome to Our Task Manager, your solution for efficient
  task management powered by the robust PERN Stack. We understand that in
  today's fast-paced world, staying organized is the key to success.
  That's why we've created a task manager that provides you with a seamless and intuitive experience.`;

  const techStack = ["PostgreSQL", "Express", "React", "Node.js"];

  const features = [
    `PERN Stack Power: Our task manager is built on the powerful PERN Stack. This ensures a high-performance and scalable solution that adapts to your growing needs.`,
    `Intuitive Interface: Say goodbye to complex interfaces. Our Task Manager boasts an intuitive design that makes task management a breeze. Whether you're a solo entrepreneur or part of a team, our user-friendly interface ensures everyone can hit the ground running.`,
    `Security You Can Trust: We prioritize the security of your data. With robust encryption and secure authentication, you can trust our Task Manager to keep your information safe and soun`
  ];

  return (
    <Card>
      <h1 className="font-bold justify-center text-4xl py-4 text-center text-green-400">
        About
      </h1>
      <h2 className="px-2 py-4 text-2xl">{about}</h2>
      <h1 className="font-bold justify-center text-2xl px-3 py-4 text-center">
        Our Tech Stack
      </h1>
      {techStack.map((tech, index) => (
        <h3 key={index} className="py-2">⭐ {tech}</h3>
      ))}
      <h1 className="font-bold justify-center text-2xl py-4 text-center">
        Features
      </h1>
      {features.map((feature, index) => (
        <p key={index} className="px-2 py-4">🐲 {feature}</p>
      ))}
    </Card>
  );
}

export default About;
