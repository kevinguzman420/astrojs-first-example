import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../utils/schemas";
import axios from "axios";

const BASE_API = import.meta.env.PUBLIC_API;

export default function CrudUserForm() {
  const [response, setResponse] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const submit = async (values) => {
    const { data } = await axios.post(`${BASE_API}`, values);
    setResponse(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className=" mt-[10px] p-[20px] space-y-4 bg-gray-200 rounded-xl "
    >
      <div>
        <Input {...register("name")} placeholder="Nombre..." />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <Input {...register("job")} placeholder="Trabajo..." />
        {errors.job && <p>{errors.job.message}</p>}
      </div>
      <div>
        <Input {...register("email")} placeholder="Email..." />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <Button type="submit" variant="flat" color="primary">
        Click Me
      </Button>

      {response && (
        <div>
          <h3>Respuesta:</h3>
          <pre>{JSON.stringify(response)}</pre>
        </div>
      )}
    </form>
  );
}
