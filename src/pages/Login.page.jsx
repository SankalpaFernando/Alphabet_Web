import { Field, Formik, useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Label, Checkbox, Card, Spinner } from "flowbite-react"
import { UserSchema } from "../schema/user.schema"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../redux/api/user";
import { setLoading } from "../redux/slice/user";

export default () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.user.loading);
    const navigate = useNavigate();


    const form = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: UserSchema,
        onSubmit: (values) => {
            const { username, password } = values;
            dispatch(setLoading(true));
            dispatch(loginUser({ username, password, navigate }));
        }
    })


    return (

        <div className="flex justify-center align-middle h-screen">
            <Card className="w-5/6 md:w-1/2 lg:w-1/4 m-auto">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sign In</h5>
                <form onSubmit={form.handleSubmit} className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email or Username" />
                        </div>
                        <TextInput onChange={form.handleChange} id="email1" name="username" type="text" placeholder="name@flowbite.com" helperText={
                            <>
                                {
                                    form.errors.username && form.touched.username &&
                                    <span className="text-red-500">{form.errors.username}</span>
                                }
                            </>
                        } />

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                        </div>
                        <TextInput id="password1" name="password" onChange={form.handleChange} type="password" helperText={
                            <>
                                {
                                    form.errors.password && form.touched.password &&
                                    <span className="text-red-500">{form.errors.password}</span>
                                }
                            </>
                        } />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit" >
                        {loading && <Spinner className="mr-3" aria-label="spinner example" />}
                        Sign In</Button>
                </form>
            </Card>

        </div>
    )
}