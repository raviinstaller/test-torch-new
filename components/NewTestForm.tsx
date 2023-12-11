import React from "react";

import CardLayout from "@/components/CardLayout";
import TextField from "@/components/form/TextField";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface NewTestFormProps {
  isOpen: boolean;
  closeModal: () => void;
}

const NewTestForm = ({ isOpen, closeModal }: NewTestFormProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/90 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <CardLayout className="w-full max-w-md ">
                <Dialog.Panel className="transform overflow-hidden text-left gap-7 flex flex-col transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl 2xl:text-3xl font-bold text-slate-950"
                  >
                    Create new test
                  </Dialog.Title>
                  <div className="flex flex-col gap-4 w-full">
                    <TextField
                      label="Test Name"
                      placeholder="Enter test name"
                      type="text"
                    />
                    <TextField
                      label="Language"
                      placeholder="Select Test Language"
                      type="text"
                    />
                    <TextField
                      label="Level"
                      placeholder="Select Test Level"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full items-center">
                    <button className="text-sm 2xl:text-base font-semibold px-5 py-3 rounded-md w-full bg-blue-600 text-white hover:bg-blue-500">
                      Continue
                    </button>

                    <button className="flex justify-center gap-2 text-sm 2xl:text-base px-5 py-3 rounded-md w-full text-slate-500 hover:bg-slate-100 border border-slate-200">
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </CardLayout>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NewTestForm;
