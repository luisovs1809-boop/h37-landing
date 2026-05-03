import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de Agendas H37 conforme a la LFPDPPP.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Aviso de privacidad" updated="3 de mayo de 2026">
      <p>
        En cumplimiento a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), <strong>Grupo H37</strong> (responsable), con domicilio fiscal en Querétaro, México, pone a disposición el siguiente aviso de privacidad para el producto <strong>Agendas H37</strong>.
      </p>

      <h2>1. Datos personales que recabamos</h2>
      <p>Para brindar el servicio recabamos los siguientes datos del titular del negocio (cliente del software):</p>
      <ul>
        <li>Nombre, correo electrónico y teléfono de contacto</li>
        <li>Información del negocio (razón social, domicilio, RFC opcional para facturación)</li>
        <li>Datos de pago manejados directamente por la institución bancaria correspondiente</li>
      </ul>

      <h2>2. Datos de los clientes finales del negocio</h2>
      <p>
        El sistema permite al titular del negocio capturar datos de sus propios clientes (nombre, teléfono, correo, historial de citas). Esos datos pertenecen al titular del negocio, quien actúa como responsable del tratamiento ante sus clientes finales y se obliga a cumplir con sus propias obligaciones bajo la LFPDPPP.
      </p>
      <p>
        Grupo H37 actúa como <strong>encargado del tratamiento</strong> respecto a esos datos, limitándose a almacenarlos y procesarlos conforme a las instrucciones del responsable, sin usarlos para fines propios.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <p>Tus datos como cliente del software se utilizan para:</p>
      <ul>
        <li>Brindarte el servicio contratado</li>
        <li>Emitir comprobantes fiscales</li>
        <li>Notificarte de actualizaciones, mantenimientos o avisos relevantes del producto</li>
        <li>Contactarte para soporte técnico</li>
      </ul>
      <p>
        No utilizamos tus datos para fines distintos sin tu consentimiento expreso.
      </p>

      <h2>4. Transferencia de datos</h2>
      <p>
        No transferimos tus datos personales a terceros, salvo cuando sea necesario para la prestación del servicio (ej. proveedor de hosting, proveedor de correo transaccional, autoridades fiscales) o cuando sea requerido por ley.
      </p>

      <h2>5. Derechos ARCO</h2>
      <p>
        Tienes derecho a <strong>Acceder, Rectificar, Cancelar u Oponerte</strong> al tratamiento de tus datos personales. Para ejercer cualquiera de estos derechos, envía un correo a <a href="mailto:admon@grupoh37.tech">admon@grupoh37.tech</a> con asunto &quot;Derechos ARCO&quot; y la información que necesites modificar. Responderemos dentro de los 20 días hábiles siguientes.
      </p>

      <h2>6. Medidas de seguridad</h2>
      <p>
        Implementamos medidas técnicas, físicas y administrativas razonables para proteger tus datos personales contra acceso no autorizado, daño, pérdida o alteración. Esto incluye conexiones cifradas (HTTPS), copias de respaldo periódicas y controles de acceso restringido al personal autorizado.
      </p>

      <h2>7. Cookies</h2>
      <p>
        El sitio <strong>agendas.grupoh37.tech</strong> puede utilizar cookies estrictamente necesarias para el funcionamiento del sitio. No utilizamos cookies de seguimiento publicitario ni compartimos tu navegación con terceros.
      </p>

      <h2>8. Cambios al aviso de privacidad</h2>
      <p>
        Cualquier modificación a este aviso será publicada en esta misma página y, cuando aplique, notificada al correo registrado del cliente.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para cualquier duda relacionada con este aviso de privacidad o el tratamiento de tus datos personales, contáctanos en <a href="mailto:admon@grupoh37.tech">admon@grupoh37.tech</a>.
      </p>
    </LegalLayout>
  );
}
