"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.push('/menu');
  }

  return (
    <dialog ref={dialogRef} className={styles.modal} onClose={onDismiss}>
      <div className={styles.modalContent}>
        <button onClick={onDismiss} className={styles.closeBtn}>×</button>
        {children}
      </div>
    </dialog>
  );
}
