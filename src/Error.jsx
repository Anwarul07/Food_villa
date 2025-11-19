import React from "react";
import { useRouteError } from "react-router";

export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="err min-80 min-h-80 m-10">
      <h3>Oops !</h3>
      <h4>Some thing went Wrong</h4>
      <h4>Chcek url please </h4>
      <h4>status :{err.status} </h4>
      <h4>statusText :{err.statusText} </h4>
      <h4>{err.data} </h4>
    </div>
  );
};
