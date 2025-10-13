import React from "react";

interface ModalProps {
    show: boolean;
    image?: string;
    content?: React.ReactNode;
    onClose: () => void;
    title?: string
}

const Modal: React.FC<ModalProps> = ({ show, image, content, onClose, title }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto overscroll-contain">
            <div className="max-w-7xl mx-auto p-4">
                <button
                    onClick={() => onClose()}
                    className="w-10 h-10 rotate-45 cursor-pointer rounded-full bg-[#EAF4FF] absolute top-6 right-10"
                    aria-label="Close"
                >
                    +
                </button>

                {/* Image Section */}
                <div className="md:grid md:grid-cols-3 md:gap-10 gap-4">
                    <img
                        src={image}
                        alt="modal visual"
                        className="w-full object-cover"
                    />
                    <div className="col-span-2">
                        <p className="md:text-4xl text-3xl font-light my-8">{title}</p>
                        <div className="text-[#595853]">
                            {content}
                        </div>
                    </div>

                </div>
            </div>

            {/* Scrollable Content */}
        </div>
    );
};

export default Modal;
