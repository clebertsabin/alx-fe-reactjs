import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
});

function FormikForm() {
    return (
        <div>
            <h2>Formik Registration Form</h2>

            <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Formik Registered User:", values);
                    alert("User registered successfully with Formik!");
                    resetForm();
                }}
            >
                <Form>
                    <div>
                        <Field name="username" placeholder="Username" />
                        <ErrorMessage
                            name="username"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div>
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage
                            name="Email"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div>
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="error"
                        />
                    </div>

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormikForm;
