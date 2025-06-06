import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./adddriverdetails.css";

const AddDriver = ({ onAddDriver, editingDriver }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    license: "",
    vehicleId: "",
    driverId: "",
    image: "",
  });

  useEffect(() => {
    if (editingDriver) {
      setFormData(editingDriver);
    }
  }, [editingDriver]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validationFunctions = {
    name: (value) => (!value ? "Name is required." : ""),
    age: (value) => {
      if (!value) return "Age is required.";
      if (isNaN(value) || value <= 18) return "Age must be over 18.";
      return "";
    },
    address: (value) => (!value ? "Address is required." : ""),
    phone: (value) => {
      if (!value) return "Phone is required.";
      if (!/^\d{10}$/.test(value)) return "Phone must be a 10-digit number.";
      return "";
    },
    license: (value) => (!value ? "License is required." : ""),
    vehicleId: (value) => (!value ? "Vehicle ID is required." : ""),
    driverId: (value) => (!value ? "Driver ID is required." : ""),
    image: (value) => (!value && !editingDriver ? "Photo URL is required." : ""),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      const validate = validationFunctions[key];
      if (validate) {
        const error = validate(formData[key]);
        if (error) newErrors[key] = error;
      } else if (formData[key] === "") {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create new driver object
    const driverData = {
      name: formData.name,
      age: formData.age,
      address: formData.address,
      phone: formData.phone,
      license: formData.license,
      vehicleId: formData.vehicleId,
      driverId: formData.driverId,
      image: formData.image || "Images/default-driver.png",
    };

    // Call the parent component's handler
    if (typeof onAddDriver === 'function') {
      onAddDriver(driverData);
      navigate("/admin/drivers");
    } else {
      console.error('onAddDriver is not a function');
    }
  };

  return (
    <div className="form-container">
      <h2>{editingDriver ? "Edit Driver Details" : "Enter Driver Details"}</h2>
      <form onSubmit={handleSubmit}>
        {[
          {
            label: "Name",
            type: "text",
            name: "name",
            placeholder: "Enter name",
          },
          {
            label: "Age",
            type: "number",
            name: "age",
            placeholder: "Enter age",
          },
          {
            label: "Address",
            type: "text",
            name: "address",
            placeholder: "Enter address",
          },
          {
            label: "Phone",
            type: "text",
            name: "phone",
            placeholder: "Enter phone",
          },
          {
            label: "License",
            type: "text",
            name: "license",
            placeholder: "Enter license",
          },
          {
            label: "Vehicle ID",
            type: "text",
            name: "vehicleId",
            placeholder: "Enter vehicle ID",
          },
          {
            label: "Driver ID",
            type: "text",
            name: "driverId",
            placeholder: "Enter driver ID",
          },
          {
            label: "Photo URL",
            type: "url",
            name: "image",
            placeholder: "Enter photo URL",
          },
        ].map(({ label, type, name, placeholder }) => (
          <div className="form-group" key={name}>
            <label>{label}:</label>
            <div>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name] || ""}
                onChange={handleChange}
                required
              />
              {errors[name] && <p className="error">{errors[name]}</p>}
            </div>
          </div>
        ))}
        {formData.image && (
          <div className="image-preview">
            <img src={formData.image} alt="Driver preview" />
          </div>
        )}
        <button type="submit">
          {editingDriver ? "Update Driver" : "Add Driver"}
        </button>
      </form>
    </div>
  );
};

export default AddDriver;
