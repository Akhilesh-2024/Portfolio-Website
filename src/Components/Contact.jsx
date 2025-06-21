import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Sub-Sections/Alert";
import { Particles } from "./Sub-Sections/Particals";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handelAlert = (type,message) => {
    setShowAlert(true);
    setAlertType(type);
    setAlertMessage(message);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000)
  }

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_b49txxj",
        "template_9ddlbo9",
        {
          from_name: formData.name,
          to_name: "Akhilesh",
          from_email: formData.email,
          message: formData.message,
          from_number: formData.number,
        },
        "PQRmq2PxWdqjwTd-6"
      );
      setFormData({ name: "", email: "", message: "" , number:""});
      setIsLoading(false);
      console.log("Message Send Successfully");
      handelAlert("success","Your message has been Send.")
    } 
    catch (error) {
      console.log("Message Send Failed !!");
      console.log(error);
      handelAlert("danger","Error, Cant Send Your Message");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles className="absolute inset-0 -z-50 w-full" quantity={100} ease={80} color={"#ffffff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center p-10 max-w-md mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>  
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handelSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="field-input field-input-focus"
              value={formData.name}
              onChange={handelChange}
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="field-input field-input-focus"
              value={formData.email}
              onChange={handelChange}
              placeholder="Example@gmail.com"
              autoComplete="mobile email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="number" className="feild-label">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              className="field-input field-input-focus"
              value={formData.number}
              onChange={handelChange}
              placeholder="+91 12345 54321"
              autoComplete="number"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              rows="8"
              className="field-input field-input-focus"
              value={formData.message}
              onChange={handelChange}
              placeholder="Tell what you want to Build !"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 text-lg py-3 text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {isLoading ? "Sending" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
