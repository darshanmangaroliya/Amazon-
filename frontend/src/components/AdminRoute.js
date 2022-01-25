import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
  const usersignin = useSelector((state) => state.usersignin);
  const { userinfo } = usersignin;
  return (
    <Route
      {...rest}
      render={(props) =>
        userinfo && userinfo.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin" />
        )
      }
    ></Route>
  );
}