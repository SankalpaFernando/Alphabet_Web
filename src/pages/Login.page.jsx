import { Field, Formik, useFormik } from "formik"
import { useNavigate } from "react-router-dom";
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
        validationSchema:UserSchema,
        onSubmit: (values) => {
            const {username,password} = values;
            dispatch(setLoading(true));
            dispatch(loginUser({username,password,navigate}));
        }
    })


    return (
        
        <div className="flex justify-center align-middle h-screen">
            <div className="card w-96 bg-base-100 shadow-xl m-auto">
                <div className="card-body">
                <h2 className="card-title text-lg">Sign In</h2>
                    <div className="">
                        <form  onSubmit={form.handleSubmit}>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Username or Email</span>
                                </div>
                                <input type="text" name="username" onChange={form.handleChange} value={form.values.username}  placeholder="johndoe@email.com" className="input input-bordered w-full max-w-xs" />
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{form.errors.username}</span>
                                </div>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <input type="password" name="password" onChange={form.handleChange} value={form.values.password} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                                <div className="label">
                                    <span className="label-text-alt text-red-500">{form.errors.password}</span>
                                </div>
                            </label>
                            <div className="flex justify-center">
                                <button className="btn btn-block" disabled={loading?"disabled":""}  type="submit">
                                    {
                                        loading && <span className="loading loading-spinner"></span>
                                    }
                                    Sign In
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}