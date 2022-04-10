import React, { FunctionComponent } from "react";

interface ILoadingProps {
  loading: boolean;
}
export const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props;
  if (loading) {
    return <div> Loading... </div>;
  }
  return <div>{props.children}</div>;
};
