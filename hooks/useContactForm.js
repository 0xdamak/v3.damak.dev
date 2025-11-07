import { useState, useRef } from "react";

export function useContactForm() {
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  function handleCaptchaChange(token) {
    setCaptchaToken(token);
  }

  function handleCaptchaExpired() {
    setCaptchaToken(null);
  }

  function showAlert({ message, type }) {
    setAlert({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, 5000);
  }

  async function submitForm(formData, reset) {
    if (!captchaToken) {
      showAlert({
        message: "Please complete the reCAPTCHA verification",
        type: "error",
      });
      return;
    }

    setLoading(true);
    setAlert((prev) => ({ ...prev, show: false }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.status === "success") {
        showAlert({
          message: "Message sent successfully! 🎉 I'll get back to you soon.",
          type: "success",
        });
        reset();
        setCaptchaToken(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        showAlert({
          message: data.message || "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      showAlert({
        message: "Something went wrong. Please try again later. 😔",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    alert,
    loading,
    captchaToken,
    recaptchaRef,
    handleCaptchaChange,
    handleCaptchaExpired,
    submitForm,
  };
}
