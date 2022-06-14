import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import moment from "moment";

interface ModelTypes {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

type FormData = {
  type: string;
  description: string;
};

const MomentModal: React.FC<ModelTypes> = ({
  isOpen,
  closeModal,
  openModal,
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [today, setToday] = useState(moment());

  const onChangeDate = () => {
    const newDate = today.add(1, "days");
    setToday(moment(newDate));
  };

  console.log(today);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-25" />
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
                <Dialog.Panel className="w-full px-2 py-2 max-w-xl min-h-[60vh] transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  {/* header */}
                  <div className="flex items-center justify-between">
                    <h1>Book you show</h1>
                    <XIcon
                      className="h-5 cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onChangeDate()}
                      className="bg-red-500 text-white px-5 py-2 rounded-md"
                    >
                      ADD
                    </button>
                    <div className="flex items-center justify-center">
                      <h1>{today.format("DD/MM/YYYY")}</h1>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MomentModal;
