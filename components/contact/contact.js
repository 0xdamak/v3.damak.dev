import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/section/";
import { Button } from "../ui/button";
import { useContactForm } from "../../hooks/useContactForm";
import { containerVariants, itemVariants, contactMethods } from "./utils";
import ReCAPTCHA from "react-google-recaptcha";
import classes from "./contact.module.scss";

export function Contact() {
  const [focusedField, setFocusedField] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const {
    alert,
    loading,
    captchaError,
    recaptchaRef,
    handleCaptchaChange,
    handleCaptchaExpired,
    submitForm,
  } = useContactForm();

  function onSubmit(data) {
    submitForm(data, reset);
  }

  return (
    <Section
      id="contact"
      heading="Let's Connect"
      tagline="Ready to start your next project?"
      bgText="contact"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={classes.container}
      >
        <motion.div variants={itemVariants} className={classes.introSection}>
          <p className={classes.introText}>
            I&apos;m always excited to work on new projects and collaborate with
            amazing people. Whether you have a project in mind, need technical
            consultation, or just want to say hello, I&apos;d love to hear from
            you!
          </p>
        </motion.div>

        <div className={classes.contactContent}>
          <motion.div variants={itemVariants} className={classes.contactInfo}>
            <h4 className={classes.contactTitle}>Get in Touch</h4>
            <div className={classes.contactMethods}>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className={classes.contactMethod}
                  whileHover={{
                    scale: 1.005,
                    transition: { type: "spring", stiffness: 100 },
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={classes.methodIcon}>{method.icon}</div>
                  <div className={classes.methodContent}>
                    <h5 className={classes.methodTitle}>{method.title}</h5>
                    <p className={classes.methodValue}>{method.value}</p>
                    <span className={classes.methodDescription}>
                      {method.description}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={classes.formSection}>
            <h4 className={classes.formTitle}>Send a Message</h4>
            <motion.form
              className={classes.contactForm}
              onSubmit={handleSubmit(onSubmit)}
              layout
            >
              <div className={classes.formRow}>
                <div className={classes.formGroup}>
                  <motion.input
                    id="name"
                    type="text"
                    placeholder=" "
                    {...register("name", {
                      required: "Please enter your name",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    className={`${
                      focusedField === "name" ? classes.focused : ""
                    } ${errors.name ? classes.error : ""}`}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <label htmlFor="name">Your Name *</label>
                  {errors.name && (
                    <span className={classes.errorMessage}>
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <fieldset className={classes.formGroup}>
                  <motion.input
                    id="email"
                    type="email"
                    placeholder=" "
                    {...register("email", {
                      required: "Please enter your email address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className={`${
                      focusedField === "email" ? classes.focused : ""
                    } ${errors.email ? classes.error : ""}`}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <label htmlFor="email">Email Address *</label>
                  {errors.email && (
                    <span className={classes.errorMessage}>
                      {errors.email.message}
                    </span>
                  )}
                </fieldset>
              </div>

              <fieldset className={classes.formGroup}>
                <motion.input
                  id="subject"
                  type="text"
                  placeholder=" "
                  {...register("subject", {
                    required: "Please add a subject for your message",
                    minLength: {
                      value: 3,
                      message: "Subject must be at least 3 characters",
                    },
                  })}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField("")}
                  className={`${
                    focusedField === "subject" ? classes.focused : ""
                  } ${errors.subject ? classes.error : ""}`}
                  whileFocus={{ scale: 1.02 }}
                />
                <label htmlFor="subject">Subject *</label>
                {errors.subject && (
                  <span className={classes.errorMessage}>
                    {errors.subject.message}
                  </span>
                )}
              </fieldset>

              <fieldset className={classes.formGroup}>
                <motion.textarea
                  id="message"
                  placeholder=" "
                  rows="6"
                  {...register("message", {
                    required: "Please write your message",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  className={`${
                    focusedField === "message" ? classes.focused : ""
                  } ${errors.message ? classes.error : ""}`}
                  whileFocus={{ scale: 1.02 }}
                />
                <label htmlFor="message">Your Message *</label>
                {errors.message && (
                  <span className={classes.errorMessage}>
                    {errors.message.message}
                  </span>
                )}
              </fieldset>

              <motion.div
                className={classes.captchaContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  onExpired={handleCaptchaExpired}
                  theme="dark"
                  size="normal"
                  className={`${classes.recaptcha} ${
                    captchaError ? classes.captchaError : ""
                  }`}
                />
              </motion.div>

              <Button
                type="submit"
                loading={loading}
                loadingText="Sending..."
                className={classes.submitButton}
              >
                Send Message
              </Button>

              <AnimatePresence>
                {alert.show && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`${classes.alert} ${
                      alert.type === "success" ? classes.success : classes.error
                    }`}
                  >
                    <span>{alert.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
