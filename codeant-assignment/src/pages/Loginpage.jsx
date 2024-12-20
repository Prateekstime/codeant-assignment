import React, { useState } from 'react';

export default function Loginpage() {
  const [isSaas, setIsSaas] = useState(true);

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-serif mb-6 text-center">CodeAnt AI</h2>
        <h2 className="text-3xl font-semibold mb-6 text-center">Welcome to CodeAnt AI</h2>

        <div className="flex justify-center mb-4 ">
          <button
            className={`transition-all duration-500 px-4 py-2 rounded-l ${isSaas ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsSaas(true)}
          >
            SAAS
          </button>
          <button
            className={`transition-all duration-500 px-4 py-2 rounded-r ${!isSaas ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsSaas(false)}
          >
            Self-hosted
          </button>
        </div>

        {isSaas ? (
          <div className="space-y-4">
            <button className="w-full px-4 py-2 font-semibold border-gray-300 border rounded  transition-all duration-300 hover:bg-gray-700">Sign in with GitHub</button>
            <button className="w-full px-4 py-2 font-semibold border-black border rounded transition-all duration-500 hover:bg-blue-500">Sign in with Bitbucket</button>
            <button className="w-full px-4 py-2 border-black border rounded font-semibold transition-all duration-500 hover:bg-indigo-500">Sign in with Azure DevOps</button>
            <button className="w-full px-4 py-2 font-semibold bg-white border-black border rounded transition-all duration-500 hover:bg-red-500">Sign in with GitLab</button>
          </div>
        ) : (
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition-all duration-500">Sign in with Self-hosted GitLab</button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded transition-all duration-500 hover:bg-green-500">Sign in with SSO</button>
          </div>
        )}
      </div>
    </div>
  );
}
