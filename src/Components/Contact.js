import React from "react";
import { LINKED_IN, MAIL_ID, MOBILE } from "../utility/constants";

const Contact = () => {
  return (
    <div className="p-6 sm:p-12 lg:p-32 min-h-[100dvh] flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center bg-pink-50 outline outline-pink-300 p-8 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📫 Let's Connect
        </h2>
        <p className="text-lg font-semibold text-gray-900 max-w-xl mb-8 text-center">
          I'm always open to discussing new opportunities, collaborations, or
          sharing ideas. Feel free to reach out!
        </p>

        <div className="space-y-4 text-gray-900">
          <p>
            📧 <span className="font-semibold">Email:</span>{" "}
            <a
              href={"mailto:" + MAIL_ID}
              className="text-blue-600 hover:underline"
            >
              {MAIL_ID}
            </a>
          </p>

          <p className="flex flex-row flex-wrap gap-1 items-center">
            <img
              className="w-4 h-4"
              src="data:image/png;base64,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"
              alt="LinkedIn"
            />
            <span className="font-semibold">LinkedIn:</span>
            <a
              href={LINKED_IN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {LINKED_IN}
            </a>
          </p>

          <p>
            📱 <span className="font-semibold">Phone:</span>{" "}
            <span>{MOBILE}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
