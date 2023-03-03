import React, { useContext } from "react";
import { User } from "../../types";

type Maybe<T> = T | undefined | null;

interface WithUserProps {
  user: User;
}

const UserCardContext = React.createContext<Maybe<WithUserProps>>(null);

export const withUserCardContext = <P extends object>(
  Component: React.ComponentType<Omit<P, "user">>
) => {
  const WithUserCardContext = ({ user, ...props }: P & WithUserProps) => {
    return (
      <UserCardContext.Provider value={{ user }}>
        <Component {...props} />
      </UserCardContext.Provider>
    );
  };

  return WithUserCardContext;
};

export const useUserCardContext = () => {
  const context = useContext<Maybe<WithUserProps>>(UserCardContext);

  if (!context) {
    throw new Error("useUserCardContext must be used within a UserCard");
  }

  return context;
};
