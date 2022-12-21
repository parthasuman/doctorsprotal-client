import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [singUpError, setSingUpError] = useState("");
  const [createdUserEmail, SetCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSingUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully");
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })

      .catch((error) => {
        console.log(error);
        setSingUpError(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-protal-server-omega.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        SetCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[500px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">SingUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <input
            className="'btn btn-accent w-full p-4"
            value="Sing Up"
            type="submit"
          />
          {singUpError && <p className="text-red-600">{singUpError}</p>}
        </form>
        <p>
          Already have an account{" "}
          <Link className="text-primary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">
          COUNTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SingUp;
