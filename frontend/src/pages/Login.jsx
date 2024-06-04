import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { login, error, loading } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.email, data.username);
    await login(data.email, data.password);
    console.log(error);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-md mt-20 p-10">
        <h1 className="text-center font-semibold text-lg pb-3">Login</h1>
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email">Email:</label>
          <input
            className="rounded-md border-2 border-gray-200"
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 block mb-2">
              {errors.email.message}
            </span>
          )}

          <label htmlFor="password">Password:</label>
          <input
            className="rounded-md border-2 border-gray-200 "
            type="password"
            id="password"
            name="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500 block mb-2">
              {errors.password.message}
            </span>
          )}

          <button
            className="bg-green-500 justify-center shadow-md text-white mt-3"
            type="submit"
          >
            Login
          </button>
          {error && <span className="text-red-500 block mt-2">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
