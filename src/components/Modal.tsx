import { Dialog } from "@headlessui/react"
import React from "react"

type ModalProps = {
  title: string
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ title, children, isOpen, setIsOpen }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-full max-w-screen-lg rounded bg-white p-4 md:p-7">
            <div className="relative flex flex-row justify-between items-start">
              <Dialog.Title className="text-xl text-black underline decoration-accent font-semibold mb-4">
                {title}
              </Dialog.Title>
              <button
                className="font-bold text-xl absolute -top-2 md:-top-4 right-0"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                X
              </button>
            </div>
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal
