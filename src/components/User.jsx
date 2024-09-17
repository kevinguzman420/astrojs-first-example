import { useEffect, useState } from "react";

export default function User({ userId }) {
  const [user, setUser] = useState(null);
  const API_URL_BASE = import.meta.env.PUBLIC_API;

  const getUser = async () => {
    const data = await fetch(`${API_URL_BASE}/${userId}`);
    const _user = await data.json();
    setUser(_user.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {!user ? (
        <div>Cargando...</div>
      ) : (
        <div className=" flex items-center justify-start ">
          <img className="w-[250px] h-auto rounded" src={user.avatar} alt="" />
          <div className="ml-3">
            <span>{user.id}</span>
            <h3 className="text-xl font-bold">
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      )}
    </>
  );
}
