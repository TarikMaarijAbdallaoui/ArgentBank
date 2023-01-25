import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const EditUser = ({ setToggleEdit }) => {
  const info = useSelector((state) => state.user.info);
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      firstName: info.firstName,
      lastName: info.lastName,
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div className="form-control">
          <div>
            <input {...register("firstName", {required: true})} />
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div>
            <input {...register("lastName", {required: true})} />
            {errors.lastName && <span>This field is required</span>}
          </div>
        </div>
        <div className="form-control">
                <input className="button" type="submit" value="Save" />
                <input className="button" type="button" value="Cancel" onClick={() => setToggleEdit(false)} />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
