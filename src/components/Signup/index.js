import { useState, useContext } from "react";
import { AuthContext } from "../../context";

export function Signup() {
  const { signup } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signup(userName, email, password);
  };

  return (
    <div className=" p-20 bg-emerald-100 rounded-xl">
      <form className="" onSubmit={handleSubmit}>
        <h2 className="mb-5 text-black font-bold text-2xl">
          Join an awesome community
        </h2>
<<<<<<< HEAD
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">
            <span>First Name</span>
          </label>
          <input
            className="bg-emerald-50 p-2 rounded-md my-2"
            placeholder="Your first name goes here"
            type="firstname"
            name="firstname"
            autoComplete="off"
            required
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">
            <span>Last Name</span>
          </label>
          <input
            className="bg-emerald-50 p-2 rounded-md my-2"
            placeholder="Your last name goes here"
            type="lastname"
            name="lastname"
            autoComplete="off"
            required
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
        </div>
=======

>>>>>>> b6677c5045d9b997d35ebc8b36e592977b88b897
        <div className="flex flex-col gap-2">
          <label htmlFor="userName">
            <span>Username</span>
          </label>
          <input
            className="bg-emerald-50 p-2 rounded-md my-2"
            placeholder="Your username goes here"
            type="username"
            name="username"
            autoComplete="off"
            required
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            <span>Email</span>
          </label>
          <input
            className="bg-emerald-50 p-2 rounded-md my-2"
            placeholder="Your email goes here"
            type="email"
            name="email"
            autoComplete="off"
            required
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">
            <span>Password</span>
          </label>
          <input
            className="bg-emerald-50 p-2 rounded-md my-2"
            placeholder="Your password goes here"
            type="password"
            name="password"
            autoComplete="off"
            required
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className=" bg-emerald-500 w-20 px-20 p-2 flex justify-center rounded-lg text-emerald-900 text-lg mt-5"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
