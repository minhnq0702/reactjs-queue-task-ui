import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';

export interface CSideModalProps {
  title?: string;
  isOpen: boolean;
  onOpenChange: () => void;
}

const CSideModal = ({ title, isOpen, onOpenChange }: CSideModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top"
      motionProps={{
        variants: {
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            x: 50,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
      className="dark"
      classNames={{
        wrapper: 'fixed inset-0 z-50 flex items-center justify-end',
        base: 'h-screen md:h-5/6',
      }}
    >
      <ModalContent>
        {title ? <ModalHeader>{title}</ModalHeader> : null}
        <ModalBody>Modal Content</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CSideModal;
