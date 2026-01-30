import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget; // ✅ on garde la ref tout de suite

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSuccess(true);
        form.reset(); //
      })
      .catch((error) => {
        console.log("EmailJS error object:", error);
        console.log("status:", (error as any)?.status);
        console.log("text:", (error as any)?.text);
        alert(`Erreur 😢 ${(error as any)?.text || "Regarde la console"}`);
      });
  }

  return (
    <div className="shadow-xl rounded-xl p-6 sm:p-8 w-full h-full flex flex-col">
      <h3 className="text-md text-[#FFE5B4] font-bold mb-4 text-center">
        Envoyer un message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-grow">
        <input
          type="text"
          name="from_name"
          placeholder="Nom"
          required
          className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-[#FFBF69]"
        />

        <input
          type="email"
          name="reply_to"
          placeholder="Email"
          required
          className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-[#FFBF69]"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          required
          className="bg-black/60 border border-white/20 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-[#FFBF69] resize-none"
        />

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-[#FFBF69] hover:bg-[#E88866] transition text-black font-semibold px-4 py-2 rounded-md text-sm"
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
