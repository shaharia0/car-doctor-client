import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-xl" />
          <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-xl border-8 border-white" />
        </div>{" "}
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-red-500 font-bold text-xl">About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-3">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="py-3">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn btn-error bg-red-600 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
