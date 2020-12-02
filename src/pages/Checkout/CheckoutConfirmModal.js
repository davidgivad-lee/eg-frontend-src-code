import React from "react";

import SuccessModal from "../../components/Modal/SuccessModal";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";

const CheckoutConfirmModal = (props) => {
  const { onClickHomePage, onClickMyOrder } = props;
  return (
    <SuccessModal
      id="checkoutSuccessModal"
      text="¡Gracias! El pedido fue realizado exitosamente."
      submitButtonText="Ver pedidos"
      cancelButtonText="Ir al Inicio"
      handleSubmit={onClickHomePage}
      handleCancel={onClickMyOrder}
    >
      <CheckIcon
        className="text-success mb-3 float-left mx-3"
        width="15"
        height="15"
      />
      <p className="font-15 text-secondary text-left">
        El pedido realizado se puede verificar en la información de Mi Cuenta.
      </p>
      <CheckIcon
        className="text-success mb-3 float-left mx-3"
        width="15"
        height="15"
      />
      <p className="font-15 text-secondary text-left">
        El pedido se comienza armar una vez que se confirma el pago
        correspondiente.
      </p>
      <CheckIcon
        className="text-success mb-3 float-left mx-3"
        width="15"
        height="15"
      />
      <p className="font-15 text-secondary text-left">
        Cuando el pedido esta listo para enviar/retirar les notificaremos por su
        correo electrónico y/o por Wpp.
      </p>
      <CheckIcon
        className="text-success mb-3 float-left mx-3"
        width="15"
        height="15"
      />
      <p className="font-15 text-secondary text-left">
        Por cualquier dudas consultanos!
      </p>
    </SuccessModal>
  );
};

export default CheckoutConfirmModal;
