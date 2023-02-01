import React from "react";

const Details = ({ data }) => {
  const { name, username, email, phone, website, address, company } = data;

  return (
    <div className="bg-slate-100 text-slate-900 p-3">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-4 p-4 lg:px-8 lg:py-14 rounded-lg lg:justify-items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-md">Company Name:</h1>
          <p>{company.name}</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-md">Contact:</h1>
          <p>{name}</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-md">City:</h1>
          <p>{address.city}</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-md">Street:</h1>
          <p>{address.street}</p>
        </div>
      </div>
      <div className="bg-white collapse text-center">
        <input type="checkbox" />
        <div className="collapse-title">
          <button className="p-2 px-20 lg:px-2 rounded-xl bg-orange-600 text-white">
            View Details
          </button>
        </div>
        <div className="collapse-content text-left shadow-2xl my-4 mx-6">
          <div className="flex flex-col bg-white mb-3 rounded-xl p-4">
            <h1 className="font-bold text-md">Description:</h1>
            <p>{company.catchPhrase}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 bg-white rounded-xl p-4">
            <div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">Contact Person:</h1>
                <p>{name}</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">Username:</h1>
                <p>{username}</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">Email:</h1>
                <p>{email}</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">Phone:</h1>
                <p>{phone}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">Address:</h1>
                <p>
                  `{address.street}','{address.suite}`','{address.zipcode}
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">City:</h1>
                <p>{address.city}</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">Website:</h1>
                <p>{website}</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-md">Company Name:</h1>
                <p>{company.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
