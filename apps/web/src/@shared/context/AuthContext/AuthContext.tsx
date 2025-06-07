import React, { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { IUserEntity } from "src/@shared/interfaces/entities/user.entity";
import { IAuthContextType } from "./@types/auth-context.types";
import LocalStorageAdapter from "src/@shared/infra/cache/LocalStorageAdapter";
import { localStorageKeys } from "src/@shared/config";

export const AuthContext = createContext({} as IAuthContextType)

export const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [currentUserAuth, setCurrentUserAuth] = useState<IUserEntity | undefined>();

  const onGetLocal = () => {
    if(currentUserAuth) return

    const data = LocalStorageAdapter.get(localStorageKeys.USER);
    if(!data) return

    const userEntity = JSON.parse(data) as IUserEntity;

    setCurrentUserAuth(userEntity)
  }

  useEffect(() =>{
    onGetLocal()
  },[])

  const onSaveLocal = useCallback((data: IUserEntity) => {
    LocalStorageAdapter.set(localStorageKeys.USER, JSON.stringify(data))
  }, [])

  const handleGetUserAuth = useCallback((email: string) => {
    if(email === "nathan.rodrigu3s@gmail.com")
    {
      const data = {
        email: "nathan.rodrigu3s@gmail.com",
        name: "Nathan Pereira",
        uuid: ""
      } as IUserEntity
      onSaveLocal(data)
      setCurrentUserAuth(data)
      return
    }
    const data ={
      email: "cbrandao1401@gmail.com",
      name: "Carollina Brandão",
      uuid: "37db669e-c6d2-47f8-953a-7c9aec809afb"
    } as IUserEntity
    onSaveLocal(data)
    setCurrentUserAuth(data)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUserAuth,
        handleGetUserAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}