import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CallToAction = () => {
  const formSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
  });
  return (
    <main>
      {" "}
      <section
        className="CallToAction font-primary bg-DarkBlue1 rounded-lg p-4  xxs:my-6  xxs:mx-8
  mx-auto xxs:p-4
  xs:p-6 sm:p-8 md:p-8 grid xxs:grid-cols-1 text-slate-200 
  xxs:space-y-4 text-center
  cta-center
  md:w-[40rem]
  md:mx-auto
  shadow-medium
  absolute
 md: left-60
  md:-bottom-[140rem]
  z-40
xxs:left-[0.15rem]
xxs:right-5
  "
      >
        <h2 className="font-bold xxs:text-sm   font-secondary md:text-2xl">
          Get early access today
        </h2>
        <p className="xxs:text-[0.65rem] xxs:leading-5">
          {" "}
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(value, resetForm) => {
            console.log(value.email);
            resetForm();
          }}
          validationSchema={formSchema}
        >
          <Form className="xxs:space-y-2  md:grid md:grid-cols-[3fr_1fr] md:gap-x-6">
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              className="   block xxs:w-full shadow-md
        mx-auto text-justify text-sm my-4 font-bold rounded-3xl placeholder:text-slate-300  outline-none xxs:py-2 indent-4
        md:w-[400px]
        xxs:placeholder:text-xs
        text-black
        "
            />

            <button
              type="submit"
              className="font-bold rounded-3xl bg-gradient-to-r from-Cyan to-Blue
          shadow-medium xxs:w-[100%] 
        mx-auto text-center text-sm 
        md:w-[10rem]
        md:text-xs
        inline-block
        xxs:py-2
        md:h-10
        md:flex
        md:items-center
        md:justify-center
        xxs:text-xs
        "
            >
              Get Started For Free
            </button>
            <ErrorMessage name="email" component="div" className="msg" />
          </Form>
        </Formik>
      </section>
    </main>
  );
};

export default CallToAction;
