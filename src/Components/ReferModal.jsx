import { useState } from 'react';

const ReferModal = ({open, handleClose}) => {
    const [form, setForm] = useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: ''
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      };
    
      const validate = () => {
        let tempErrors = {};
        tempErrors.referrerName = form.referrerName ? "" : "This field is required.";
        tempErrors.referrerEmail = form.referrerEmail ? "" : "This field is required.";
        tempErrors.refereeName = form.refereeName ? "" : "This field is required.";
        tempErrors.refereeEmail = form.refereeEmail ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          fetch('http://localhost:3000/referrals', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
      };
    
      return (
        open && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
              <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    type="text"
                    name="referrerName"
                    value={form.referrerName}
                    onChange={handleChange}
                  />
                  {errors.referrerName && <span className="text-red-600">{errors.referrerName}</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Email</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    type="email"
                    name="referrerEmail"
                    value={form.referrerEmail}
                    onChange={handleChange}
                  />
                  {errors.referrerEmail && <span className="text-red-600">{errors.referrerEmail}</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Friends Name</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    type="text"
                    name="refereeName"
                    value={form.refereeName}
                    onChange={handleChange}
                  />
                  {errors.refereeName && <span className="text-red-600">{errors.refereeName}</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Friends Email</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    type="email"
                    name="refereeEmail"
                    value={form.refereeEmail}
                    onChange={handleChange}
                  />
                  {errors.refereeEmail && <span className="text-red-600">{errors.refereeEmail}</span>}
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white p-2 rounded mt-4"
                >
                  Submit
                </button>
              </form>
              <button 
                className="absolute top-2 right-2 text-gray-600 block w-10 h-10 rounded-full bg-white text-red-500" 
                onClick={handleClose}
              >
                X
              </button>
            </div>
          </div>
        )
      );
}

export default ReferModal
