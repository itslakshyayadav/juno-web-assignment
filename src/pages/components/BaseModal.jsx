import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

export default function BaseModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div onClick={openModal}>{children}</div>
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white flex flex-col gap-5 px-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Close account</h1>
                    <button type="button" onClick={closeModal}>
                      <HiMiniXMark className="w-6 h-6"></HiMiniXMark>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-gray-400">
                      Email
                    </label>
                    <select
                      name=""
                      id=""
                      className="border py-2 px-1 rounded-md"
                    >
                      <option value="lakshya">email@product.com</option>
                      <option value="lakshya">lakshya</option>
                    </select>
                  </div>

                  <div className="flex gap-5 items-center">
                    <h1>Want to file UAR</h1>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="yes"
                        id="yes"
                        className="h-4 w-4"
                      />
                      <label htmlFor="yes" id="yes">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="yes"
                        id="no"
                        className="h-4 w-4"
                      />
                      <label htmlFor="no" id="no">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-gray-400">
                      Reason
                    </label>
                    <select
                      name=""
                      id=""
                      className="border py-2 px-1 rounded-md"
                    >
                      <option value="lakshya">Flagging logics triggered</option>
                      <option value="lakshya">lakshya</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-gray-400">
                      Note
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="border rounded-lg"
                    ></textarea>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id="lo"
                        name="done"
                        className="h-4 w-4"
                      />
                      <label htmlFor="" id="lo" name="done">
                        Charge closure fee
                      </label>
                    </div>
                    <button
                      type="button"
                      className="py-2 px-10 text-gray-400  bg-slate-200 hover:bg-indigo-800 hover:text-white rounded-lg"
                    >
                      Close Account
                    </button>
                  </div>

                  {/* <button
                    type="button"
                    onClick={closeModal}
                    className=" hover:bg-red-700 py-1 px-3 text-red-500 hover:text-white rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      closeModal();
                    }}
                    className="hover:text-white hover:bg-blue-500 py-1 px-3 text-blue-500 rounded-sm"
                  >
                    Submit
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
