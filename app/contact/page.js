"use client";
import React, { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState();

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { name, email, phone, subject, message } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:3000/api/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), //  this line to send the form data
    });

    if (res.ok) {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    } else {
      setLoading(false);
      alert("Message not sent");
    }
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          error = "Name can only contain letters and spaces";
        }
        break;
      case "phone":
        if (!/^\d+$/.test(value)) {
          error = "Phone number can only contain numbers";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="overflow-x-hidden">
      <section className="bg-white pt-20 pb-[120px] ">
        <div className="container mx-auto pt-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-10 ">
                <span className="text-orange text-xl">Contact</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    Let’s
                  </span>
                  <br className="hidden lg:block" />
                  connect
                </h3>
              </div>

              <div className="flex flex-wrap flex-col gap-7">
                <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33366 5.33325H26.667C28.1337 5.33325 29.3337 6.53325 29.3337 7.99992V23.9999C29.3337 25.4666 28.1337 26.6666 26.667 26.6666H5.33366C3.86699 26.6666 2.66699 25.4666 2.66699 23.9999V7.99992C2.66699 6.53325 3.86699 5.33325 5.33366 5.33325Z"
                        stroke="#080808"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.3337 8L16.0003 17.3333L2.66699 8"
                        stroke="#080808"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-wrap flex-col flex-1">
                    <span className="paragraph !leading-none">Email Me</span>
                    <h5 className="text-xl font-bold font-Syne text-black-800 leading-7">
                      contact@waleediqbal.com
                    </h5>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0663 6.66658C21.3686 6.92067 22.5654 7.55759 23.5037 8.49583C24.4419 9.43407 25.0788 10.6309 25.3329 11.9333M20.0663 1.33325C22.772 1.63383 25.295 2.84548 27.2212 4.76926C29.1474 6.69304 30.3623 9.2146 30.6663 11.9199M29.3329 22.5599V26.5599C29.3344 26.9313 29.2584 27.2988 29.1096 27.639C28.9608 27.9793 28.7427 28.2847 28.469 28.5357C28.1954 28.7868 27.8724 28.9779 27.5206 29.0969C27.1688 29.2158 26.7961 29.26 26.4263 29.2266C22.3234 28.7808 18.3823 27.3788 14.9196 25.1333C11.698 23.0861 8.9667 20.3548 6.91959 17.1333C4.66622 13.6549 3.26391 9.69458 2.82625 5.57325C2.79293 5.20454 2.83675 4.83293 2.95492 4.48208C3.07309 4.13124 3.26301 3.80884 3.51261 3.53541C3.7622 3.26199 4.06599 3.04353 4.40464 2.89395C4.74329 2.74436 5.10937 2.66693 5.47959 2.66659H9.47959C10.1267 2.66022 10.754 2.88936 11.2446 3.3113C11.7352 3.73323 12.0557 4.31918 12.1463 4.95992C12.3151 6.24001 12.6282 7.49689 13.0796 8.70659C13.259 9.18382 13.2978 9.70247 13.1915 10.2011C13.0851 10.6997 12.8381 11.1574 12.4796 11.5199L10.7863 13.2133C12.6843 16.5513 15.4482 19.3152 18.7863 21.2133L20.4796 19.5199C20.8421 19.1614 21.2998 18.9144 21.7984 18.808C22.297 18.7017 22.8157 18.7405 23.2929 18.9199C24.5026 19.3713 25.7595 19.6844 27.0396 19.8533C27.6873 19.9446 28.2788 20.2709 28.7016 20.7699C29.1245 21.269 29.3491 21.906 29.3329 22.5599Z"
                        stroke="#080808"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-wrap flex-col flex-1">
                    <span className="paragraph !leading-none">Call Me</span>
                    <h5 className="text-xl font-bold font-Syne text-black-800 leading-7">
                      +1 234 567 890 | +1 234 567 890
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <form
                onSubmit={onSubmit}
                id="contact-form"
                action="mail.php"
                method="post"
                className="grid grid-cols-12 gap-[18px]"
              >
                <div className="col-span-12 md:col-span-6">
                  <label
                    className="text-sm font-normal font-Inter leading-tight mb-3 block"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                    type="text"
                    required
                    placeholder="Your name*"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    className="text-sm font-normal font-Inter leading-tight mb-3 block"
                    htmlFor="name"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                    type="text"
                    required
                    placeholder="Your Email*"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    className="text-sm font-normal font-Inter leading-tight mb-3 block"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                    type="text"
                    required
                    placeholder="Your Number*"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="col-span-12 md:col-span-6">
                  <label
                    className="text-sm font-normal font-Inter leading-tight mb-3 block"
                    htmlFor="subject"
                  >
                    Subject*
                  </label>
                  <input
                    id="subject"
                    className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none"
                    type="text"
                    required
                    placeholder="Your Subject*"
                    name="subject"
                    value={subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label
                    className="text-sm font-normal font-Inter leading-tight mb-3 block"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <input
                    id="message"
                    className="h-[110px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-black-800 focus:border-opacity-40 focus:outline-none resize-none"
                    type="text"
                    required
                    placeholder="Type Your Message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                  />
                </div>

                {/* Continue adding other fields similarly */}

                <div className="col-span-12">
                  <button
                    className="flex items-center flex-wrap btn-primary group"
                    type="submit"
                  >
                    Submit
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="currentColor"
                          strokeOpacity="0.9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <p className="form-message mt-3"></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
