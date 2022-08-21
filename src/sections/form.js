/** @jsxImportSource theme-ui */
import { useState } from "react";
import { Container, Heading, Box } from "theme-ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { RequestQuoteForm } from "models/request_quote_form.model";
import { toast } from "react-toastify";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function Form() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone Number is required").matches(phoneRegExp, "Phone Number is invalid"),
    startingLocationStreetAddress: Yup.string().required("Street Address is required"),
    startingLocationCity: Yup.string().required("City is required"),
    startingLocationZipCode: Yup.string().required("Zip Code is required"),
    destinationLocationStreetAddress: Yup.string().required("Street Address is required"),
    destinationLocationCity: Yup.string().required("City is required"),
    destinationLocationZipCode: Yup.string().required("Zip Code is required"),
    vehicleType: Yup.string()
      .oneOf(["Bus 75 Passengers", "Bus 65 Passengers", "Van 7 Passengers"])
      .required("Vehicle Type is Required"),
  });
  const defaultFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    startingLocationStreetAddress: "",
    startingLocationCity: "",
    startingLocationState: "MN",
    startingLocationZipCode: "",
    destinationLocationStreetAddress: "",
    destinationLocationCity: "",
    destinationLocationState: "MN",
    destinationLocationZipCode: "",
    additionalInfo: "",
    vehicleType: "",
  };
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: defaultFormValues,
  };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  // TODO: Handle Form Submission
  function onSubmit(payload) {
    const id = toast.loading("Submitting Form...");
    setLoading(true);
    const requestQuoteForm = new RequestQuoteForm(
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.phone,
      payload.company,
      payload.startingLocationStreetAddress,
      payload.startingLocationCity,
      payload.startingLocationState,
      payload.startingLocationZipCode,
      payload.destinationLocationStreetAddress,
      payload.destinationLocationCity,
      payload.destinationLocationState,
      payload.destinationLocationZipCode,
      payload.vehicleType,
      payload.additionalInfo
    );
    const body = {
      name: requestQuoteForm.getName(),
      vehicleType: requestQuoteForm.vehicleType,
      htmlText: requestQuoteForm.getHtml(),
      plainText: requestQuoteForm.getPlainText(),
    };

    fetch("/api/quote", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        toast.update(id, { render: "Success: Form Submitted!", type: "success", isLoading: false, autoClose: 4000 });
        reset(defaultFormValues);
      }
      if (res.status === 500) {
        toast.update(id, { render: "Error: Try again or Contact Us: ", type: "error", isLoading: false, autoClose: 8000 });
      }
    });
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
          <label className="form-label">Contact Information: </label>
          {/* <!-- Text input --> */}
          {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  {...register("firstName")}
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                />
                <label htmlFor="firstName">First name*</label>
                <div className="invalid-feedback">{errors.firstName?.message}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                />
                <label className="form-label" htmlFor="lastName">
                  Last name*
                </label>
                <div className="invalid-feedback">{errors.lastName?.message}</div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            {/* <!-- Email input --> */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <label className="form-label" htmlFor="email">
                  Email*
                </label>
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
            </div>

            {/* <!-- Phone input --> */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  {...register("phone")}
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                />
                <label className="form-label" htmlFor="phone">
                  Phone Number*
                </label>
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
            </div>
          </div>

          {/* <!-- Text input --> */}
          <div className="form-floating mb-4">
            <input
              type="text"
              name="Company"
              placeholder="Company name"
              className="form-control"
              {...register("company")}
            />
            <label className="form-label" htmlFor="Company">
              Company name
            </label>
          </div>

          <label className="form-label">Starting Location: </label>
          {/* <!-- Text input --> */}
          <div className="form-floating mb-4">
            <input
              type="text"
              name="startingLocationStreetAddress"
              placeholder="Street Address*"
              {...register("startingLocationStreetAddress")}
              className={`form-control ${errors.startingLocationStreetAddress ? "is-invalid" : ""}`}
            />
            <label className="form-label" htmlFor="startingLocationStreetAddress">
              Street Address*
            </label>
            <div className="invalid-feedback">{errors.startingLocationStreetAddress?.message}</div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  name="startingLocationCity"
                  placeholder="City"
                  {...register("startingLocationCity")}
                  className={`form-control ${errors.startingLocationCity ? "is-invalid" : ""}`}
                />
                <label className="form-label" htmlFor="startingLocationCity">
                  City*
                </label>
                <div className="invalid-feedback">{errors.startingLocationCity?.message}</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-floating">
                <input
                  type="text"
                  name="startingLocationState"
                  placeholder="State"
                  {...register("startingLocationState")}
                  className="form-control"
                  disabled
                  readOnly
                />
                <label className="form-label" htmlFor="startingLocationState">
                  State*
                </label>
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-floating">
                <input
                  type="text"
                  name="startingLocationZipCode"
                  placeholder="Zip Code"
                  {...register("startingLocationZipCode")}
                  className={`form-control ${errors.startingLocationZipCode ? "is-invalid" : ""}`}
                />
                <label className="form-label" htmlFor="startingLocationZipCode">
                  Zip Code*
                </label>
                <div className="invalid-feedback">{errors.startingLocationZipCode?.message}</div>
              </div>
            </div>
          </div>

          <label className="form-label">Destination Location: </label>
          {/* <!-- Text input --> */}
          <div className="form-floating mb-4">
            <input
              type="text"
              name="destinationLocationStreetAddress"
              placeholder="Street Address*"
              {...register("destinationLocationStreetAddress")}
              className={`form-control ${errors.destinationLocationStreetAddress ? "is-invalid" : ""}`}
            />
            <label className="form-label" htmlFor="destinationLocationStreetAddress">
              Street Address*
            </label>
            <div className="invalid-feedback">{errors.destinationLocationStreetAddress?.message}</div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  name="destinationLocationCity"
                  placeholder="City"
                  {...register("destinationLocationCity")}
                  className={`form-control ${errors.destinationLocationCity ? "is-invalid" : ""}`}
                />
                <label className="form-label" htmlFor="destinationLocationCity">
                  City*
                </label>
                <div className="invalid-feedback">{errors.destinationLocationCity?.message}</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-floating">
                <input
                  type="text"
                  name="destinationLocationState"
                  placeholder="State"
                  {...register("destinationLocationState")}
                  className="form-control"
                  disabled
                  readOnly
                />
                <label className="form-label" htmlFor="destinationLocationState">
                  State*
                </label>
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-floating">
                <input
                  type="text"
                  name="destinationLocationZipCode"
                  placeholder="Zip Code"
                  {...register("destinationLocationZipCode")}
                  className={`form-control ${errors.destinationLocationZipCode ? "is-invalid" : ""}`}
                />
                <label className="form-label" htmlFor="destinationLocationZipCode">
                  Zip Code*
                </label>
                <div className="invalid-feedback">{errors.destinationLocationZipCode?.message}</div>
              </div>
            </div>
          </div>

          {/* <!-- Message input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="additionalInfo">
              Additional Information
            </label>
            <textarea
              className="form-control"
              name="additionalInfo"
              rows="2"
              {...register("additionalInfo")}
            ></textarea>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="vehicle">
              Select Vehicle Type*
            </label>
            <br />
            <select
              className={`form-select ${errors.vehicleType ? "is-invalid" : ""}`}
              name="vehicleType"
              {...register("vehicleType")}
            >
              <option hidden disabled value="">
                {" "}
                -- select an option --{" "}
              </option>
              <option value="Bus 75 Passengers">Bus - 75 Passenger Capacity</option>
              <option value="Bus 65 Passengers">Bus - 65 Passenger Capacity</option>
              <option value="Van 7 Passengers">Van - 7 Passenger Capacity</option>
            </select>
          </div>
          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4" disabled={loading}>
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
