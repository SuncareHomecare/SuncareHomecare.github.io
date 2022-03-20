/** @jsxImportSource theme-ui */
import { Container, Heading, Box } from "theme-ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function Form() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    startingLocation: Yup.string().required("Starting Location is required"),
    destination: Yup.string().required("Destination is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone Number is required").matches(phoneRegExp, "Phone is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // TODO: Handle Form Submission
  function onSubmit(data) {
    // display form data on success
    console.log(data);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <section sx={styles.form} id="form">
      <Container>
        <Box sx={styles.form.headerBox}>
          <Heading as={"h1"} variant="heroPrimary" sx={styles.form.header}>
            Request A <span sx={{ color: "primary" }}> Vehicle</span>
          </Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="firstName">
                  First name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  {...register("firstName")}
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.firstName?.message}</div>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="lastName">
                  Last name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  {...register("firstName")}
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.lastName?.message}</div>
              </div>
            </div>
          </div>

          {/* <!-- Text input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="Company">
              Company name
            </label>
            <input type="text" name="Company" className="form-control" />
          </div>

          {/* <!-- Text input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="startingLocation">
              Starting Location (Address)*
            </label>
            <input
              type="text"
              name="startingLocation"
              {...register("startingLocation")}
              className={`form-control ${errors.startingLocation ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.startingLocation?.message}</div>
          </div>

          {/* <!-- Text input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="destination">
              Destination (Address)*
            </label>
            <input
              type="text"
              name="destination"
              {...register("destination")}
              className={`form-control ${errors.destination ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.destination?.message}</div>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              name="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          {/* <!-- Number input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="phone">
              Phone*
            </label>
            <input
              type="number"
              name="phone"
              {...register("phone")}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          {/* <!-- Message input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="AdditionalInfo">
              Additional information
            </label>
            <textarea className="form-control" name="AdditionalInfo" rows="4"></textarea>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="vehicle">
              Select Vehicle Type*
            </label>
            <br />
            <select className="select" required>
              <option value="Bus 75 Passengers">Bus - 75 Passenger Capacity</option>
              <option value="Bus 65 Passengers">Bus - 65 Passenger Capacity</option>
              <option value="Van 7 Passengers">Van - 7 Passenger Capacity</option>
            </select>
          </div>
          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
}

const styles = {
  form: {
    headerBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    header: {
      "&::after": {
        display: "block",
        content: '""',
        width: "50%",
        margin: "0 auto",
        borderBottom: "2px solid",
        borderBottomColor: "primary",
      },
    },
  },
};
