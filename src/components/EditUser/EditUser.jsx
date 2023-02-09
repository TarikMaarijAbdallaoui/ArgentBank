import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editUser } from "../../store/actions/userActions";

const EditUser = ({ setToggleEdit }) => {
  const dispatch = useDispatch()
  const info = useSelector((state) => state.user.info);
  const token = useSelector((state) => state.user.token)
  console.log("¨Token", token)
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      firstName: info.firstName,
      lastName: info.lastName,
    },
  });

  const handleEdit= (data, token) => {
    const {firstName, lastName} = data
    dispatch(editUser({firstName, lastName, token}))
    setToggleEdit(false)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(data => handleEdit(data, token))}>
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
