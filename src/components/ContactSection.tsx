import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: "Test",
          reply_to: "test@test.com",
          message: "Test depuis production",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        alert("OK CA MARCHE");
      })
      .catch((error) => {
        console.log("EmailJS error:", error);
        alert(`Erreur 😢 ${error?.text || "Regarde la console"}`);
      });
  }

  return (
    <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full h-full flex flex-col">
      <h3 className="text-md text-[#FDAFBF] font-bold mb-4 text-center">
        Envoyer un message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-grow">
        <input
          type="text"
          name="from_name"
          placeholder="Nom"
          required
          className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white text-sm"
        />

        <input
          type="email"
          name="reply_to"
          placeholder="Email"
          required
          className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white text-sm"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          required
          className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white text-sm"
        />

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-[#FD6E8B] hover:bg-[#FDAFBF] transition text-black font-semibold px-4 py-2 rounded-md text-sm"
          >
            Envoyer
          </button>
        </div>

        {success && (
          <p className="text-green-400 text-xs text-center mt-2">
            Message envoyé
          </p>
        )}
      </form>
    </div>
  );
}